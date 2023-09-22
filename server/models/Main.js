const { Schema, model } = require('mongoose');

const mainSchema = new Schema(
	{
		craftHrs: {
			type: String,
			required: false,
		},
		unit: {
			type: Category,
			required: true,
		},
		material: {
			type: Number,
			required: true,
		},
        labor: {
			type: Number,
			required: false,
		},
		total: {
			type: Number,
			required: false,
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

module.exports = mainSchema;