const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const saveRouteSchema = new Schema({
  email: {
    type: String,
    //required: true,
  },
  startLat: {
    type: Number,
    required: true,
  },
  startLng: {
    type: Number,
    required: true,
  },
  destLat: {
    type: Number,
    required: true,
  },
  destLng: {
    type: Number,
    required: true,
  },
  startCity: {
    type: String,
    required: true,
  },
  startAdmin: {
    type: String,
    required: true,
  },
  destCity: {
    type: String,
    required: true,
  },
  destAdmin: {
    type: String,
    required: true,
  },
  m1lat: {
    type: String,
    required: false,
  },
  m1lng: {
    type: String,
    required: false,
  },
  m2lat: {
    type: String,
    required: false,
  },
  m2lng: {
    type: String,
    required: false,
  },
  m3lat: {
    type: String,
    required: false,
  },
  m3lng: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = SaveRoute = mongoose.model("saveRoute", saveRouteSchema);
