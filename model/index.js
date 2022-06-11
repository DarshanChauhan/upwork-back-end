const { Sequelize, DataTypes } = require("sequelize");

// DB Connection

const sequelize = new Sequelize("upwork", "root", "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
  pool: { max: 5, min: 0, idle: 10000 },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to DB successfully ✅");
  })
  .catch((error) => {
    console.log(error);
  });

// table schema Declaration

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, DataTypes);
db.freelancer = require("./freelancer")(sequelize, DataTypes);
db.certification = require("./certification")(sequelize, DataTypes);
db.testResult = require("./testResult")(sequelize, DataTypes);
db.test = require("./tests")(sequelize, DataTypes);
db.hasSkill = require("./hasSkill")(sequelize, DataTypes);
db.complexity = require("./complexity")(sequelize, DataTypes);
db.expectedDuration = require("./expectedDuration")(sequelize, DataTypes);
db.company = require("./company")(sequelize, DataTypes);
db.paymentType = require("./paymentType")(sequelize, DataTypes);
db.skill = require("./skill")(sequelize, DataTypes);
db.hireManager = require("./hireManager")(sequelize, DataTypes);
db.jobs = require("./job")(sequelize, DataTypes);
db.otherSkills = require("./otherSkills")(sequelize, DataTypes);
db.attachment = require("./attachment")(sequelize, DataTypes);
db.companyContract = require("./companyContract")(sequelize, DataTypes);
db.contract = require("./contract")(sequelize, DataTypes);
db.freelancerContract = require("./freelancerContract")(sequelize, DataTypes);
db.message = require("./message")(sequelize, DataTypes);
db.proposal = require("./proposal")(sequelize, DataTypes);
db.proposalStatusCatalog = require("./proposalStatusCatalog")(
  sequelize,
  DataTypes
);

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and re-aync db");
});

module.exports = db;
