const { Schema, model } = require('mongoose');

const Main = require('./Main');
const Extra = require('./Extra');

const ratesSchema = new Schema(
	{
		concreteType: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
			unique: true,
		},
		mainCosts: [ Main ],
        extraCosts:[ Extra ],
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Rates = model('Rates', ratesSchema);

module.exports = Rates;




