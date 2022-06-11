const express = require("express");
const route = new express.Router();

const { insertPaymentData } = require("../controller/paymentController");

// post API
route.post("/", insertPaymentData);

module.exports = route;
