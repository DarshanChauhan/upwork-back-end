const db = require("../model/index");
const TestData = db.test;

const inserttestData = async (req, res) => {
  let testData;
  try {
    const { testName, testLink } = req.body;
    testData = await TestData.create({
      testName: testName,
      testLink: testLink,
    });
    if (testData) {
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
  inserttestData,
};
