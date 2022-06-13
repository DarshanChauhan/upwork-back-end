const db = require("../model/index");
const Proposal = db.proposal;

const insertProposalData = async (req, res) => {
  let proposal;
  try {
    const {
      jobId,
      freelancerId,
      paymentTypeId,
      paymentAmount,
      currentProposalStatusId,
      clientGrade,
      clientComment,
      freelancerGrade,
      freelancerComment,
    } = req.body;
    proposal = await Proposal.create({
      jobId: jobId,
      freelancerId: freelancerId,
      paymentTypeId: paymentTypeId,
      paymentAmount: paymentAmount,
      currentProposalStatusId: currentProposalStatusId,
      clientGrade: clientGrade,
      clientComment: clientComment,
      freelancerGrade: freelancerGrade,
      freelancerComment: freelancerComment,
    });
    if (proposal) {
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
  insertProposalData,
};
