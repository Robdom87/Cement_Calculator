import React from 'react';
import ServiceSelect from '../../components/ServiceSelect';
import InputForm from '../../components/InputForm';
import Estimate from '../../ui-components/Estimate';
import math from '../../math';
import { useState } from 'react';

function Home() {
	const [showResults, setShowResults] = useState(false);
	const [showRequests, setShowRequests] = useState(false);
	const [measurements, setMeasurements] = useState({
		Depth: "",
		Extra: "",
		Main: "",
		Sqft: ""
	})
	const [serviceInfo, setServiceInfo] = useState({});
	const [service, setService] = useState();
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

	async function calculations(inputs, rates) {
		try {
			//expected object shape
			let { depth, sqft } = inputs;
			let { conPrice,
				mat1Price,
				mat1Coverage,
				mat2Price,
				mat2Coverage } = rates;
			let ftCubed = sqft * depth;
			let ydsCubed = math.totalYardsCu(ftCubed);
			let concreteCost = math.conCalc(ydsCubed, conPrice);
			let vbCost = math.matCalc(sqft, mat1Price, mat1Coverage);
			let wwmCost = math.matCalc(sqft, mat2Price, mat2Coverage);
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
			{showResults ? <Estimate
				results={results}
				setShowResults={setShowResults}
				calculations={calculations}
			/> : null}
		</>
	)
}

export default Home;