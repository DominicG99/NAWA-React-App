var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = express();
var multer = require("multer");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });
// var upload = multer({ storage: storage });

// app.get("/", (req, res) => {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred", err);
//     } else {
//       res.render("imagesPage", { items: items });
//     }
//   });
// });

// app.post("/", upload.single("image"), (req, res, next) => {
//   var obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       data: fs.readFileSync(
//         path.join(__dirname + "/uploads/" + req.file.filename)
//       ),
//       contentType: "image/png",
//     },
//   };
//   imgModel.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // item.save();
//       res.redirect("/");
//     }
//   });
// });

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//Set up mongoose connection
const mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//async function main(){
// const mongoDB = process.env.MONGO_URI;
//const path = new MongoClient(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true });
// try{
//   await path.connect();
// } catch (e){
//   console.error(e);
// } finally{
//   await client.close();
// }
//}

// // Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//Used to set up React app.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//Start server on heroku or port 5000.
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port " + port);
});
module.exports = app;
