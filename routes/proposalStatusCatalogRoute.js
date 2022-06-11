const express = require("express");
const route = new express.Router();

const {
  InsertProposalStatusCatalog,
} = require("../controller/proposalStatusCatalogController");

// post API
route.post("/", InsertProposalStatusCatalog);

module.exports = route;
