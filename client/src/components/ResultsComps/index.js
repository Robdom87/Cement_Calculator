import React from 'react';
import {
    AddOnsPC,
    ResultsPC,
    ResultsV2
} from '../../ui-components';
export default function ResultsComps(props) {

    return (
        <>
           
            <ResultsV2
                results={props.results} />
            {props.results.addOnsArr.map((addOn) => (
                <AddOnsPC 
                    results={addOn}/> 
                ))}          
        </>)
}