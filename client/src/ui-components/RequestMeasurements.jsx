/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RequestMeasurements(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    Sqft: "",
    Depth: "",
    Field0: [],
    Main: "",
    Extra: "",
  };
  const [Sqft, setSqft] = React.useState(initialValues.Sqft);
  const [Depth, setDepth] = React.useState(initialValues.Depth);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Main, setMain] = React.useState(initialValues.Main);
  const [Extra, setExtra] = React.useState(initialValues.Extra);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSqft(initialValues.Sqft);
    setDepth(initialValues.Depth);
    setField0(initialValues.Field0);
    setCurrentField0Value("");
    setMain(initialValues.Main);
    setExtra(initialValues.Extra);
    setErrors({});
  };
  const [currentField0Value, setCurrentField0Value] = React.useState("");
  const Field0Ref = React.createRef();
  const validations = {
    Sqft: [],
    Depth: [],
    Field0: [],
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
          Field0,
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
        placeholder="Feet"
        type="number"
        step="any"
        value={Sqft}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft: value,
              Depth,
              Field0,
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
        descriptiveText=""
        placeholder="Inches"
        type="number"
        step="any"
        value={Depth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Sqft,
              Depth: value,
              Field0,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Sqft,
              Depth,
              Field0: values,
              Main,
              Extra,
            };
            const result = onChange(modelFields);
            values = result?.Field0 ?? values;
          }
          setField0(values);
          setCurrentField0Value("");
        }}
        currentFieldValue={currentField0Value}
        label={"Label"}
        items={Field0}
        hasError={errors?.Field0?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Field0", currentField0Value)
        }
        errorMessage={errors?.Field0?.errorMessage}
        setFieldValue={setCurrentField0Value}
        inputFieldRef={Field0Ref}
        defaultFieldValue={""}
      >
        <TextField
          label="Label"
          type="datetime-local"
          value={currentField0Value}
          onChange={(e) => {
          let { value } = e.target;
            if (errors.Field0?.hasError) {
              runValidationTasks("Field0", value);
            }
            setCurrentField0Value(value);
          }}
          onBlur={() => runValidationTasks("Field0", currentField0Value)}
          errorMessage={errors.Field0?.errorMessage}
          hasError={errors.Field0?.hasError}
          ref={Field0Ref}
          labelHidden={true}
          {...getOverrideProps(overrides, "Field0")}
        ></TextField>
      </ArrayField>
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
              Field0,
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
              Field0,
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
