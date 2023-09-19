/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupOverridesProps = {
    Signup?: PrimitiveOverrideProps<ViewProps>;
    "sign up"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    TextField4172659?: PrimitiveOverrideProps<FlexProps>;
    TextField4172660?: PrimitiveOverrideProps<FlexProps>;
    TextField4172661?: PrimitiveOverrideProps<FlexProps>;
    TextField4172662?: PrimitiveOverrideProps<FlexProps>;
    TextField4172663?: PrimitiveOverrideProps<FlexProps>;
    TextField4172664?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type SignupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignupOverridesProps | undefined | null;
}>;
export default function Signup(props: SignupProps): React.ReactElement;
