const ImageUploadRouter = require("express").Router();
const MyImage = require("../../models/fileUpload");

const { UploadImage } = require("../../controller/uploadImage");

const parser = require("../../middleware/cloudinary.config");

function getUserName() {
  axios.get("http://localhost:5000/api/users/userInfo").then((response) => {
    userInfo = response.data;
    console.log("this is the url: ", userInfo);
  });
  return userInfo;
}

module.exports = ImageUploadRouter;
