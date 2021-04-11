const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  var imageSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    }
});

module.exports = MyImage = new mongoose.model('Image', imageSchema);