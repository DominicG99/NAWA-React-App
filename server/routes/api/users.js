const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); // support json encoded bodies
// register

router.post("/", (req, res) => {
  console.log(req.body);
});

router.post("/register", async (req, res) => {
  try {
    var { email, password, password2, firstName, lastName } = req.body;
    email[Object.keys(req.body)[0]];
    password[Object.keys(req.body)[1]];
    password2[Object.keys(req.body)[2]];
    firstName[Object.keys(req.body)[3]];
    lastName[Object.keys(req.body)[4]];
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
    if (password != password2) {
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
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
    const secret = require("../config/keys").secretOrKey;

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
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

// router.get("/userInformation", (req, res) =>
// {
//   //Use Mongoose to find the current user if they're logged?
// }

module.exports = router;
