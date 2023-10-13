const { Schema, model } = require('mongoose');

const extraSchema = new Schema(
	{
		costName: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		craftHrs: {
			type: String,
			required: true,
		},
		units: {
			type: String,
			required: true,
		},
		materials: {
			type: Number,
			required: true,
		},
		labor: {
			type: String,
			required: true,
		},
		total: {
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