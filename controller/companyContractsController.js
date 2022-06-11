const db = require("../model/index");
const CompanyContract = db.companyContract;

const InsertcompanyContracts = async (req, res) => {
  let companyContract;
  try {
    const { companyName, companylocation } = req.body;
    companyContract = await CompanyContract.create({
      companyName: companyName,
      companylocation: companylocation,
    });
    if (companyContract) {
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
  InsertcompanyContracts,
};
