const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create user schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = User = mongoose.model("users", UserSchema);

//  favoriteRoutes: {
//    type: String,
//    enum: ['route1', 'route2', 'route3', 'route4', 'route5'],
//    default: ' ',
//  },
//  historicRoutes: {
//    type: String,
//    enum: ['historic1', 'historic2', 'historic3', 'historic4', 'historic5'],
//    default: ' '
//  },

//location inforamtion for later reference for the user. Relational database implementation
//const locationInformationSchema = new Schema({ //
//  latitude: {
//    type: Number,
//    required: true,
//  },
//  longitude:{
//    type: Number,
//    required: true,
//  },
//  locationName:{
//    type: String,
//    required: false,
//  },
//  locationWeather:{
//
//  },
//  locationDescription:{ //not sure if this will work UI.. maybe have the user write thier own in if //they want
//    type: String,
//    required: false,
//  }
//});

//const historicInformation = new Schema({
//  historyLat: {
//    type: Number,
//    required: true,
//  },
//  historyLng: {
//    type: Number,
//    required: true,
//  }
//});

//favoriteRoute2: {
//  type: String, //name of location as stated on the map
//  info:
//},
//favoriteRoute3: {
//  type: String, //name of location as stated on the map
//  info:
//},
//favoriteRoute4: {
//  type: String, //name of location as stated on the map
//  info:
//},
//favoriteRoute5: {
//  type: String, //name of location as stated on the map
//  info:
//},
//favoriteRoute6: {
//  type: String, //name of location as stated on the map
//  info:
//},
//favoriteRoute7: {
//  type: String, //name of location as stated on the map
//  info:
//},

// historicRoute2: {
//   type: String,
//   info: [historicInformation],
// },
// historicRoute3: {
//   type: String,
//   info: [historicInformation],
// },

//--FAVORITE ROUTES FOR USER--//
// favoriteRoute1: {
//   type: String, //name of location as stated on the map
//   info: [{
//     type: Schema.Types.ObjectId,
//     ref: 'LocationInformation'
//   }]
// },
//favoriteRoute2: {
//  type: String, //name of location as stated on the map
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'locationInformation'
//  }]
//},
//favoriteRoute3: {
//  type: String, //name of location as stated on the map
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'locationInformation'
//  }]
//},
//favoriteRoute4: {
//  type: String, //name of location as stated on the map
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'locationInformation'
//  }]
//},
//favoriteRoute5: {
//  type: String, //name of location as stated on the map
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'locationInformation'
//  }]
//},

//HISTORIC ROUTE - WILL HAVE LESS DATA - not required for historical - this will require function to delete after each entry.

//  historicRoute1: {
//    type: String,
//    info: [{
//      type: Schema.Types.ObjectId,
//      ref: 'historicInformation'
//    }]
// },
//
// historicRoute2: {
//  type: String,
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'historicInformation'
//  }]
//},
//historicRoute3: {
//  type: String,
//  info: [{
//    type: Schema.Types.ObjectId,
//    ref: 'historicInformation'
//  }]
//}
