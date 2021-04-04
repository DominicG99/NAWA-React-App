const mongoose = require('mongoose');
const {Schema} = require('mongoose');

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
    midpoint1: {
        type: Number,
        required: false,
    },
    midpoint2: {
        type: Number,
        required: false, 
    },
    midpoint3: {
        type: Number, 
        required: false,
    },
    midpoint4: {
        type: Number,
        required: false,
    },
    midpoint5: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = HistoricInformation = mongoose.model('historicInformation', historySchema);
