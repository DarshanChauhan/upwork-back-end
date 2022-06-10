const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Certification = sequelize.define(
    "certifications",
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
      certificationName: { type: Sequelize.STRING },
      provider: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      dateEarned: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      certificationLink: { type: Sequelize.TEXT, allowNull: false },
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
  return Certification;
};
