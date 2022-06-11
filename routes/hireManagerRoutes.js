const express = require("express");
const route = new express.Router();

const { InsertHireManager } = require("../controller/hireManagerController");

// post API
route.post("/", InsertHireManager);

module.exports = route;
