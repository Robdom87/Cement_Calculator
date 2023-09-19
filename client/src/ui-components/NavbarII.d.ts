/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarIIOverridesProps = {
    NavbarII?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Nav Bar Indexes "?: PrimitiveOverrideProps<ViewProps>;
    Contacts?: PrimitiveOverrideProps<HeadingProps>;
    "Pricing "?: PrimitiveOverrideProps<HeadingProps>;
    Products?: PrimitiveOverrideProps<HeadingProps>;
    Home?: PrimitiveOverrideProps<HeadingProps>;
    "Login Group"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Login Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavbarIIProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavbarIIOverridesProps | undefined | null;
}>;
export default function NavbarII(props: NavbarIIProps): React.ReactElement;
