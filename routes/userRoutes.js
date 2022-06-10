const express = require("express");
const route = new express.Router();

const { insertUser } = require("../controller/userController");
const { validate } = require("../validation/validation");
const { userSchema } = require("../validationSchema/userschema");

// post API
route.post("/sign-up", validate(userSchema), insertUser);

module.exports = route;
