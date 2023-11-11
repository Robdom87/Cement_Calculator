/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CementNavOverridesProps = {
    CementNav?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    "La Calculadora Maestra"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "Log In"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CementNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CementNavOverridesProps | undefined | null;
}>;
export default function CementNav(props: CementNavProps): React.ReactElement;
