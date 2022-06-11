const express = require("express");
const route = new express.Router();

const { insertTestResultData } = require("../controller/testResultController");

// post API
route.post("/", insertTestResultData);

module.exports = route;
