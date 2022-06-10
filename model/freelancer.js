const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Freelancer = sequelize.define(
    "freelancers",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userDetailsId: {
        type: Sequelize.INTEGER,
        references: {
          model: "userdetails",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      registrationDate: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      location: { type: Sequelize.TEXT },
      overview: { type: Sequelize.STRING },
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
  return Freelancer;
};
