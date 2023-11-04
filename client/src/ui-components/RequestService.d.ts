/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type RequestServiceInputValues = {
    Name?: string;
};
export declare type RequestServiceValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestServiceOverridesProps = {
    RequestServiceGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RequestServiceProps = React.PropsWithChildren<{
    overrides?: RequestServiceOverridesProps | undefined | null;
} & {
    onSubmit: (fields: RequestServiceInputValues) => void;
    onChange?: (fields: RequestServiceInputValues) => RequestServiceInputValues;
    onValidate?: RequestServiceValidationValues;
} & React.CSSProperties>;
export default function RequestService(props: RequestServiceProps): React.ReactElement;
