const db = require("../model/index");
const Complexities = db.complexity;

const insertComplexitiesData = async (req, res) => {
  let complexities;
  try {
    const { complexityText } = req.body;
    complexities = await Complexities.create({
      complexityText: complexityText,
    });
    if (complexities) {
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
  insertComplexitiesData,
};
