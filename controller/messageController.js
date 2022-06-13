const db = require("../model/index");
const Message = db.message;

const insertMessageData = async (req, res) => {
  let message;
  try {
    const {
      freelancerId,
      hireManagerId,
      messageText,
      proposalId,
      proposalStatusCatalogId,
    } = req.body;
    message = await Message.create({
      freelancerId: freelancerId,
      hireManagerId: hireManagerId,
      messageText: messageText,
      proposalId: proposalId,
      proposalStatusCatalogId: proposalStatusCatalogId,
    });
    if (message) {
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
  insertMessageData,
};
