const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const {
  CLOUDINARY_HOST,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

cloudinary.config({
  cloud_name: "dcufduhv8",
  api_key: "572114662358188",
  api_secret: "-FAW_eePNrs9y05Rwtm4jHMdWEk",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "folder name",
    format: async () => "png",
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
