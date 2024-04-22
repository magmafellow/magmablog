import pg from "pg";
const { Pool } = pg;

import password from "./key.mjs";

console.log("-=Seed Script strated=-");

async function createDB() {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: password,
    port: 5432,
  });

  try {
    console.log("-> creating magmablog database...");
    await pool.query("CREATE DATABASE magmablog;");
  } catch (error) {
    console.log("<- magmablog database already exists!");
    return;
  } finally {
    console.log("<- createDB function is done")
    await pool.end()
  }
  console.log("<- created magmablog database");
}

async function createAuthorTable(){
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "magmablog",
    password: password,
    port: 5432,
  });

  try {
    console.log('-> creating author Table')
    await pool.query(`
      CREATE TABLE IF NOT EXISTS author (
          author_id SERIAL PRIMARY KEY,
          first_name VARCHAR(30) NOT NULL,
          last_name VARCHAR(30) NOT NULL,
          dateofbirth DATE,
          email VARCHAR(50),
          password VARCHAR(30) NOT NULL
        );
        `)
      console.log('<- completed author Table');
      await pool.end();
  } catch (error) {
    console.log(error);
    throw error
  }
}

async function createPostTable(){
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "magmablog",
    password: password,
    port: 5432,
  });

  try {
    console.log('-> creating post Table')
    await pool.query(`
      CREATE TABLE IF NOT EXISTS post (
        post_id SERIAL PRIMARY KEY,
        author_id INTEGER REFERENCES author (author_id),
        post_content TEXT NOT NULL,
        time_created TIMESTAMP NOT NULL,
        time_updated TIMESTAMP NOT NULL
      );
    `)
    console.log('<- completed post Table')
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function main() {
  await createDB();
  await createAuthorTable();
  await createPostTable();

  console.log('-=Seed Script done=-')
}

main();
