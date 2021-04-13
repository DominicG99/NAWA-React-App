const ImageSchema = require("../models/fileUpload");
const imageUpload = require("../models/fileUpload");

module.exports.UploadImage = async (req, res) => {
  const imageUploaded = new imageUpload({
    email: req.body.email,
    image: req.file.path,
  });

  try {
    await imageUploaded.save();
  } catch (error) {
    return res.status(400).json({
      message: `image upload failed, check to see the ${error}`,
      status: "error",
    });
  }
};
