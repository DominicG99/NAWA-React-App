
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const historySchema = new Schema({

    startLat: {
        type: Number,
    },
    startLng: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('historicInformation', historySchema);
