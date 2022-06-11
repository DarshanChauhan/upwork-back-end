const express = require("express");
const route = new express.Router();

const { insertAttachmentData } = require("../controller/attachmentController");

// post API
route.post("/", insertAttachmentData);

module.exports = route;
