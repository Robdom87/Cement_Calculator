import React from 'react';
import ServiceSelect from '../../components/ServiceSelect';
import ResultsComps from '../../components/ResultsComps';
import InputForm from '../../components/InputForm';
import {NavBarPC } from '../../ui-components';
import math from '../../math';
import { useState } from 'react';

function Home() {
	//flags to display request or results components
	const [showResults, setShowResults] = useState(false);
	const [showRequests, setShowRequests] = useState(true);

	const [serviceInfo, setServiceInfo] = useState({});
	const [service, setService] = useState();

	const [measurements, setMeasurements] = useState({
		Depth: "",
		Extra: [],
		Main: "",
		Sqft: ""
	})

	const [results, setResults] = useState({
		serviceName: "",
		typeDescription: "",
		concreteRate: 0,
		concreteTCost: 0,
		ydsCubed: 0,
		concreteRate: 0,
		concreteTCost: 0,
		addOnsArr: [],
		callTotal: 0
	});

	async function calculations() {
		try {
			//expected object shape

			let { Depth, Sqft, Main, Extra } = measurements;
			let ftCubed = Sqft * Depth;
			let ydsCubed = math.totalYardsCu(ftCubed);
			let conPrice = findRate(serviceInfo.serviceTypes, Main);
			let concreteCost = await math.conCalc(ydsCubed, conPrice);

			let ExtraArr = Extra;
			let addOnsArr = [];
			let addCost = 0;
			let cost = 0;
			let price = 0;
			let unit = 0;
			let amount = 0;
			for (let y = 0; y < ExtraArr.length; y++) {
				// try
				cost = findCost(serviceInfo.extraCosts, ExtraArr[y]);
				console.log(cost);
				price = cost.total;
				unit = cost.units;
				//will need to ask user
				if (unit === "cubicYards") {
					amount = ydsCubed * price;
				} else {
					amount = 10;
				}
				addOnsArr.push({
					addOnName: ExtraArr[y],
					addOnDescription: cost.description,
					addOnUnit: unit,
					addOnPrice: price,
					addOnCost: amount
				})
				addCost += amount;
			}
			let subtotal = concreteCost + addCost;
			let tax = subtotal * .085;
			let total = subtotal + tax;

			let resultsObj = {
				ydsCubed: ydsCubed,
				concreteRate: conPrice,
				concreteTCost: concreteCost,
				addOnsArr: addOnsArr,
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

	function findCost(costArray, costName) {
		// try {
			let length = costArray.length;
			for (let e = 0; e < length; e++) {
				if (costArray[e].costName === costName) {
					return costArray[e];
				}
			}
		// } catch (err) {
		// 	console.error(err);
		// }
	}

	async function display(resultsObj) {
		try {
			console.log(resultsObj);
			setResults({
				...results,
				serviceName: service,
				typeDescription: serviceInfo.description,
				ydsCubed: resultsObj.ydsCubed,
				concreteRate: resultsObj.concreteRate,
				concreteTCost: resultsObj.concreteTCost,
				addOnsArr: resultsObj.addOnsArr,
				callTotal: resultsObj.total
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
					// width: '100vw',
					// flex: 1
				}} />
			
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
			{showResults ? <ResultsComps
				results={results}
				calculations={calculations}
			/> : null}
		</>
	)
}

export default Home;