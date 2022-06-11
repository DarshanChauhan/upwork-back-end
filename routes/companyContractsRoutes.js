const express = require("express");
const route = new express.Router();

const {
  InsertcompanyContracts,
} = require("../controller/companyContractsController");

// post API
route.post("/", InsertcompanyContracts);

module.exports = route;
