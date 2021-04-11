const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageUpload = new Schema(
  {
    email: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = imageUpload = mongoose.model("ImageUpload", ImageUpload);
