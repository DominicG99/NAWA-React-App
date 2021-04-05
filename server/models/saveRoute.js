const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const saveRouteSchema = new Schema({
  email: {
    type: String,
    //required: true,
  },
  startLat: {
    type: Number,
  },
  startLng: {
    type: Number,
  },
  endLat: {
    type: Number,
  },
  description: {
    type: String,
  },
  mid1lat: {
    type: Number,
  },
  mid2lat: {
    type: Number,
  },
  mid3lat: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = SaveRoute = mongoose.model("saveRoute", saveRouteSchema);
