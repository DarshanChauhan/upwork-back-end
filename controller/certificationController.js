const db = require("../model/index");
const Certification = db.certification;

const insertCertificationData = async (req, res) => {
  let certification;
  try {
    const {
      freelancerId,
      certificationName,
      provider,
      description,
      dateEarned,
      certificationLink,
    } = req.body;
    certification = await Certification.create({
      freelancerId: freelancerId,
      certificationName: certificationName,
      provider: provider,
      description: description,
      dateEarned: dateEarned,
      certificationLink: certificationLink,
    });
    if (certification) {
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
  insertCertificationData,
};
