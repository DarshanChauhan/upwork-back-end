const express = require("express");
const route = new express.Router();

const {
  InsertCompanyClient,
} = require("../controller/companyClientController");

// post API
route.post("/", InsertCompanyClient);

module.exports = route;
