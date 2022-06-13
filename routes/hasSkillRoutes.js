const express = require("express");
const route = new express.Router();

const { insertHasSkillData } = require("../controller/hasSkillController");

// post API
route.post("/", insertHasSkillData);

module.exports = route;
