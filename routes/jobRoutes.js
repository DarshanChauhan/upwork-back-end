const express = require("express");
const route = new express.Router();

const { insertJobsData } = require("../controller/jobsController");

// post API
route.post("/", insertJobsData);

module.exports = route;
