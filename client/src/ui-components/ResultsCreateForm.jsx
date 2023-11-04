/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Results } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ResultsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    lengthFT: "",
    widthFT: "",
    depth: "",
    ftCubed: "",
    ydsCubed: "",
    concreteRate: "",
    concreteTCost: "",
    Tax: "",
    Total: "",
    sqft: "",
    serviceName: "",
    description: "",
    serviceType: "",
    typeName: "",
    typeDescription: "",
    addOnName: "",
    addOnDescription: "",
    addOnMaterial: "",
    addOnTotal: "",
    callTotal: "",
    serviceDescription: "",
    addOnLabor: "",
  };
  const [lengthFT, setLengthFT] = React.useState(initialValues.lengthFT);
  const [widthFT, setWidthFT] = React.useState(initialValues.widthFT);
  const [depth, setDepth] = React.useState(initialValues.depth);
  const [ftCubed, setFtCubed] = React.useState(initialValues.ftCubed);
  const [ydsCubed, setYdsCubed] = React.useState(initialValues.ydsCubed);
  const [concreteRate, setConcreteRate] = React.useState(
    initialValues.concreteRate
  );
  const [concreteTCost, setConcreteTCost] = React.useState(
    initialValues.concreteTCost
  );
  const [Tax, setTax] = React.useState(initialValues.Tax);
  const [Total, setTotal] = React.useState(initialValues.Total);
  const [sqft, setSqft] = React.useState(initialValues.sqft);
  const [serviceName, setServiceName] = React.useState(
    initialValues.serviceName
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [serviceType, setServiceType] = React.useState(
    initialValues.serviceType
  );
  const [typeName, setTypeName] = React.useState(initialValues.typeName);
  const [typeDescription, setTypeDescription] = React.useState(
    initialValues.typeDescription
  );
  const [addOnName, setAddOnName] = React.useState(initialValues.addOnName);
  const [addOnDescription, setAddOnDescription] = React.useState(
    initialValues.addOnDescription
  );
  const [addOnMaterial, setAddOnMaterial] = React.useState(
    initialValues.addOnMaterial
  );
  const [addOnTotal, setAddOnTotal] = React.useState(initialValues.addOnTotal);
  const [callTotal, setCallTotal] = React.useState(initialValues.callTotal);
  const [serviceDescription, setServiceDescription] = React.useState(
    initialValues.serviceDescription
  );
  const [addOnLabor, setAddOnLabor] = React.useState(initialValues.addOnLabor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLengthFT(initialValues.lengthFT);
    setWidthFT(initialValues.widthFT);
    setDepth(initialValues.depth);
    setFtCubed(initialValues.ftCubed);
    setYdsCubed(initialValues.ydsCubed);
    setConcreteRate(initialValues.concreteRate);
    setConcreteTCost(initialValues.concreteTCost);
    setTax(initialValues.Tax);
    setTotal(initialValues.Total);
    setSqft(initialValues.sqft);
    setServiceName(initialValues.serviceName);
    setDescription(initialValues.description);
    setServiceType(initialValues.serviceType);
    setTypeName(initialValues.typeName);
    setTypeDescription(initialValues.typeDescription);
    setAddOnName(initialValues.addOnName);
    setAddOnDescription(initialValues.addOnDescription);
    setAddOnMaterial(initialValues.addOnMaterial);
    setAddOnTotal(initialValues.addOnTotal);
    setCallTotal(initialValues.callTotal);
    setServiceDescription(initialValues.serviceDescription);
    setAddOnLabor(initialValues.addOnLabor);
    setErrors({});
  };
  const validations = {
    lengthFT: [],
    widthFT: [],
    depth: [{ type: "Required" }],
    ftCubed: [],
    ydsCubed: [],
    concreteRate: [],
    concreteTCost: [],
    Tax: [],
    Total: [],
    sqft: [{ type: "Required" }],
    serviceName: [],
    description: [],
    serviceType: [],
    typeName: [],
    typeDescription: [],
    addOnName: [],
    addOnDescription: [],
    addOnMaterial: [],
    addOnTotal: [],
    callTotal: [],
    serviceDescription: [],
    addOnLabor: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          lengthFT,
          widthFT,
          depth,
          ftCubed,
          ydsCubed,
          concreteRate,
          concreteTCost,
          Tax,
          Total,
          sqft,
          serviceName,
          description,
          serviceType,
          typeName,
          typeDescription,
          addOnName,
          addOnDescription,
          addOnMaterial,
          addOnTotal,
          callTotal,
          serviceDescription,
          addOnLabor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Results(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResultsCreateForm")}
      {...rest}
    >
      <TextField
        label="Length ft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lengthFT}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT: value,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.lengthFT ?? value;
          }
          if (errors.lengthFT?.hasError) {
            runValidationTasks("lengthFT", value);
          }
          setLengthFT(value);
        }}
        onBlur={() => runValidationTasks("lengthFT", lengthFT)}
        errorMessage={errors.lengthFT?.errorMessage}
        hasError={errors.lengthFT?.hasError}
        {...getOverrideProps(overrides, "lengthFT")}
      ></TextField>
      <TextField
        label="Width ft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={widthFT}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT: value,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.widthFT ?? value;
          }
          if (errors.widthFT?.hasError) {
            runValidationTasks("widthFT", value);
          }
          setWidthFT(value);
        }}
        onBlur={() => runValidationTasks("widthFT", widthFT)}
        errorMessage={errors.widthFT?.errorMessage}
        hasError={errors.widthFT?.hasError}
        {...getOverrideProps(overrides, "widthFT")}
      ></TextField>
      <TextField
        label="Depth"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={depth}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth: value,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.depth ?? value;
          }
          if (errors.depth?.hasError) {
            runValidationTasks("depth", value);
          }
          setDepth(value);
        }}
        onBlur={() => runValidationTasks("depth", depth)}
        errorMessage={errors.depth?.errorMessage}
        hasError={errors.depth?.hasError}
        {...getOverrideProps(overrides, "depth")}
      ></TextField>
      <TextField
        label="Ft cubed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ftCubed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed: value,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.ftCubed ?? value;
          }
          if (errors.ftCubed?.hasError) {
            runValidationTasks("ftCubed", value);
          }
          setFtCubed(value);
        }}
        onBlur={() => runValidationTasks("ftCubed", ftCubed)}
        errorMessage={errors.ftCubed?.errorMessage}
        hasError={errors.ftCubed?.hasError}
        {...getOverrideProps(overrides, "ftCubed")}
      ></TextField>
      <TextField
        label="Yds cubed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ydsCubed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed: value,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.ydsCubed ?? value;
          }
          if (errors.ydsCubed?.hasError) {
            runValidationTasks("ydsCubed", value);
          }
          setYdsCubed(value);
        }}
        onBlur={() => runValidationTasks("ydsCubed", ydsCubed)}
        errorMessage={errors.ydsCubed?.errorMessage}
        hasError={errors.ydsCubed?.hasError}
        {...getOverrideProps(overrides, "ydsCubed")}
      ></TextField>
      <TextField
        label="Concrete rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={concreteRate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate: value,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.concreteRate ?? value;
          }
          if (errors.concreteRate?.hasError) {
            runValidationTasks("concreteRate", value);
          }
          setConcreteRate(value);
        }}
        onBlur={() => runValidationTasks("concreteRate", concreteRate)}
        errorMessage={errors.concreteRate?.errorMessage}
        hasError={errors.concreteRate?.hasError}
        {...getOverrideProps(overrides, "concreteRate")}
      ></TextField>
      <TextField
        label="Concrete t cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={concreteTCost}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost: value,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.concreteTCost ?? value;
          }
          if (errors.concreteTCost?.hasError) {
            runValidationTasks("concreteTCost", value);
          }
          setConcreteTCost(value);
        }}
        onBlur={() => runValidationTasks("concreteTCost", concreteTCost)}
        errorMessage={errors.concreteTCost?.errorMessage}
        hasError={errors.concreteTCost?.hasError}
        {...getOverrideProps(overrides, "concreteTCost")}
      ></TextField>
      <TextField
        label="Tax"
        isRequired={false}
        isReadOnly={false}
        value={Tax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax: value,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.Tax ?? value;
          }
          if (errors.Tax?.hasError) {
            runValidationTasks("Tax", value);
          }
          setTax(value);
        }}
        onBlur={() => runValidationTasks("Tax", Tax)}
        errorMessage={errors.Tax?.errorMessage}
        hasError={errors.Tax?.hasError}
        {...getOverrideProps(overrides, "Tax")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        value={Total}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total: value,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.Total ?? value;
          }
          if (errors.Total?.hasError) {
            runValidationTasks("Total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("Total", Total)}
        errorMessage={errors.Total?.errorMessage}
        hasError={errors.Total?.hasError}
        {...getOverrideProps(overrides, "Total")}
      ></TextField>
      <TextField
        label="Sqft"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft: value,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.sqft ?? value;
          }
          if (errors.sqft?.hasError) {
            runValidationTasks("sqft", value);
          }
          setSqft(value);
        }}
        onBlur={() => runValidationTasks("sqft", sqft)}
        errorMessage={errors.sqft?.errorMessage}
        hasError={errors.sqft?.hasError}
        {...getOverrideProps(overrides, "sqft")}
      ></TextField>
      <TextField
        label="Service name"
        isRequired={false}
        isReadOnly={false}
        value={serviceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName: value,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.serviceName ?? value;
          }
          if (errors.serviceName?.hasError) {
            runValidationTasks("serviceName", value);
          }
          setServiceName(value);
        }}
        onBlur={() => runValidationTasks("serviceName", serviceName)}
        errorMessage={errors.serviceName?.errorMessage}
        hasError={errors.serviceName?.hasError}
        {...getOverrideProps(overrides, "serviceName")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description: value,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Service type"
        isRequired={false}
        isReadOnly={false}
        value={serviceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType: value,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.serviceType ?? value;
          }
          if (errors.serviceType?.hasError) {
            runValidationTasks("serviceType", value);
          }
          setServiceType(value);
        }}
        onBlur={() => runValidationTasks("serviceType", serviceType)}
        errorMessage={errors.serviceType?.errorMessage}
        hasError={errors.serviceType?.hasError}
        {...getOverrideProps(overrides, "serviceType")}
      ></TextField>
      <TextField
        label="Type name"
        isRequired={false}
        isReadOnly={false}
        value={typeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName: value,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.typeName ?? value;
          }
          if (errors.typeName?.hasError) {
            runValidationTasks("typeName", value);
          }
          setTypeName(value);
        }}
        onBlur={() => runValidationTasks("typeName", typeName)}
        errorMessage={errors.typeName?.errorMessage}
        hasError={errors.typeName?.hasError}
        {...getOverrideProps(overrides, "typeName")}
      ></TextField>
      <TextField
        label="Type description"
        isRequired={false}
        isReadOnly={false}
        value={typeDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription: value,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.typeDescription ?? value;
          }
          if (errors.typeDescription?.hasError) {
            runValidationTasks("typeDescription", value);
          }
          setTypeDescription(value);
        }}
        onBlur={() => runValidationTasks("typeDescription", typeDescription)}
        errorMessage={errors.typeDescription?.errorMessage}
        hasError={errors.typeDescription?.hasError}
        {...getOverrideProps(overrides, "typeDescription")}
      ></TextField>
      <TextField
        label="Add on name"
        isRequired={false}
        isReadOnly={false}
        value={addOnName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName: value,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.addOnName ?? value;
          }
          if (errors.addOnName?.hasError) {
            runValidationTasks("addOnName", value);
          }
          setAddOnName(value);
        }}
        onBlur={() => runValidationTasks("addOnName", addOnName)}
        errorMessage={errors.addOnName?.errorMessage}
        hasError={errors.addOnName?.hasError}
        {...getOverrideProps(overrides, "addOnName")}
      ></TextField>
      <TextField
        label="Add on description"
        isRequired={false}
        isReadOnly={false}
        value={addOnDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription: value,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.addOnDescription ?? value;
          }
          if (errors.addOnDescription?.hasError) {
            runValidationTasks("addOnDescription", value);
          }
          setAddOnDescription(value);
        }}
        onBlur={() => runValidationTasks("addOnDescription", addOnDescription)}
        errorMessage={errors.addOnDescription?.errorMessage}
        hasError={errors.addOnDescription?.hasError}
        {...getOverrideProps(overrides, "addOnDescription")}
      ></TextField>
      <TextField
        label="Add on material"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={addOnMaterial}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial: value,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.addOnMaterial ?? value;
          }
          if (errors.addOnMaterial?.hasError) {
            runValidationTasks("addOnMaterial", value);
          }
          setAddOnMaterial(value);
        }}
        onBlur={() => runValidationTasks("addOnMaterial", addOnMaterial)}
        errorMessage={errors.addOnMaterial?.errorMessage}
        hasError={errors.addOnMaterial?.hasError}
        {...getOverrideProps(overrides, "addOnMaterial")}
      ></TextField>
      <TextField
        label="Add on total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={addOnTotal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal: value,
              callTotal,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.addOnTotal ?? value;
          }
          if (errors.addOnTotal?.hasError) {
            runValidationTasks("addOnTotal", value);
          }
          setAddOnTotal(value);
        }}
        onBlur={() => runValidationTasks("addOnTotal", addOnTotal)}
        errorMessage={errors.addOnTotal?.errorMessage}
        hasError={errors.addOnTotal?.hasError}
        {...getOverrideProps(overrides, "addOnTotal")}
      ></TextField>
      <TextField
        label="Call total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={callTotal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal: value,
              serviceDescription,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.callTotal ?? value;
          }
          if (errors.callTotal?.hasError) {
            runValidationTasks("callTotal", value);
          }
          setCallTotal(value);
        }}
        onBlur={() => runValidationTasks("callTotal", callTotal)}
        errorMessage={errors.callTotal?.errorMessage}
        hasError={errors.callTotal?.hasError}
        {...getOverrideProps(overrides, "callTotal")}
      ></TextField>
      <TextField
        label="Service description"
        isRequired={false}
        isReadOnly={false}
        value={serviceDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription: value,
              addOnLabor,
            };
            const result = onChange(modelFields);
            value = result?.serviceDescription ?? value;
          }
          if (errors.serviceDescription?.hasError) {
            runValidationTasks("serviceDescription", value);
          }
          setServiceDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("serviceDescription", serviceDescription)
        }
        errorMessage={errors.serviceDescription?.errorMessage}
        hasError={errors.serviceDescription?.hasError}
        {...getOverrideProps(overrides, "serviceDescription")}
      ></TextField>
      <TextField
        label="Add on labor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={addOnLabor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lengthFT,
              widthFT,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteTCost,
              Tax,
              Total,
              sqft,
              serviceName,
              description,
              serviceType,
              typeName,
              typeDescription,
              addOnName,
              addOnDescription,
              addOnMaterial,
              addOnTotal,
              callTotal,
              serviceDescription,
              addOnLabor: value,
            };
            const result = onChange(modelFields);
            value = result?.addOnLabor ?? value;
          }
          if (errors.addOnLabor?.hasError) {
            runValidationTasks("addOnLabor", value);
          }
          setAddOnLabor(value);
        }}
        onBlur={() => runValidationTasks("addOnLabor", addOnLabor)}
        errorMessage={errors.addOnLabor?.errorMessage}
        hasError={errors.addOnLabor?.hasError}
        {...getOverrideProps(overrides, "addOnLabor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
