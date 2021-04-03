const mongoose = require('mongoose');
const {Schema} = require('mongoose');

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
    endLat:{
        type: Number,
        required: true,
    },
    endLng: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = HistoricInformation = mongoose.model('historicInformation', historySchema);


