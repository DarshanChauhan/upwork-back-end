const db = require("../model/index");
const Contract = db.contract;

const insertContractData = async (req, res) => {
  let contract;
  try {
    const {
      proposalId,
      companyId,
      freelancerId,
      paymentTypeId,
      paymentAmount,
    } = req.body;
    contract = await Contract.create({
      proposalId: proposalId,
      companyId: companyId,
      freelancerId: freelancerId,
      paymentTypeId: paymentTypeId,
      paymentAmount: paymentAmount,
    });
    if (contract) {
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
  insertContractData,
};
