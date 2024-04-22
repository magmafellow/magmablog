import pg from "pg";
const { Pool } = pg;

import password from "./key.mjs";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "magmablog",
  password: password,
  port: 5432,
});

async function insertAuthors() {
  try {
    console.log('-> trying to insert authors...')
    await pool.query(`
      INSERT INTO author (first_name, last_name, dateofbirth, email, password)
      VALUES ('alex', 'romanov', '2005-04-23', 'magmafellow@gmail.com', 'amazingMagma1!'),
             ('anrew', 'molotov', '1999-03-17', 'molotov_rew@yandex.ru', 'high-molotov'),
             ('john', 'candell', '2003-12-01', 'candell-top@jupiter.galaxy', 'hew123');
    `)
    console.log('<- adding authors has been processed SUCCESSFULY')
    await pool.end();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function insertPosts() {
  try {
    console.log('-> trying to insert posts...')
    await pool.query(`
      INSERT INTO post (author_id, post_content, time_created, time_updated)
      VALUES (1, 'Hello guys1!! It is my first post on this platform! Enjoy it', NOW(), NOW()),
             (2, 'I will discuss about my jobs here. Design is so beautiful one.', NOW(), NOW()),
             (2, 'Insiders here', NOW(), NOW()),
             (3, 'Cars... I love them. Especially fast cars..', NOW(), NOW());
    `)
    console.log('<- adding posts has been processed SUCCESSFULY')
    await pool.end();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function isnertTags(){
  try {
    console.log('-> trying to insert tags...')
    await pool.query(`
      INSERT INTO tag (name) VALUES ('design'), ('nature'), ('cars'), ('just post'), ('insides')
    `)
    console.log('<- adding tags has been processed SUCCESSFULY')
    await pool.end();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function insertPostsTags(){
  try {
    console.log('-> trying to insert posts_tags...')
    await pool.query(`
      INSERT INTO post_tag (post_id, tag_id) VALUES
      (1, 4), (2, 1), (2, 4), (3, 4), (4, 3), (4, 4);
    `)
    console.log('<- adding posts_tags has been processed SUCCESSFULY')
    await pool.end();
  } catch (error) {
    console.log(error);
    throw error;
  }
}


async function main(){
  // await insertAuthors();
  // await insertPosts();
  // await isnertTags();
  await insertPostsTags();

}

main();
