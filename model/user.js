const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "userdetails",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: { type: Sequelize.STRING },
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Email-id required",
          },
          isEmail: {
            args: true,
            msg: "Valid email-id required",
          },
        },

        unique: { args: true, msg: "Email address already in use!" },
      },
      password: { type: Sequelize.STRING },
      userType: {
        type: Sequelize.ENUM("client", "employee"),
        defaultValue: null,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    { underscored: true }
  );
  return User;
};
