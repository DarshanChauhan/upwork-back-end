const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define(
    "attachment",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      messageId: {
        type: Sequelize.INTEGER,
        references: {
          model: "messages",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      attachmentLink: {
        type: Sequelize.TEXT,
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
  return Attachment;
};
