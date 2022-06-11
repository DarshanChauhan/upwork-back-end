const express = require("express");
const route = new express.Router();

const { InsertFreelancer } = require("../controller/freelancerController");

// post API
route.post("/", InsertFreelancer);

module.exports = route;
