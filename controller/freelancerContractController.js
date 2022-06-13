const db = require("../model/index");
const FreelancerContract = db.freelancerContract;

const insertFreelancerContractData = async (req, res) => {
  let freelancerContract;
  try {
    const { userDetailsId, location, overview } = req.body;
    freelancerContract = await FreelancerContract.create({
      userDetailsId: userDetailsId,
      location: location,
      overview: overview,
    });
    if (freelancerContract) {
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
  insertFreelancerContractData,
};
