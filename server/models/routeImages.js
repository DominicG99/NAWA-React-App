const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteImage = new Schema(
  {
    route_id: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    lat: {type: String, required: true }, 
    lng: {type: String, required: true}, 
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = routeImage = mongoose.model("RouteImage", RouteImage);
