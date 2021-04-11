const ImageUploadRouter = require("express").Router();
const MyImage = require("../../models/fileUpload");

const { UploadImage } = require("../../controller/uploadImage");
var userInfo = {}

const parser = require("../../middleware/cloudinary.config");

function getUserName(){
    axios.get("http://localhost:5000/api/users/userInfo")
    .then((response) => {
        userInfo = response.data
      console.log("this is the url: ", userInfo);
    })
    return(userInfo);
}



ImageUploadRouter.post("/image", parser.single("image"), UploadImage, (req, res) => {
    try {
        userInfo = getUserName();
        email = userInfo.email;
        console.log("User email is: ", email);
    }
    catch {

    }

});

module.exports = ImageUploadRouter;
