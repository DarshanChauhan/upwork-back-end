const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const ExpectedDuration = sequelize.define(
    "expectedDuration",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      durationText: { type: Sequelize.STRING },

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
  return ExpectedDuration;
};
