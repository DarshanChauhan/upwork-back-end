const express = require("express");
const route = new express.Router();

route.use("/user", require("./userRoutes"));
module.exports = route;
