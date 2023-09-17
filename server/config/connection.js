const mongoose = require('mongoose');
require('dotenv').config();

//MONGODB_URI is template, not actually being used, because not declared in .env file

//connect mongoDB to our app/ server using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/contractorRates', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
