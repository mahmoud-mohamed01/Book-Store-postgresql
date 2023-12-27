import pg from"pg";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bookStore", "postgres", "MAHMOUD6", {
  host: "localhost",
  dialect: "postgres",
});
/*
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "bookStore",
  password: "MAHMOUD6",
  port: 5432,
});
*/


export default sequelize;