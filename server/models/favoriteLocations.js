const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user can designate different locations that they want to save.
//try to have this work with the Map API to quick save deal.

const favoriteLocationsSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});
