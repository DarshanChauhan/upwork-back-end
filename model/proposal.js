const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define(
    "proposal",
    {
      proposalId: {
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
      freelancerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "freelancers",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      proposalTime: {
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
      paymentAmount: { type: DataTypes.DECIMAL(8, 2) },
      currentProposalStatus: {
        type: Sequelize.INTEGER,
        references: {
          model: "proposal_status_catalogs",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      clientGrade: { type: Sequelize.INTEGER, allowNull: false },
      clientComment: { type: Sequelize.TEXT, allowNull: false },
      freelancerGrade: { type: Sequelize.INTEGER, allowNull: false },
      freelancerComment: { type: Sequelize.TEXT, allowNull: false },
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
  return Proposal;
};
