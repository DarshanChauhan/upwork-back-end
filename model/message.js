const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "messages",
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
      hireManagerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "hire_managers",
          key: "id",
        },
      },
      messageTime: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      messageText: {
        type: Sequelize.TEXT,
      },
      proposalId: {
        type: Sequelize.INTEGER,
        references: {
          model: "proposals",
          key: "proposal_id",
        },
      },
      proposalStatusCatalogId: {
        type: Sequelize.INTEGER,
        references: {
          model: "proposal_status_catalogs",
          key: "id",
        },
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
  return Message;
};
