/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, RadioGroupFieldProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestMeasurementsInputValues = {
    Sqft?: string;
    Depth?: string;
    Main?: string;
    Extra?: string;
};
export declare type RequestMeasurementsValidationValues = {
    Sqft?: ValidationFunction<string>;
    Depth?: ValidationFunction<string>;
    Main?: ValidationFunction<string>;
    Extra?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestMeasurementsOverridesProps = {
    RequestMeasurementsGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Sqft?: PrimitiveOverrideProps<TextFieldProps>;
    Depth?: PrimitiveOverrideProps<TextFieldProps>;
    Main?: PrimitiveOverrideProps<SelectFieldProps>;
    Extra?: PrimitiveOverrideProps<RadioGroupFieldProps>;
} & EscapeHatchProps;
export declare type RequestMeasurementsProps = React.PropsWithChildren<{
    overrides?: RequestMeasurementsOverridesProps | undefined | null;
} & {
    onSubmit: (fields: RequestMeasurementsInputValues) => void;
    onChange?: (fields: RequestMeasurementsInputValues) => RequestMeasurementsInputValues;
    onValidate?: RequestMeasurementsValidationValues;
} & React.CSSProperties>;
export default function RequestMeasurements(props: RequestMeasurementsProps): React.ReactElement;
