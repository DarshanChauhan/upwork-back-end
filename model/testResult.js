const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const TestResult = sequelize.define(
    "testResult",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      freelancerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "freelancers",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      testId: {
        type: Sequelize.INTEGER,
        references: {
          model: "tests",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      startTime: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      endTime: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      testResultLink: { type: Sequelize.TEXT, allowNull: false },
      score: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      displayOnProfile: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
  return TestResult;
};
