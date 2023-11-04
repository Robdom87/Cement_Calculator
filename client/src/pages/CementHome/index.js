import React from 'react';
import ServiceSelect from '../../components/ServiceSelect';
import InputForm from '../../components/InputForm';
import { ResultsV2, AddOnsPC, HomePage, NavBarPC, ResultsPC } from '../../ui-components';
import math from '../../math';
import { useState } from 'react';

function Home() {
	const [showResults, setShowResults] = useState(false);
	const [showRequests, setShowRequests] = useState(true);
	const [measurements, setMeasurements] = useState({
		Depth: "",
		Extra: "",
		Main: "",
		Sqft: ""
	})
	const [serviceInfo, setServiceInfo] = useState({});
	const [service, setService] = useState();
	const [results, setResults] = useState({
		serviceName: "",
		typeDescription: "",
		ydsCubed: 0,
		concreteRate: 0,
		concreteTCost: 0,
		addOnName: "",
		addOnDescription: "",
		addOnMaterial: 0,
		addOnTotal: 0,
		callTotal: 0
		// sqft: "",
		// depth: "",
		// ftCubed: "",
		// ydsCubed: "",
		// concreteCost: "",
		// vbCost: "",
		// wwmCost: "",
		// subtotal: "",
		// Tax: "",
		// Total: "",
		// concreteRate: "",
		// vbRate: "",
		// wwmRate: ""
	});

	// let sampleTest = {
	// 	serviceName: "Ready Mix Concrete",
	// 	typeDescription: "Ready-Mix Concrete Ready-mix delivered by truck. Typical prices for most cities. Includes delivery up to 20 miles for 10 CY or more, 3in to 4in slump. Material cost only, no placing or pumping included. All concrete material costs in this manual are based on these figures.",
	// 	ydsCubed: 100,
	// 	concreteRate: 141,
	// 	concreteTCost: 1000,
	// 	addOnName: "Granite Aggregate",
	// 	addOnDescription: "Add for granite aggregate, typical",
	// 	addOnMaterial: 10,
	// 	addOnTotal: 300,
	// 	callTotal: 130
	// };

	async function calculations() {
		try {
			//expected object shape

			let { Depth, Sqft, Main, Extra } = measurements;
			let ftCubed = Sqft * Depth;
			let ydsCubed = math.totalYardsCu(ftCubed);
			// console.log(serviceInfo.serviceTypes);
			let conPrice = await findRate(serviceInfo.serviceTypes, Main);
			let concreteCost = await math.conCalc(ydsCubed, conPrice);

			//sample Extra, as not currently working in multi select
			let ExtraArr = ["lessThan10CY"];
			let addCost = 0;
			let cost = 0;
			let price = 0;
			let unit = 0;
			for (let y = 0; y < ExtraArr.length; y++) {
				cost = findCost(serviceInfo.extraCosts, ExtraArr[y]);
				price = cost.total;
				unit = cost.units;
				//will need to ask user
				let amount = 0;
				//add calc is a nonexistant function
				// addCost += math.addCalc(price, unit, amount);
			}
			let subtotal = concreteCost + addCost;
			let tax = subtotal * .085;
			let total = subtotal + tax;

			let resultsObj = {
				ydsCubed: ydsCubed,
				concreteRate: conPrice,
				concreteTCost: concreteCost,
				addOnName: ExtraArr[0],
				addOnMaterial: price,
				addOnTotal: addCost,
				// subtotal: subtotal,
				// tax: tax,
				total: total
			}
			display(resultsObj);
			setShowResults(true);
		} catch (err) {
			console.error(err);
		}
	}

	function findRate(costArray, costName) {

		// console.log(costArray);
		let length = costArray.length;
		console.log(length)
		let rate = 0;

		for (let i = 0; i < length; i++) {
			if (costArray[i].typeName === costName) {
				rate = costArray[i].total;
			}
		}
		return rate;
	}

	async function findCost(costArray, costName) {
		try {
			let length = costArray.length;
			for (let e = 0; e < length; e++) {
				if (costArray[e].costName === costName) {
					return costArray[e];
				}
			}
		} catch (err) {
			console.error(err);
		}
	}

	async function display(resultsObj) {
		try {

			setResults({
				...results,
				serviceName: service,
				typeDescription: serviceInfo.description,
				ydsCubed: resultsObj.ydsCubed,
				concreteRate: resultsObj.concreteRate,
				concreteTCost: resultsObj.concreteTCost,
				addOnName: resultsObj.addOnName,
				addOnDescription: "This will be filler to test display.",
				addOnMaterial: resultsObj.addOnMaterial,
				addOnTotal: resultsObj.addOnTotal,
				callTotal: resultsObj.callTotal
				// sqft: `Total FT^2 = ${inputs.sqft} FT^2`,
				// depth: `Depth FT = ${inputs.depth} FT`,
				// ftCubed: `Total FT^3 = ${resultsLocal.ftCubed} FT^3`,
				// ydsCubed: `Total YD^3 = ${resultsLocal.ydsCubed} YD^3`,
				// concreteCost: `Total Cost = $${resultsLocal.concreteCost} + $1000 for pump`,
				// vbCost: `Total Cost = $${resultsLocal.vbCost}`,
				// wwmCost: `Total Cost = $${resultsLocal.wwmCost}`,
				// subtotal: ``,
				// Tax: ` = $${resultsLocal.tax}`,
				// Total: `= $${resultsLocal.total}`,
				// concreteRate: `Cost per YD^3 = $${ratesLocal.conPrice} YD^3`,
				// vbRate: `Cost = $${ratesLocal.mat1Price} per ${ratesLocal.mat1Coverage}ft^2 `,
				// wwmRate: `Cost = $${ratesLocal.mat2Price} per ${ratesLocal.mat2Coverage}ft^2 `
			});
			console.log(results);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			<NavBarPC
				style={{
					width: '100%',
				}} />
			{/* <HomePage /> */}
			{/* <ResultsPC
				style={{
					width: '100%',
				}} />
			<AddOnsPC
				style={{
					width: '100%',
				}} /> */}
			<ServiceSelect
				service={service}
				setService={setService}
				setShowRequests={setShowRequests}
			/>
			{showRequests ? <InputForm
				service={service}
				setMeasurements={setMeasurements}
				measurements={measurements}
				setServiceInfo={setServiceInfo}
				serviceInfo={serviceInfo}
				setShowResults={setShowResults}
				calculations={calculations}
			/> : null}
			{/* {showResults ? <Estimate
				results={results}
				setShowResults={setShowResults}
				calculations={calculations}
			/> : null} */}
			{showResults ? <ResultsV2
				results={results}

			/> : null}
		</>
	)
}

export default Home;