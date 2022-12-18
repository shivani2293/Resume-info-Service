const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const resumeCRUDRoutes = require("./api/resume-api");

app.use("/resume", resumeCRUDRoutes);

module.exports = app;
