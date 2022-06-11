const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    "job",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      hireManagerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "hire_managers",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      expectedDurationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "expected_durations",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      complexityId: {
        type: Sequelize.INTEGER,
        references: {
          model: "complexities",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      description: { type: Sequelize.TEXT },
      mainSkillId: {
        type: Sequelize.INTEGER,
        references: {
          model: "skills",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      paymentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "payment_types",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },

      paymentAmount: {
        type: DataTypes.DECIMAL(8, 2),
      },

      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    { underscored: true }
  );
  return Job;
};
