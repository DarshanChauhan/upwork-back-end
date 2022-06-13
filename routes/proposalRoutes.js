const express = require("express");
const route = new express.Router();

const { insertProposalData } = require("../controller/proposalController");

// post API
route.post("/", insertProposalData);

module.exports = route;
