const express = require("express");
const route = new express.Router();

const {
  insertCertificationData,
} = require("../controller/certificationController");

// post API
route.post("/", insertCertificationData);

module.exports = route;
