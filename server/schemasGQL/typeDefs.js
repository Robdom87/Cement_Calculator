const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}

	type Rates {
    _id: ID!
    concreteType: String
    description: String
    mainCosts: [Main]
    extraCosts: [Extra]
  }

  type Main {
    _id: ID!
    sackMix: String
    psi: String
    unit: String
    rate: Float
  }

  type Extra {
    _id: ID!
    costDescr: String
    unit: String
    rate: Float
  }

  # input RatesInput {
	#   ratesId: ID!
  #   concreteType: String
  #   mainCosts: [Main]
  #   extraCosts: [Extra]
  # }

  input Register {
    username: String! 
    email: String! 
    password: String!
  }

  input Login {
    email: String!
    password: String!
  }

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
    rates: [Rates]
    rate: Rates
    # pullRate(sackMix: String!):Rates
	}

	type Mutation {
		addUser( input: Register ): Auth
		login( input: Login ): Auth
	}
`;

module.exports = typeDefs;
