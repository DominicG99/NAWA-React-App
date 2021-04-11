const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const preferencesSchema = new Schema({
    email: {
        type: String,
        //required: true,
    },
    description: {
        type: String,
    },
    favoriteFood: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Preferences = mongoose.model('preferences', preferencesSchema);
