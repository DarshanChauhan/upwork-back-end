const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define(
    "contract",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      proposalId: {
        type: Sequelize.INTEGER,
        references: {
          model: "proposals",
          key: "proposal_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "company_contracts",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      freelancerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "freelancer_contracts",
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
  return Contract;
};
