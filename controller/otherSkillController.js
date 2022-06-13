const db = require("../model/index");
const OtherSkill = db.otherSkills;

const insertOtherSkillData = async (req, res) => {
  let otherSkill;
  try {
    const { jobId, skillId } = req.body;
    otherSkill = await OtherSkill.create({
      jobId: jobId,
      skillId: skillId,
    });
    if (otherSkill) {
      res.json({
        message: "Thanks for Data Insert Into DB ✅ ",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while add Data ",
    });
  }
};
module.exports = {
  insertOtherSkillData,
};
