const express = require("express");
const indexRouter = require("./routes/indexRoutes");

const app = express();

app.use("/", indexRouter);
