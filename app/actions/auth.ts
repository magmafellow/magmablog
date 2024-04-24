"use server";

import { createSession } from "@/app/lib/session";
import { SignupFormSchema, LoginFormSchema, FormState } from "@/app/lib/definitions";
import { cookies } from "next/headers";
import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "win7&",
  port: 5432,
  database: "magmablog",
});

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { username, email, password } = validatedFields.data;

  // 3. Insert the user into the database or call an Auth Library's API
  const data = await pool.query(
    "INSERT INTO person (username, email, password) VALUES ($1, $2, $3)",
    [username, email, password]
  );

  const r = await pool.query("SELECT * FROM person WHERE email = $1", [email]);

  const user = r.rows[0];

  if (!user) {
    return {
      message: "An error occured while creating your account",
    };
  }

  // 4. Create user session
  await createSession(user.id);

  // 5. Redirect user
  redirect("/");
}

export async function login(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.log('validated fields are not good')
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { username, password } = validatedFields.data;

  // 3. Check the data passed to the user in a database
  const res = await pool.query("SELECT * FROM author WHERE author = $1", [
    username,
  ]);

  const user = res.rows[0];

  if(!user) {
    return {
      message: "Something is incorrect. Try again!",
    };
  }

  if (password === user.password) {
    // 4. Create user session
    await createSession(user.author_id);
  } else {
    return {
      message: "Credentials are wrong. Try again!",
    };
  }

  // 5. Redirect user
  redirect("/");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
