const express = require("express");
const indexRoutes = require("./routes/indexRoutes");

const app = express();

app.use("/", indexRoutes);
module.exports = app;
