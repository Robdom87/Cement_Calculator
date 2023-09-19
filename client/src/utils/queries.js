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
    _id
    concreteType
    description
    mainCosts {
      _id
      sackMix
      psi
      unit
      rate
    }
    extraCosts {
      _id
      costDescr
      unit
      rate
    }
  }
}
`;

export const QUERY_RATE = gql`
	query Rate($type: String!) {
  rate(concreteType: $type){
    _id
    concreteType
    description
    mainCosts {
      _id
      sackMix
      psi
      unit
      rate
    }
    extraCosts {
      _id
      costDescr
      unit
      rate
    }
  }
}
`;