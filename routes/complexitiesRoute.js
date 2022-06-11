const express = require("express");
const route = new express.Router();

const {
  insertComplexitiesData,
} = require("../controller/complexitiesController");

// post API
route.post("/", insertComplexitiesData);

module.exports = route;
