const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const hasSkill = sequelize.define(
    "hasSkill",
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
          model: "skills",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      skillId: {
        type: Sequelize.INTEGER,
        references: {
          model: "freelancers",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },

      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    { underscored: true }
  );
  return hasSkill;
};
