const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Hiremanager = sequelize.define(
    "hireManager",
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
      location: { type: Sequelize.STRING },
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "companyClient",
          key: "companyId",
          allowNull: false,
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
  return Hiremanager;
};
