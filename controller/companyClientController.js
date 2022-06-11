const db = require("../model/index");
const CompanyClient = db.company;

const InsertCompanyClient = async (req, res) => {
  let companyClient;
  try {
    const { companyName, companyLocation } = req.body;
    companyClient = await CompanyClient.create({
      companyName: companyName,
      companyLocation: companyLocation,
    });
    if (companyClient) {
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
  InsertCompanyClient,
};
