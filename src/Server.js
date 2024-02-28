const express = require("express");
const Mysql = require('Mysql');
const cors= require("cors");
const app = express();
app.use(cors());
const db =Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"LoginSignupy",
})