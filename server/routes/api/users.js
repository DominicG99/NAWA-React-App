const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const user = require("../../models/user");
const app = require("../../app");
const LocationInformation = require("../../models/locationInformation");
const HistoricInformation = require("../../models/historicInformation");
const SaveRoute = require("../../models/saveRoute");
const { db } = require("../../models/user");
const MyImage = require("../../models/image");
let multer = require('multer');
let upload = multer();
var userInfo = {};
const { UploadImage } = require("../../controller/uploadImage");
const parser = require("../../middleware/cloudinary.config");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dirName = path.join(process.cwd(), "./files/");
    console.log(dirName);
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
    }
    cb(null, dirName);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
upload = multer({ storage: storage });

router.post("/imageData", upload.single('file'), async (req, res) => {
  try {
    var email = userInfo.email;
    let formData = req.body;
    console.log('form data', formData);
  //   var formData = new formData();
  //   var formData = req.body[Object.keys(req.body)[0]];
  //   console.log(formData);
  //   for(var pair of formData.entries()) {
  //     console.log(pair[0]+ ', '+ pair[1]);
  //  }
    const newImage = new MyImage({
      email,
      formData,
    });
    newImage.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/retrieveImage", async (req, res) => {
  var email = userInfo.email;
  console.log("emailskis: ", email);
  try {
    const existingUser = await MyImage.findOne({ email });
    if (existingUser) {

      var picture = existingUser.toObject();
      
      myEmail = existingUser.email;
      console.log("formData 2: ", picture.pictureURL, "Emailomode: ", myEmail);
      res.json(picture.pictureURL).send();
    } else {
      console.log("Bruh");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});



//Historical routes captured from locationInput
router.post("/historyCords", async (req, res) => {
  try {
    var email = userInfo.email;
    var startLat = req.body[Object.keys(req.body)[0]];
    var startLng = req.body[Object.keys(req.body)[1]];
    var destLat = req.body[Object.keys(req.body)[2]];
    var destLng = req.body[Object.keys(req.body)[3]];
    console.log("this is printing");
    console.log(startLat);
    console.log(startLng);
    console.log(destLat);
    console.log(destLng);
    const newHistory = new HistoricInformation({
      email,
      startLat,
      startLng,
      destLat,
      destLng,
      //m1lat,
      //m1lng,
      //m2lat,
      //m2lng,
      //m3lat,
      //m3lng,
    });
    newHistory.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//Pretty much same as historyCords, although will allow for user to save route, add image to this db as well
router.post("/savedRoute", async (req, res) => {
  try {
    var email = userInfo.email;
    var startLat = req.body[Object.keys(req.body)[0]];
    var startLng = req.body[Object.keys(req.body)[1]];
    var destLat = req.body[Object.keys(req.body)[2]];
    var destLng = req.body[Object.keys(req.body)[3]];

    console.log("this is printing");
    console.log(startLat);
    console.log(startLng);
    console.log(destLat);
    console.log(destLng);

    const newSave = new SaveRoute({
      email,
      startLat,
      startLng,
      destLat,
      destLng,
      //m1lat,
      //m1lng,
      //m2lat,
      //m2lng,
      //m3lat,
      //m3lng,
    });

    newSave.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

///////////Update Saved and Historical Routes - Done through Saved/History Page/////////

// register
router.post("/register", async (req, res) => {
  try {
    var firstName = req.body[Object.keys(req.body)[0]];
    var lastName = req.body[Object.keys(req.body)[1]];
    var email = req.body[Object.keys(req.body)[2]];
    var password = req.body[Object.keys(req.body)[3]];
    var password2 = req.body[Object.keys(req.body)[4]];
    var description = req.body[Object.keys(req.body)[5]];

    console.log(description);

    const newLocation = new LocationInformation({
      description,
      email,
    });

    newLocation.save();

    //const description = new LocationInformation(req.body);
    //    await location.save();
    //    console.log(location)
    //   const user = await User.findById.apply({_id: location.user})
    //   user.info.push(location);
    //   await user.save();

    if (!email || !password || !password2 || !firstName || !lastName) {
      return res
        .status(400)
        .json({ errorMessage: "PLease enter all required fields." });
    }
    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });
    }
    const existerUser = await User.findOne({ email: email });
    if (existerUser) {
      return res.status(400).json({
        errorMessage: "User is already registered.",
      });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    password = passwordHash;
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const savedUser = await newUser.save();
    const secret = process.env.SECRET_OR_KEY;

    //log user in

    //sign token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      secret
    );

    //send token in HTTP cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: false,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in
router.post("/login", async (req, res) => {
  try {
    const email = req.body[Object.keys(req.body)[0]];
    const password = req.body[Object.keys(req.body)[1]];
    // validate
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(401)
        .json({ errorMessage: "User is not yet registered." });

    userInfo = await await User.findOne({ email }).select(
      "-password -date -_id -__v"
    );

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong Password" });

    // sign the token
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.SECRET_OR_KEY
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: false,
      })
      .json({ userInfo })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  userInfo = {};
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.SECRET_OR_KEY);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get("/userFirstName", async (req, res) => {
  try {
    console.log("counting...");
    //   var hardBreak = 0;
    //   var userEmail = "noobnooberson2@gmail.com"
    //   User.findOne({email: userEmail}).exec (function (err, User){
    //     if (err) {
    //       console.log("err");
    //     } else {
    //         var firstName = User;
    //         console.log(firstName);
    //         res.json(firstName);
    //     }
    //   })
    // count++;
  } catch {}
});

router.get("/userInfo", (req, res) => {
  //console.log(userInfo);
  res.json({ userInfo }).send();
});

router.post("/updateData", async (req, res) => {
  try {
    const query = { email: userInfo.email };
    var firstName = req.body[Object.keys(req.body)[0]];
    var lastName = req.body[Object.keys(req.body)[1]];
    var email = req.body[Object.keys(req.body)[2]];
    var password = req.body[Object.keys(req.body)[3]];
    var password2 = req.body[Object.keys(req.body)[4]];
    const options = { upsert: true, returnNewDocument: false };

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    password = passwordHash;

    var replacement = {
      firstName,
      lastName,
      email,
      password,
      password2,
    };

    console.log(query);
    //console.log(updatedUser);
    console.log(userInfo.email);
    User.findOneAndReplace(
      { email: userInfo.email },
      replacement,
      options
    ).exec(function (err, User) {
      if (err) {
        console.log(err);
      } else {
        userInfo = replacement;
        console.log(User);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/weatherData", async (req, res) => {
  try {
    var obj1 = req.body[Object.keys(req.body)[0]];
    var obj2 = req.body[Object.keys(req.body)[1]];
    var obj3 = req.body[Object.keys(req.body)[2]];
    var obj4 = req.body[Object.keys(req.body)[3]];
    console.log(obj1, "data... ", obj2);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.post("/image", parser.single("image"), UploadImage);
module.exports = router;

//router.post('/addloctionInformation', async (req, res) =>{//
//  try {
//    const location = new locationInformation(req.body);
//    await location.save();
//
//    const user = await User.findById({_id: locaiton.User})
//    user.locationInformation.push(location);
//    await user.save();
//
//    res.status(200).json({success:true, data: location})
//  } catch (err){
//    res.status(400).json({success: false, message:err.message})
//  }
