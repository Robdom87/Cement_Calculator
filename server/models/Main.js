const { Schema, model } = require('mongoose');

const mainSchema = new Schema(
	{
		sackMix: {
			type: String,
			required: true,
		},
		psi: {
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

module.exports = mainSchema;