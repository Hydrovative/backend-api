import * as pg from "pg";
import dotenv from "dotenv";
dotenv.config()

//data terdapat pada file .env
const db = new pg.Pool ({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
});

export default db;