const { AuthenticationError } = require('apollo-server-express');
const { User, Service } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find({}).select('-password');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
				return userData;
			}
			throw new AuthenticationError('Not logged in');
		},
		//.populate only needed if schema .populate("Main").populate("Extra")
		services: async () => {
			return await Service.find({});
		},
		service: async (_, args) => {
			return await Service.findOne({serviceName: args.serviceName});
		},
	},

	Mutation: {
		addUser: async (_, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
	  
			if (!user) {
			  throw new AuthenticationError('Incorrect credentials');
			}
	  
			const correctPw = await user.isCorrectPassword(password);
	  
			if (!correctPw) {
			  throw new AuthenticationError('Incorrect credentials');
			}
	  
			const token = signToken(user);
			return { token, user };
		  },
	},
};

module.exports = resolvers;
