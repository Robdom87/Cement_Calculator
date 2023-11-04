/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarPCOverridesProps = {
    NavBarPC?: PrimitiveOverrideProps<ViewProps>;
    "@@"?: PrimitiveOverrideProps<TextProps>;
    HOME?: PrimitiveOverrideProps<TextProps>;
    PRODUCTS?: PrimitiveOverrideProps<TextProps>;
    PRICING?: PrimitiveOverrideProps<TextProps>;
    CONTACT?: PrimitiveOverrideProps<TextProps>;
    "ABOUT US"?: PrimitiveOverrideProps<TextProps>;
    Button4224291?: PrimitiveOverrideProps<ButtonProps>;
    Button4224899?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarPCProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavBarPCOverridesProps | undefined | null;
}>;
export default function NavBarPC(props: NavBarPCProps): React.ReactElement;
