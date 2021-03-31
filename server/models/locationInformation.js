//NOT REQUIRED - DELETE LATER//
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const locationSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    favoriteFood: {
        type: String,
        required: true,
    }
});
module.exports = LocationInformation = mongoose.model('locationInformation', locationSchema);
