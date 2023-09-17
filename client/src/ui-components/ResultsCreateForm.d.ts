/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResultsCreateFormInputValues = {
    sqft?: string;
    depth?: string;
    ftCubed?: string;
    ydsCubed?: string;
    concreteRate?: string;
    concreteCost?: string;
    vbRate?: string;
    vbCost?: string;
    wwmRate?: string;
    wwmCost?: string;
    Tax?: string;
    Total?: string;
};
export declare type ResultsCreateFormValidationValues = {
    sqft?: ValidationFunction<string>;
    depth?: ValidationFunction<string>;
    ftCubed?: ValidationFunction<string>;
    ydsCubed?: ValidationFunction<string>;
    concreteRate?: ValidationFunction<string>;
    concreteCost?: ValidationFunction<string>;
    vbRate?: ValidationFunction<string>;
    vbCost?: ValidationFunction<string>;
    wwmRate?: ValidationFunction<string>;
    wwmCost?: ValidationFunction<string>;
    Tax?: ValidationFunction<string>;
    Total?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResultsCreateFormOverridesProps = {
    ResultsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sqft?: PrimitiveOverrideProps<TextFieldProps>;
    depth?: PrimitiveOverrideProps<TextFieldProps>;
    ftCubed?: PrimitiveOverrideProps<TextFieldProps>;
    ydsCubed?: PrimitiveOverrideProps<TextFieldProps>;
    concreteRate?: PrimitiveOverrideProps<TextFieldProps>;
    concreteCost?: PrimitiveOverrideProps<TextFieldProps>;
    vbRate?: PrimitiveOverrideProps<TextFieldProps>;
    vbCost?: PrimitiveOverrideProps<TextFieldProps>;
    wwmRate?: PrimitiveOverrideProps<TextFieldProps>;
    wwmCost?: PrimitiveOverrideProps<TextFieldProps>;
    Tax?: PrimitiveOverrideProps<TextFieldProps>;
    Total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResultsCreateFormProps = React.PropsWithChildren<{
    overrides?: ResultsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResultsCreateFormInputValues) => ResultsCreateFormInputValues;
    onSuccess?: (fields: ResultsCreateFormInputValues) => void;
    onError?: (fields: ResultsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResultsCreateFormInputValues) => ResultsCreateFormInputValues;
    onValidate?: ResultsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResultsCreateForm(props: ResultsCreateFormProps): React.ReactElement;
