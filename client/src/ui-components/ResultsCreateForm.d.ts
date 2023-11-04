/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResultsCreateFormInputValues = {
    lengthFT?: number;
    widthFT?: number;
    depth?: number;
    ftCubed?: number;
    ydsCubed?: number;
    concreteRate?: number;
    concreteTCost?: number;
    Tax?: string;
    Total?: string;
    sqft?: number;
    serviceName?: string;
    description?: string;
    serviceType?: string;
    typeName?: string;
    typeDescription?: string;
    addOnName?: string;
    addOnDescription?: string;
    addOnMaterial?: number;
    addOnTotal?: number;
    callTotal?: number;
    serviceDescription?: string;
    addOnLabor?: number;
};
export declare type ResultsCreateFormValidationValues = {
    lengthFT?: ValidationFunction<number>;
    widthFT?: ValidationFunction<number>;
    depth?: ValidationFunction<number>;
    ftCubed?: ValidationFunction<number>;
    ydsCubed?: ValidationFunction<number>;
    concreteRate?: ValidationFunction<number>;
    concreteTCost?: ValidationFunction<number>;
    Tax?: ValidationFunction<string>;
    Total?: ValidationFunction<string>;
    sqft?: ValidationFunction<number>;
    serviceName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    serviceType?: ValidationFunction<string>;
    typeName?: ValidationFunction<string>;
    typeDescription?: ValidationFunction<string>;
    addOnName?: ValidationFunction<string>;
    addOnDescription?: ValidationFunction<string>;
    addOnMaterial?: ValidationFunction<number>;
    addOnTotal?: ValidationFunction<number>;
    callTotal?: ValidationFunction<number>;
    serviceDescription?: ValidationFunction<string>;
    addOnLabor?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResultsCreateFormOverridesProps = {
    ResultsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lengthFT?: PrimitiveOverrideProps<TextFieldProps>;
    widthFT?: PrimitiveOverrideProps<TextFieldProps>;
    depth?: PrimitiveOverrideProps<TextFieldProps>;
    ftCubed?: PrimitiveOverrideProps<TextFieldProps>;
    ydsCubed?: PrimitiveOverrideProps<TextFieldProps>;
    concreteRate?: PrimitiveOverrideProps<TextFieldProps>;
    concreteTCost?: PrimitiveOverrideProps<TextFieldProps>;
    Tax?: PrimitiveOverrideProps<TextFieldProps>;
    Total?: PrimitiveOverrideProps<TextFieldProps>;
    sqft?: PrimitiveOverrideProps<TextFieldProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    serviceType?: PrimitiveOverrideProps<TextFieldProps>;
    typeName?: PrimitiveOverrideProps<TextFieldProps>;
    typeDescription?: PrimitiveOverrideProps<TextFieldProps>;
    addOnName?: PrimitiveOverrideProps<TextFieldProps>;
    addOnDescription?: PrimitiveOverrideProps<TextFieldProps>;
    addOnMaterial?: PrimitiveOverrideProps<TextFieldProps>;
    addOnTotal?: PrimitiveOverrideProps<TextFieldProps>;
    callTotal?: PrimitiveOverrideProps<TextFieldProps>;
    serviceDescription?: PrimitiveOverrideProps<TextFieldProps>;
    addOnLabor?: PrimitiveOverrideProps<TextFieldProps>;
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
