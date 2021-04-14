const routeImage = require("../models/routeImages");
var userImageData = {};
var replacement = {};
const options = { upsert: true, returnNewDocument: false };

module.exports.RouteImage = async (req, res) => {
  console.log("route image.jssksksks", req.body.lng);

  email = req.body.email;
   //const existingUser = await imageUpload.findOne({ email });

  
    console.log("it is about to save.", req.body.lat, req.body.lng);
    const newRoute = new routeImage({
      route_id: req.body.id,
      email: req.body.email,
      image: req.file.path,
      lat: req.body.lat,
      lng: req.body.lng,
      description: req.body.description,
    });
    await newRoute.save();

  try {
    S;
  } catch (error) {
    return res.status(400).json({
      message: `image upload failed, check to see the ${error}`,
      status: "error",
    });
  }
};
