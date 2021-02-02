const express = require("express");

const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: "Dominic",
      lastName: "Ginter",
    },
  ];
  res.json(customers);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => console.log("Server started on port " + port));
