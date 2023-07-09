import DB from "mysql2-async";

console.log(process.env.DB_HOST);

// mysql
const MYSQL_DB = new DB({
  pool: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  skiptzfix: true
});



export default MYSQL_DB;