//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = (API_DATABASE_HOST || 'mongodb://127.0.0.1/my_database');

const connect = () => mongoose.connect( mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const disconnect = () => mongoose.disconnect();

module.exports = { connect, disconnect };