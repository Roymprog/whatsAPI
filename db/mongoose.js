const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoDBurl = 'mongodb://localhost:27017/whatsAPI';

// Use connect method to connect to the server
mongoose.connect(mongoDBurl);

mongoose.connection.on('connected', () => {
    console.log(`Connected successfully to server on: ${mongoDBurl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error: ', error);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose lost connection on: ${mongoDBurl}`); 
});

module.exports = { mongoose };