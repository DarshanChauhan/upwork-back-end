const db = require("../model/index");
const ProposalStatusCatalog = db.proposalStatusCatalog;

const InsertProposalStatusCatalog = async (req, res) => {
  let proposalStatusCatalog;
  try {
    const { statusName } = req.body;
    proposalStatusCatalog = await ProposalStatusCatalog.create({
      statusName: statusName,
    });
    if (proposalStatusCatalog) {
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
  InsertProposalStatusCatalog,
};
