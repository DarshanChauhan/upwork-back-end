const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "otherSkills",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      jobId: {
        type: Sequelize.INTEGER,
        references: {
          model: "jobs",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      skillId: {
        type: Sequelize.INTEGER,
        references: {
          model: "skills",
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
  return Skill;
};
