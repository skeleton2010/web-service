"use strict";

const express = require("express");
const app = express();
const BodyParser = require("body-parser");

const home = require("./src/routes/home");

//앱셋팅
app.set("views", "./src/views");    
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extends: true}));

app.use("/", home);

module.exports = app;
