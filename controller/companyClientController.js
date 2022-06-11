const db = require("../model/index");
const CompanyClient = db.company;

const InsertCompanyClient = async (req, res) => {
  let companyClient;
  try {
    const { companyName, companylocation } = req.body;
    companyClient = await CompanyClient.create({
      companyName: companyName,
      companylocation: companylocation,
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
