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
const ImageUploadRouter = require("./routes/api/uploadImageRoute");
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

// Routes
app.use("/api/users", users);
app.use("/api/uploadImageRoute", ImageUploadRouter);
//Used to set up React app.
app.use(express.static(path.join(__dirname, "build")));
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
