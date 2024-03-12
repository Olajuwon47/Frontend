const express = require("express");
const  postgres= require(' postgres');
const cors= require("cors");
const app = express();
app.use(cors());
const db = postgres.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"LoginSignup",
})