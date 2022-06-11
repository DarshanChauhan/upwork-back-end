const db = require("../model/index");
const Payment = db.paymentType;

const insertPaymentData = async (req, res) => {
  let payment;
  try {
    const { typeName } = req.body;
    payment = await Payment.create({
      typeName: typeName,
    });
    if (payment) {
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
  insertPaymentData,
};
