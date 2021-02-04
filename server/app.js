var express = require("express");
var path = require("path");
const mongoose = require("mongoose");
var app = express();

mongoose
  .connect("mongodb://localhost:27017/NotJustAWeatherAppDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected."))
  .catch((err) => console.error("Couldn't connect to database.", err));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port " + port);
});
module.exports = app;
