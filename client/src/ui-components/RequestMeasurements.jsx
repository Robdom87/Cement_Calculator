/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function RequestMeasurements(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    Sqft: "",
    Depth: "",
    Main: "",
    Extra: [],
  };
  const [Sqft, setSqft] = React.useState(initialValues.Sqft);
  const [Depth, setDepth] = React.useState(initialValues.Depth);
  const [Main, setMain] = React.useState(initialValues.Main);
  const [Extra, setExtra] = React.useState(initialValues.Extra);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSqft(initialValues.Sqft);
    setDepth(initialValues.Depth);
    setMain(initialValues.Main);
    setExtra(initialValues.Extra);
    setErrors({});
  };
  const validations = {
    Sqft: [],
    Depth: [],
    Main: [],
    Extra: [],
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
        const modelFields = {
          Sqft,
          Depth,
          Main,
          Extra,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "RequestMeasurements")}
      {...rest}
    >
      <Heading
        level={6}
        children="Submit Measurements"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Square Footage"
        type="number"
        step="any"
        value={Sqft}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft: value,
              Depth,
              Main,
              Extra,
            };
            const result = onChange(modelFields);
            value = result?.Sqft ?? value;
          }
          if (errors.Sqft?.hasError) {
            runValidationTasks("Sqft", value);
          }
          setSqft(value);
        }}
        onBlur={() => runValidationTasks("Sqft", Sqft)}
        errorMessage={errors.Sqft?.errorMessage}
        hasError={errors.Sqft?.hasError}
        {...getOverrideProps(overrides, "Sqft")}
      ></TextField>
      <TextField
        label="Depth"
        type="number"
        step="any"
        value={Depth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft,
              Depth: value,
              Main,
              Extra,
            };
            const result = onChange(modelFields);
            value = result?.Depth ?? value;
          }
          if (errors.Depth?.hasError) {
            runValidationTasks("Depth", value);
          }
          setDepth(value);
        }}
        onBlur={() => runValidationTasks("Depth", Depth)}
        errorMessage={errors.Depth?.errorMessage}
        hasError={errors.Depth?.hasError}
        {...getOverrideProps(overrides, "Depth")}
      ></TextField>
      <SelectField
        label="Main Costs"
        placeholder="Please select an option"
        value={Main}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft,
              Depth,
              Main: value,
              Extra,
            };
            const result = onChange(modelFields);
            value = result?.Main ?? value;
          }
          if (errors.Main?.hasError) {
            runValidationTasks("Main", value);
          }
          setMain(value);
        }}
        onBlur={() => runValidationTasks("Main", Main)}
        errorMessage={errors.Main?.errorMessage}
        hasError={errors.Main?.hasError}
        {...getOverrideProps(overrides, "Main")}
      ></SelectField>
      <SelectField
        label="Extra Costs"
        placeholder="Please select an option"
        value={Extra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft,
              Depth,
              Main,
              Extra: value,
            };
            const result = onChange(modelFields);
            value = result?.Extra ?? value;
          }
          if (errors.Extra?.hasError) {
            runValidationTasks("Extra", value);
          }
          setExtra(value);
        }}
        onBlur={() => runValidationTasks("Extra", Extra)}
        errorMessage={errors.Extra?.errorMessage}
        hasError={errors.Extra?.hasError}
        {...getOverrideProps(overrides, "Extra")}
      ></SelectField>
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
