const express = require("express");
const route = new express.Router();

const {
  insertExpectedDurationData,
} = require("../controller/expectedDurationController");

// post API
route.post("/", insertExpectedDurationData);

module.exports = route;
