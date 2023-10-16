/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestInputValues = {
    Field0?: string;
};
export declare type TestValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestOverridesProps = {
    TestGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TestProps = React.PropsWithChildren<{
    overrides?: TestOverridesProps | undefined | null;
} & {
    onSubmit: (fields: TestInputValues) => void;
    onChange?: (fields: TestInputValues) => TestInputValues;
    onValidate?: TestValidationValues;
} & React.CSSProperties>;
export default function Test(props: TestProps): React.ReactElement;
