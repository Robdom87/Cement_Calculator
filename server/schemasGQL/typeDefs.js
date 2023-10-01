const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}

  # type Services {
  #   _id: ID!
  #   services: [Service]
  # }

	type Service {
    _id: ID!
    serviceName: String
    description: String
    serviceTypes: [Main]
    extraCosts: [Extra]
  }

  type Main {
    _id: ID!
    typeName: String
    craftHrs: String
    units: String
    materials: Float
    labor: String
    total: Float
  }

  type Extra {
    _id: ID!
    costName: String
    description: String
    craftHrs: String
    units: String
    materials: Float
    labor: String
    total: Float
  }

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
    services: [Service]
    service(serviceName: String!): Service
    # pullRate(sackMix: String!):Rates
	}

	type Mutation {
		addUser( input: Register ): Auth
		login( input: Login ): Auth
	}
`;

module.exports = typeDefs;
