import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import mysql from "mysql";
import path from "path";

const app = express();
const port = 5000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ch3r10"
});
