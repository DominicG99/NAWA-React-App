const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//just the route start to finish. 
//add midpoints later

const favoriteSchema = new Schema({
    startLat: {
        type: Number,
        required: true,
    },
    startLng: {
        type: Number,
        required: true,
    },
    endLat: {
        type: Number,
        required: true,
    },
    endLng: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    travelDate: {
        type: Date, 
        required: false,
    },
    //API implementation to make it easy to search?
})