/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Results } from "../models";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ResultsPCOverridesProps = {
    ResultsPC?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 55"?: PrimitiveOverrideProps<IconProps>;
    "$999,999,999,999.9942171229"?: PrimitiveOverrideProps<TextProps>;
    "Service Total:"?: PrimitiveOverrideProps<TextProps>;
    Results?: PrimitiveOverrideProps<TextProps>;
    botDiv?: PrimitiveOverrideProps<ViewProps>;
    midDiv?: PrimitiveOverrideProps<IconProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<IconProps>;
    "Print Estimate"?: PrimitiveOverrideProps<TextProps>;
    "Material Price:"?: PrimitiveOverrideProps<TextProps>;
    "Service Total"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994278148"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994278149"?: PrimitiveOverrideProps<TextProps>;
    "Add-Ons Total"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResultsPCProps = React.PropsWithChildren<Partial<ViewProps> & {
    results?: Results;
} & {
    overrides?: ResultsPCOverridesProps | undefined | null;
}>;
export default function ResultsPC(props: ResultsPCProps): React.ReactElement;
