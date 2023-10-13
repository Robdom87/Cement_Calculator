const { Schema, model } = require('mongoose');

const mainSchema = new Schema(
	{
		typeName: {
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
	{
		toJSON: {
			virtuals: true,
		},
	}
);

module.exports = mainSchema;