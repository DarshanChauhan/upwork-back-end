const db = require("../model/index");
const TestResult = db.testResult;

const insertTestResultData = async (req, res) => {
  let testResult;
  try {
    const { freelancerId, testId, testResultLink, score, displayOnProfile } =
      req.body;
    testResult = await TestResult.create({
      freelancerId: freelancerId,
      testId: testId,
      testResultLink: testResultLink,
      score: score,
      displayOnProfile: displayOnProfile,
    });
    if (testResult) {
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
  insertTestResultData,
};
