const db = require("../model/index");
const Skill = db.skill;

const insertSkillData = async (req, res) => {
  let skill;
  try {
    const { skillName } = req.body;
    skill = await Skill.create({
      skillName: skillName,
    });
    if (skill) {
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
  insertSkillData,
};
