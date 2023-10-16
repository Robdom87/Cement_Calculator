/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Results } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpIIOverridesProps = {
    SignUpII?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Company Name"?: PrimitiveOverrideProps<TextFieldProps>;
    "Phone Number "?: PrimitiveOverrideProps<TextFieldProps>;
    "Last Name"?: PrimitiveOverrideProps<TextFieldProps>;
    "First Name"?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    "Zip Code "?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignUpIIProps = React.PropsWithChildren<Partial<ViewProps> & {
    ouptut?: Results;
} & {
    overrides?: SignUpIIOverridesProps | undefined | null;
}>;
export default function SignUpII(props: SignUpIIProps): React.ReactElement;
