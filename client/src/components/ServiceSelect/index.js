import React from 'react';
import {
    RequestService,
} from '../../ui-components';
import { useQuery } from '@apollo/client';
import { QUERY_NAMES } from '../../utils/queries';

export default  function ServiceSelect(props) {
    const { loading, data } = useQuery(QUERY_NAMES);
    let serviceOptions = data?.services.map((service) => service.serviceName) || [];
    const handleType = async (event) => {
        props.setService(event.Name);
        // console.log(event);
        props.setShowRequests(true);
	}
    return (
        <>	{loading ? (
            <div>Loading...</div>
        ) : (
            <RequestService
                onChange={handleType}
                overrides={{
                    "Name": {
                        options: serviceOptions
                    }}} />
        )};
        </>)
}
