const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// register

router.post("/register", async (req, res) => {
  try {
    var firstName = req.body[Object.keys(req.body)[0]];
    var lastName = req.body[Object.keys(req.body)[1]];
    var email = req.body[Object.keys(req.body)[2]];
    var password = req.body[Object.keys(req.body)[3]];
    var password2 = req.body[Object.keys(req.body)[4]];
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

<<<<<<< HEAD
module.exports = router;
=======
router.get("/register", async (req, res) => {
    var firstName = req.body[Object.keys(req.body)[0]];
    var lastName = req.body[Object.keys(req.body)[1]];
    var email = req.body[Object.keys(req.body)[2]];
    var password = req.body[Object.keys(req.body)[3]];
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    return newUser;
  });

// router.get("/userInformation", (req, res) =>
// {
//   //Use Mongoose to find the current user if they're logged?
// }
//testing

>>>>>>> c7431f9d325b67586c6125fb786c336531fbd850
