const db = require("../model/index");
const HasSkill = db.hasSkill;

const insertHasSkillData = async (req, res) => {
  let hasSkill;
  try {
    const { freelancerId, skillId } = req.body;
    hasSkill = await HasSkill.create({
      freelancerId: freelancerId,
      skillId: skillId,
    });
    if (hasSkill) {
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
  insertHasSkillData,
};
