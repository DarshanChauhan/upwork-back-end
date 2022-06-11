const db = require("../model/index");
const HireManager = db.hireManager;

const InsertHireManager = async (req, res) => {
  let hireManager;
  try {
    const { userDetailsId, location, companyId, companylocation } = req.body;
    hireManager = await HireManager.create({
      userDetailsId: userDetailsId,
      location: location,
      companyId: companyId,
      companylocation: companylocation,
    });
    if (hireManager) {
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
  InsertHireManager,
};
