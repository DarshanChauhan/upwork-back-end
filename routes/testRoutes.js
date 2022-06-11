const express = require("express");
const route = new express.Router();

const { inserttestData } = require("../controller/testController");

// post API
route.post("/", inserttestData);

module.exports = route;
