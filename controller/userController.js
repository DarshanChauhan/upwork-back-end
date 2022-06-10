const db = require("../model/index");
const User = db.user;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const insertUser = async (req, res) => {
  let user;
  try {
    const { username, email, password, userType } = req.body;
    console.log(req.body);
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    user = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      userType: userType,
    });
    if (user) {
      res.json({
        message: "Thanks for registering✅ ",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while add Data ",
    });
  }
};
module.exports = {
  insertUser,
};
