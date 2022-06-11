const db = require("../model/index");
const ExpectedDuration = db.expectedDuration;

const insertExpectedDurationData = async (req, res) => {
  let expectedDuration;
  try {
    const { durationText } = req.body;
    expectedDuration = await ExpectedDuration.create({
      durationText: durationText,
    });
    if (expectedDuration) {
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
  insertExpectedDurationData,
};
