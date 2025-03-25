var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/product", require("./routes/products_Route"));
app.use("/users", require("./routes/users_Route"));
app.use("/tags", require("./routes/users_Route"));

module.exports = app;
