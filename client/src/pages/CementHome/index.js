import React from 'react';
import {
	Estimate,
	RequestMeasurements,
	NewForm1
} from '../../ui-components';
import math from '../../math';
import { useState } from 'react';
// import {
// 	InputII 
//    } from '../../ui-components';
import { useQuery } from '@apollo/client';
import { QUERY_NAMES, QUERY_SERVICE } from '../../utils/queries';

function Home() {
	const [showResults, setShowResults] = useState(false);
	const [showRequests, setShowRequests] = useState(true);
	const [results, setResults] = useState({
		sqft: "",
		depth: "",
		ftCubed: "",
		ydsCubed: "",
		concreteCost: "",
		vbCost: "",
		wwmCost: "",
		subtotal: "",
		Tax: "",
		Total: "",
		concreteRate: "",
		vbRate: "",
		wwmRate: ""
	});
	const { loading, data } = useQuery(QUERY_NAMES);
	const serviceOptions = data?.services || [];
	

	// const handleType = async (event) => {
		
	// 	const { loading, data } = useQuery(QUERY_SERVICE, {
	// 		variables: { serviceName: event.name },
	// 	});
	// 	setShowRequests(true);
	// }


	const handleFormSubmit = async (event) => {
		let inputsObj = {
			sqft: parseInt(event.sqft),
			depth: parseInt(event.depth)
		};
		//save input into local storage
		localStorage.setItem('inputs', JSON.stringify(inputsObj));
		callRates();
	}

	const callRates = async () => {
		try {
			//call our servers to get the appopriate rates, will ignore for now
			// const response = await fetch(
			// 	`INSERT API URL`,
			// 	{ method: 'POST' }
			// );

			// if (!response.ok) {
			// 	throw new Error('something went wrong!');
			// }

			// const { rates } = await response.json();
			//sample response from API call
			let sampleRates = {
				cPrice: 125.00,
				m1Price: 200.00,
				m1Coverage: 100,
				m2Price: 7.00,
				m2Coverage: 10
			}
			let calcRates = {
				conPrice: sampleRates.cPrice,
				mat1Price: sampleRates.m1Price,
				mat1Coverage: sampleRates.m1Coverage,
				mat2Price: sampleRates.m2Price,
				mat2Coverage: sampleRates.m2Coverage
			};
			localStorage.setItem('ratesLocal', JSON.stringify(calcRates));
			display();
		} catch (err) {
			console.error(err.message);
		}
	};

	async function calculations(inputs, rates) {
		try {
			let { depth, sqft } = inputs;
			let { conPrice,
				mat1Price,
				mat1Coverage,
				mat2Price,
				mat2Coverage } = rates;
			// object shapes
			// {sqft: 3, depth: 4}
			// {concrete: 125, vb: 100, wwm: 0.15}
			let ftCubed = sqft * depth;
			let ydsCubed = math.totalYardsCu(ftCubed);
			let concreteCost = math.conCalc(ydsCubed, conPrice);
			let vbCost = math.matCalc(sqft, mat1Price, mat1Coverage);
			let wwmCost = math.matCalc(sqft, mat2Price, mat2Coverage);
			let subtotal = concreteCost + vbCost + wwmCost;
			console.log(subtotal);
			let tax = subtotal * .085;
			let total = subtotal + tax;

			let resultsObj = {
				ftCubed: ftCubed,
				ydsCubed: ydsCubed,
				concreteCost: concreteCost,
				vbCost: vbCost,
				wwmCost: wwmCost,
				subtotal: subtotal,
				tax: tax,
				total: total
			}
			localStorage.setItem('resultsLocal', JSON.stringify(resultsObj));
		} catch (err) {
			console.error(err);
		}
	}

	async function display() {
		try {
			let inputs = JSON.parse(localStorage.getItem('inputs'));
			let ratesLocal = JSON.parse(localStorage.getItem('ratesLocal'));
			calculations(inputs, ratesLocal);
			let resultsLocal = JSON.parse(localStorage.getItem('resultsLocal'));
			//save all info in local storage into states below are examples
			// setstationsFUEL(stationsFuel);
			// setLocationMap({ ...locationMap, lat: latlng.lat, lng: latlng.lng })
			// setZipcodeInput(...zipcodeInput, "");
			//display new page
			setShowResults(true);
			setShowRequests(false);
			setResults({
				...results, sqft: `Total FT^2 = ${inputs.sqft} FT^2`,
				depth: `Depth FT = ${inputs.depth} FT`,
				ftCubed: `Total FT^3 = ${resultsLocal.ftCubed} FT^3`,
				ydsCubed: `Total YD^3 = ${resultsLocal.ydsCubed} YD^3`,
				concreteCost: `Total Cost = $${resultsLocal.concreteCost} + $1000 for pump`,
				vbCost: `Total Cost = $${resultsLocal.vbCost}`,
				wwmCost: `Total Cost = $${resultsLocal.wwmCost}`,
				subtotal: ``,
				Tax: ` = $${resultsLocal.tax}`,
				Total: `= $${resultsLocal.total}`,
				concreteRate: `Cost per YD^3 = $${ratesLocal.conPrice} YD^3`,
				vbRate: `Cost = $${ratesLocal.mat1Price} per ${ratesLocal.mat1Coverage}ft^2 `,
				wwmRate: `Cost = $${ratesLocal.mat2Price} per ${ratesLocal.mat2Coverage}ft^2 `
			});
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			{/* <InputII /> */}
			{loading ? (
				<div>Loading...</div>
			) : ( 
				<NewForm1
					// onChange={handleType} 
					overrides={{
						options: {serviceOptions}
					}}/>
			)}
			{showRequests ?
				<RequestMeasurements
					onSubmit={handleFormSubmit}
					 />
				: null}
			{showResults ? <Estimate
				results={results}
			/> : null}
		</>
	);
}

export default Home;