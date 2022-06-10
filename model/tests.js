const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "tests",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      testName: { type: Sequelize.STRING },
      testLink: { type: Sequelize.TEXT },
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
  return Test;
};
