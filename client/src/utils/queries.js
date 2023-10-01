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

//make api endpoint to just get all the service names for front end

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

export const QUERY_SERVICE = gql`
query Service($serviceName: String!) {
  service (serviceName: $serviceName) {
    _id
    serviceName
    description
    serviceTypes {
      _id
      typeName
      craftHrs
      units
      materials
      labor
      total
    }
    extraCosts {
      _id
      costName
      description
      craftHrs
      units
      materials
      labor
      total
    }
  }
}
`;

export const QUERY_SERVICES = gql`
query Services {
  services {
    _id
    serviceName
    description
    serviceTypes {
      _id
      typeName
      craftHrs
      units
      materials
      labor
      total
    }
    extraCosts {
      _id
      costName
      description
      craftHrs
      units
      materials
      labor
      total
    }
  }
}
`;

export const QUERY_NAMES = gql`
query ServiceNames {
  services {
    serviceName
  }
}
`;
