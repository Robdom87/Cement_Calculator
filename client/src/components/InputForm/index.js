import React from 'react';
import {
    RequestMeasurements,
} from '../../ui-components';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICE } from '../../utils/queries';

function InputForm(props) {
    // let service = props.service;
    const { loading, data } = useQuery(QUERY_SERVICE, {
        variables: { "serviceName": props.service },
    });

    let MainCosts = data?.service.serviceTypes.map((type) => type.typeName) || [];
    let ExtraCosts = data?.service.extraCosts.map((extra) => extra.costName) || [];
    // console.log(ExtraCosts);

    // const { loading, data } = useQuery(QUERY_SERVICE, {
    //     variables: { serviceName: name },

    function handleFormSubmit(event) {
        // console.log(event);
        props.setMeasurements({
            ...props.measurements,
            Depth: event.Depth,
            Extra: event.Extra,
            Main: event.Main,
            Sqft: event.Sqft
        })
        props.setServiceInfo(data.service)
        props.calculations();
    }

    return (
        <>	{loading ? (
            <div>Loading...</div>
        ) : (
            <RequestMeasurements
                onSubmit={handleFormSubmit}
                // overrides={{ "Main": {options: {serviceOptions} }}}
                overrides={{
                    "Main": {
                        options: MainCosts
                    },
                    "Extra": {
                        options: ExtraCosts,
                        isMultiple: true
                    },
                }}
            />
        )};
        </>)
};

export default InputForm;
