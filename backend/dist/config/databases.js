"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_async_1 = require("mysql2-async");
console.log(process.env.DB_HOST);
// mysql
const MYSQL_DB = new mysql2_async_1.default({
    pool: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    skiptzfix: true
});
exports.default = MYSQL_DB;
