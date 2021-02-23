var express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");
var path = require("path");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

//Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//Cors Configuration
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Set up mongoose connection
const mongoDB = require("./config/keys").mongoURI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

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
