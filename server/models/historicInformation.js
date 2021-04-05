const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const historySchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = HistoricInformation = mongoose.model(
  "historicInformation",
  historySchema
);
