const { Schema, model } = require('mongoose');

const Main = require('./Main');
const Extra = require('./Extra');

const serviceSchema = new Schema(
	{
		serviceName: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		serviceTypes: [Main],
		extraCosts: [Extra],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Service = model('Service', serviceSchema);

module.exports = Service;