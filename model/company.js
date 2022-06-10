const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "companyClient",
    {
      companyId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      companyName: { type: Sequelize.STRING },
      companyLocation: { type: Sequelize.STRING },

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
  return Company;
};
