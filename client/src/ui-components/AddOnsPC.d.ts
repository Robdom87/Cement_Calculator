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
export declare type AddOnsPCOverridesProps = {
    AddOnsPC?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<IconProps>;
    "lorem ipsum ADD ON 1 consectetur."?: PrimitiveOverrideProps<TextProps>;
    botDiv?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet consectetur. Nec tortor porta eget facilisi tristique non. Massa ac nulla vel nisl odio consectetur pulvinar nisl. Mattis enim nibh interdum ut neque eu elit erat. Iaculis eget pretium mattis quis ultrices eu dui in magna. Consequat hendrerit pellentesque dui massa sapien ac adipiscing velit. Libero cras velit tellus sit et faucibus at."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 54"?: PrimitiveOverrideProps<IconProps>;
    Measurement?: PrimitiveOverrideProps<TextProps>;
    Rate?: PrimitiveOverrideProps<TextProps>;
    "Work Days"?: PrimitiveOverrideProps<TextProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "Total:"?: PrimitiveOverrideProps<TextProps>;
    "Unit:"?: PrimitiveOverrideProps<TextProps>;
    "Material Estimate:"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994263319"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994263356"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994262828"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.9942171152"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.994263756"?: PrimitiveOverrideProps<TextProps>;
    "Labor Estimate"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Add-On Total:"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.9942171197"?: PrimitiveOverrideProps<TextProps>;
    midDiv?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type AddOnsPCProps = React.PropsWithChildren<Partial<ViewProps> & {
    results?: Results;
} & {
    overrides?: AddOnsPCOverridesProps | undefined | null;
}>;
export default function AddOnsPC(props: AddOnsPCProps): React.ReactElement;
