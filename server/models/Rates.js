const { Schema, model } = require('mongoose');

const mainSchema = require('./Main');
const extraSchema = require('./Extra');

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
		mainCosts: [ mainSchema ],
        extraCosts:[ extraSchema ],
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




