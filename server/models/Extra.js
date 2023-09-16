const { Schema, model } = require('mongoose');

const extraSchema = new Schema(
	{
		costDescr: {
			type: String,
			required: true,
		},
		unit: {
			type: String,
			required: true,
		},
        rate: {
			type: Number,
			required: true,
		},
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

module.exports = extraSchema;