const db = require("../model/index");
const Attachment = db.attachment;

const insertAttachmentData = async (req, res) => {
  let attachment;
  try {
    const { messageId, attachmentLink } = req.body;
    attachment = await Attachment.create({
      messageId: messageId,
      attachmentLink: attachmentLink,
    });
    if (attachment) {
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
  insertAttachmentData,
};
