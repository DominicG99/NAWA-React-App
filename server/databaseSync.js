console.log("Passing Data into the Databse");

var userArgs = process.argv.slice(2);
var async = require("async");
var loginData = require("./models/loginData");

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var login[]

function loginData(firstName, lastName, email, userPassword)