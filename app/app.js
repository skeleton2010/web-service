"use strict";

const express = require("express");
const app = express();

const home = require("./src/routes/home")

//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;