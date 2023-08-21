/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Results } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResultsUpdateFormInputValues = {
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
export declare type ResultsUpdateFormValidationValues = {
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
export declare type ResultsUpdateFormOverridesProps = {
    ResultsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ResultsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResultsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    results?: Results;
    onSubmit?: (fields: ResultsUpdateFormInputValues) => ResultsUpdateFormInputValues;
    onSuccess?: (fields: ResultsUpdateFormInputValues) => void;
    onError?: (fields: ResultsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResultsUpdateFormInputValues) => ResultsUpdateFormInputValues;
    onValidate?: ResultsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResultsUpdateForm(props: ResultsUpdateFormProps): React.ReactElement;
