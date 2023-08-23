import React from 'react';
import {
	Estimate,
	RequestMeasurements
} from '../../ui-components';
import { useState } from 'react';


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


	const handleFormSubmit = async (event) => {
		let inputsObj = {
			sqft: parseInt(event.Field0),
			depth: parseInt(event.Field1)
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
			let rates = {
				concrete: 125,
				vb: 100,
				wwm: .15
			}
			let calcRates = {
				concrete: rates.concrete,
				vb: rates.vb,
				wwm: rates.wwm
			};
			localStorage.setItem('ratesLocal', JSON.stringify(calcRates));
			calculations();
		} catch (err) {
			console.error(err.message);
		}
	};

	async function calculations() {
		try {
			let inputs = JSON.parse(localStorage.getItem('inputs'));
			let ratesLocal = JSON.parse(localStorage.getItem('ratesLocal'));
			// object shapes
			// {sqft: 3, depth: 4}
			// {concrete: 125, vb: 100, wwm: 0.15}
			let ftCubed = inputs.sqft * inputs.depth;
			let ydsCubed = ftCubed * 0.037037;
			let concreteCost = ydsCubed * ratesLocal.concrete;
			let vbCost = inputs.sqft * ratesLocal.vb;
			let wwmCost = inputs.sqft * ratesLocal.wwm;
			let subtotal = concreteCost + vbCost + wwmCost;
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
			display();
		} catch (err) {
			console.error(err);
		}
	}

	async function display() {
		try {
			let inputs = JSON.parse(localStorage.getItem('inputs'));
			let ratesLocal = JSON.parse(localStorage.getItem('ratesLocal'));
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
				depth: `Depth Inches = ${inputs.depth} In`,
				ftCubed: `Total FT^3 = ${resultsLocal.ftCubed} FT^3`,
				ydsCubed: `Total YD^3 = ${resultsLocal.ydsCubed} YD^3`,
				concreteCost: `Total Cost = $${resultsLocal.concreteCost} + $1000 for pump`,
				vbCost: `Total Cost = $${resultsLocal.vbCost}`,
				wwmCost: `Total Cost = $${resultsLocal.wwmCost}`,
				subtotal: ``,
				Tax: ` = $${resultsLocal.tax}`,
				Total: `= $${resultsLocal.total}`,
				concreteRate: `Cost per YD^3 = $${ratesLocal.concrete} YD^3`,
				vbRate: `Cost = $${ratesLocal.vb} per 2000ft^2 `,
				wwmRate: `Cost = $${ratesLocal.wwm} per 45ft^2 `
			});
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			{showRequests ? <RequestMeasurements
				onSubmit={handleFormSubmit}
			/> : null}
			{showResults ? <Estimate
				results={results}
			/> : null}
		</>
	);
}

export default Home;