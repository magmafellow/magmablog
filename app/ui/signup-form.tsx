"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "@/app/actions/auth";
import styles from "./signup.module.scss";

export default function SignupForm() {
  const [state, dispatch] = useFormState(signup, undefined);

  return (
    <form className={styles.form} action={dispatch}>
      <div className={styles.inputBox}>
        <label htmlFor="signup-username">Username: </label>
        <input
          className={styles.input}
          type="text"
          id="signup-username"
          name="username"
        />
      </div>
      <div className={styles.formError}>{state?.errors?.username}</div>
      <div className={styles.inputBox}>
        <label htmlFor="email">Email: </label>
        <input className={styles.input} type="text" id="email" name="email" />
      </div>
      <div className={styles.formError}>{state?.errors?.email}</div>
      <div className={styles.inputBox}>
        <label htmlFor="signup-password">Password: </label>
        <input
          className={styles.input}
          type="password"
          id="signup-password"
          name="password"
        />
      </div>
      <div className={styles.formError}>{state?.errors?.password}</div>
      <div className={styles.message}>{state?.message}</div>
      <div className={styles.submitBox}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
