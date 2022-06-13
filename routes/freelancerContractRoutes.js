const express = require("express");
const route = new express.Router();

const {
  insertFreelancerContractData,
} = require("../controller/freelancerContractController");

// post API
route.post("/", insertFreelancerContractData);

module.exports = route;
