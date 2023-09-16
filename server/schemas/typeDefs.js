const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}

	type Rates {
    ratesId: ID!
    concreteType: String
    description: String
    mainCosts: [Main]
    extraCosts: [Extra]
  }

  type Main {
    mainId: ID!
    sackMix: String
    psi: String
    unit: String
    rate: Number
  }

  type Extra {
    extraId: ID!
    costDescr: String
    unit: String
    rate: Number
  }

#   input RatesInput {
# 	ratesId: ID!
#     concreteType: String
#     description: String
#     mainCosts: [Main]
#     extraCosts: [Extra]

#   }

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
