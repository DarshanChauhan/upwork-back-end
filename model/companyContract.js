const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CompanyContract = sequelize.define(
    "companyContract",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      companyName: {
        type: Sequelize.STRING,
      },
      companyLocation: {
        type: Sequelize.STRING,
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
  return CompanyContract;
};
