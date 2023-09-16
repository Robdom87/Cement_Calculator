import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query Query {
		users {
			username
			email
			_id
		}
	}
`;

export const QUERY_ME = gql`
	query Query {
		me {
			username
			email
			_id
			savedStations {
				stationName
        		fuelType
				address
			}
		}
	}
`;

export const QUERY_RATES = gql`
	query Query {
		rates {
			concreteType
			description
			_id
			mainCosts {
				sackMix
				psi
				unit
				rate
			}
			extraCosts {
				costDescr
				unit
				rate
			}
		}
	}
`;