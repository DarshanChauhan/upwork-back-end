const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const ProposalStatusCatalog = sequelize.define(
    "proposalStatusCatalog",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      statusName: {
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
  return ProposalStatusCatalog;
};
