const ImageSchema = require("../models/fileUpload");
const imageUpload = require("../models/fileUpload");
var userImageData = {};
var replacement = {};
const options = { upsert: true, returnNewDocument: false };

module.exports.UploadImage = async (req, res) => {
  console.log("upload image.js", req.body);

  email = req.body.email;
  (image = req.file.path),
    (replacement = {
      email,
      image,
    });
  const existingUser = await imageUpload.findOne({ email });

  if (existingUser) {
    imageUpload
      .findOneAndReplace({ email: email }, replacement, options)
      .exec(function (err, imageUpload) {
        if (err) {
          console.log(err);
        } else {
          userImageData = replacement;
          
        }
      });
  } else {
    const imageUploaded = new imageUpload({
      email: req.body.email,
      image: req.file.path,
    });
    await imageUploaded.save();
  }

  try {
    S;
  } catch (error) {
    return res.status(400).json({
      message: `image upload failed, check to see the ${error}`,
      status: "error",
    });
  }
};
