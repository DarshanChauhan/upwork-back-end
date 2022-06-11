const db = require("../model/index");
const Freelancer = db.freelancer;

const InsertFreelancer = async (req, res) => {
  let freelancer;
  try {
    const { userDetailsId, location, overview } = req.body;
    freelancer = await Freelancer.create({
      userDetailsId: userDetailsId,
      location: location,
      overview: overview,
    });
    if (freelancer) {
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
  InsertFreelancer,
};
