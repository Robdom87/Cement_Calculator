/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestMeasurementsInputValues = {
    Field0?: string;
    Field1?: string;
};
export declare type RequestMeasurementsValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestMeasurementsOverridesProps = {
    RequestMeasurementsGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestMeasurementsProps = React.PropsWithChildren<{
    overrides?: RequestMeasurementsOverridesProps | undefined | null;
} & {
    onSubmit: (fields: RequestMeasurementsInputValues) => void;
    onChange?: (fields: RequestMeasurementsInputValues) => RequestMeasurementsInputValues;
    onValidate?: RequestMeasurementsValidationValues;
} & React.CSSProperties>;
export default function RequestMeasurements(props: RequestMeasurementsProps): React.ReactElement;
