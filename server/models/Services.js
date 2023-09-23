const { Schema, model } = require('mongoose');

const Service = require('./Service');

const servicesSchema = new Schema(
	{
		services: [Service],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Services = model('Services', servicesSchema);

module.exports = Services;




