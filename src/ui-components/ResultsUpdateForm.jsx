/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Results } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ResultsUpdateForm(props) {
  const {
    id: idProp,
    results: resultsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sqft: "",
    depth: "",
    ftCubed: "",
    ydsCubed: "",
    concreteRate: "",
    concreteCost: "",
    vbRate: "",
    vbCost: "",
    wwmRate: "",
    wwmCost: "",
    Tax: "",
    Total: "",
  };
  const [sqft, setSqft] = React.useState(initialValues.sqft);
  const [depth, setDepth] = React.useState(initialValues.depth);
  const [ftCubed, setFtCubed] = React.useState(initialValues.ftCubed);
  const [ydsCubed, setYdsCubed] = React.useState(initialValues.ydsCubed);
  const [concreteRate, setConcreteRate] = React.useState(
    initialValues.concreteRate
  );
  const [concreteCost, setConcreteCost] = React.useState(
    initialValues.concreteCost
  );
  const [vbRate, setVbRate] = React.useState(initialValues.vbRate);
  const [vbCost, setVbCost] = React.useState(initialValues.vbCost);
  const [wwmRate, setWwmRate] = React.useState(initialValues.wwmRate);
  const [wwmCost, setWwmCost] = React.useState(initialValues.wwmCost);
  const [Tax, setTax] = React.useState(initialValues.Tax);
  const [Total, setTotal] = React.useState(initialValues.Total);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = resultsRecord
      ? { ...initialValues, ...resultsRecord }
      : initialValues;
    setSqft(cleanValues.sqft);
    setDepth(cleanValues.depth);
    setFtCubed(cleanValues.ftCubed);
    setYdsCubed(cleanValues.ydsCubed);
    setConcreteRate(cleanValues.concreteRate);
    setConcreteCost(cleanValues.concreteCost);
    setVbRate(cleanValues.vbRate);
    setVbCost(cleanValues.vbCost);
    setWwmRate(cleanValues.wwmRate);
    setWwmCost(cleanValues.wwmCost);
    setTax(cleanValues.Tax);
    setTotal(cleanValues.Total);
    setErrors({});
  };
  const [resultsRecord, setResultsRecord] = React.useState(resultsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Results, idProp)
        : resultsModelProp;
      setResultsRecord(record);
    };
    queryData();
  }, [idProp, resultsModelProp]);
  React.useEffect(resetStateValues, [resultsRecord]);
  const validations = {
    sqft: [],
    depth: [],
    ftCubed: [],
    ydsCubed: [],
    concreteRate: [],
    concreteCost: [],
    vbRate: [],
    vbCost: [],
    wwmRate: [],
    wwmCost: [],
    Tax: [],
    Total: [],
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
          sqft,
          depth,
          ftCubed,
          ydsCubed,
          concreteRate,
          concreteCost,
          vbRate,
          vbCost,
          wwmRate,
          wwmCost,
          Tax,
          Total,
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
          await DataStore.save(
            Results.copyOf(resultsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResultsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sqft"
        isRequired={false}
        isReadOnly={false}
        value={sqft}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft: value,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
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
        label="Depth"
        isRequired={false}
        isReadOnly={false}
        value={depth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth: value,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
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
        value={ftCubed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed: value,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
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
        value={ydsCubed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed: value,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
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
        value={concreteRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate: value,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
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
        label="Concrete cost"
        isRequired={false}
        isReadOnly={false}
        value={concreteCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost: value,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
            };
            const result = onChange(modelFields);
            value = result?.concreteCost ?? value;
          }
          if (errors.concreteCost?.hasError) {
            runValidationTasks("concreteCost", value);
          }
          setConcreteCost(value);
        }}
        onBlur={() => runValidationTasks("concreteCost", concreteCost)}
        errorMessage={errors.concreteCost?.errorMessage}
        hasError={errors.concreteCost?.hasError}
        {...getOverrideProps(overrides, "concreteCost")}
      ></TextField>
      <TextField
        label="Vb rate"
        isRequired={false}
        isReadOnly={false}
        value={vbRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate: value,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total,
            };
            const result = onChange(modelFields);
            value = result?.vbRate ?? value;
          }
          if (errors.vbRate?.hasError) {
            runValidationTasks("vbRate", value);
          }
          setVbRate(value);
        }}
        onBlur={() => runValidationTasks("vbRate", vbRate)}
        errorMessage={errors.vbRate?.errorMessage}
        hasError={errors.vbRate?.hasError}
        {...getOverrideProps(overrides, "vbRate")}
      ></TextField>
      <TextField
        label="Vb cost"
        isRequired={false}
        isReadOnly={false}
        value={vbCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost: value,
              wwmRate,
              wwmCost,
              Tax,
              Total,
            };
            const result = onChange(modelFields);
            value = result?.vbCost ?? value;
          }
          if (errors.vbCost?.hasError) {
            runValidationTasks("vbCost", value);
          }
          setVbCost(value);
        }}
        onBlur={() => runValidationTasks("vbCost", vbCost)}
        errorMessage={errors.vbCost?.errorMessage}
        hasError={errors.vbCost?.hasError}
        {...getOverrideProps(overrides, "vbCost")}
      ></TextField>
      <TextField
        label="Wwm rate"
        isRequired={false}
        isReadOnly={false}
        value={wwmRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate: value,
              wwmCost,
              Tax,
              Total,
            };
            const result = onChange(modelFields);
            value = result?.wwmRate ?? value;
          }
          if (errors.wwmRate?.hasError) {
            runValidationTasks("wwmRate", value);
          }
          setWwmRate(value);
        }}
        onBlur={() => runValidationTasks("wwmRate", wwmRate)}
        errorMessage={errors.wwmRate?.errorMessage}
        hasError={errors.wwmRate?.hasError}
        {...getOverrideProps(overrides, "wwmRate")}
      ></TextField>
      <TextField
        label="Wwm cost"
        isRequired={false}
        isReadOnly={false}
        value={wwmCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost: value,
              Tax,
              Total,
            };
            const result = onChange(modelFields);
            value = result?.wwmCost ?? value;
          }
          if (errors.wwmCost?.hasError) {
            runValidationTasks("wwmCost", value);
          }
          setWwmCost(value);
        }}
        onBlur={() => runValidationTasks("wwmCost", wwmCost)}
        errorMessage={errors.wwmCost?.errorMessage}
        hasError={errors.wwmCost?.hasError}
        {...getOverrideProps(overrides, "wwmCost")}
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
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax: value,
              Total,
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
              sqft,
              depth,
              ftCubed,
              ydsCubed,
              concreteRate,
              concreteCost,
              vbRate,
              vbCost,
              wwmRate,
              wwmCost,
              Tax,
              Total: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || resultsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || resultsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
