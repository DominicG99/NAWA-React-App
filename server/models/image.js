const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});
