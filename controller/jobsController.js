const db = require("../model/index");
const Jobs = db.jobs;

const insertJobsData = async (req, res) => {
  let job;
  try {
    const {
      hireManagerId,
      expectedDurationId,
      complexityId,
      description,
      mainSkillId,
      paymentTypeId,
      paymentAmount,
    } = req.body;
    job = await Jobs.create({
      hireManagerId: hireManagerId,
      expectedDurationId: expectedDurationId,
      complexityId: complexityId,
      description: description,
      mainSkillId: mainSkillId,
      paymentTypeId: paymentTypeId,
      paymentAmount: paymentAmount,
    });
    if (job) {
      res.json({
        message: "Data Inserted Into DB ✅ ",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while add Data ",
    });
  }
};
module.exports = {
  insertJobsData,
};
