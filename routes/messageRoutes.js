const express = require("express");
const route = new express.Router();

const { insertMessageData } = require("../controller/messageController");

// post API
route.post("/", insertMessageData);

module.exports = route;
