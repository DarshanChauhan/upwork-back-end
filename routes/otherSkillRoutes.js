const express = require("express");
const route = new express.Router();

const { insertOtherSkillData } = require("../controller/otherSkillController");

// post API
route.post("/", insertOtherSkillData);

module.exports = route;
