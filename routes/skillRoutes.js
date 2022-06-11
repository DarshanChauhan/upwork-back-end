const express = require("express");
const route = new express.Router();

const { insertSkillData } = require("../controller/skillController");

// post API
route.post("/", insertSkillData);

module.exports = route;
