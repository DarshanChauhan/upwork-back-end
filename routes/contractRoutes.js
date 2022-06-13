const express = require("express");
const route = new express.Router();

const { insertContractData } = require("../controller/contractController");

// post API
route.post("/", insertContractData);

module.exports = route;
