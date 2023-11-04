/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
    Results?: PrimitiveOverrideProps<TextProps>;
    botDiv?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet consectetur. Nec tortor porta eget facilisi tristique non. Massa ac nulla vel nisl odio consectetur pulvinar nisl. Mattis enim nibh interdum ut neque eu elit erat. Iaculis eget pretium mattis quis ultrices eu dui in magna. Consequat hendrerit pellentesque dui massa sapien ac adipiscing velit. Libero cras velit tellus sit et faucibus at."?: PrimitiveOverrideProps<TextProps>;
    midDiv?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 54"?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet consectetur. Quam nec sed semper tristique faucibus."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 55"?: PrimitiveOverrideProps<IconProps>;
    "Material Price:"?: PrimitiveOverrideProps<TextProps>;
    "Service Total:"?: PrimitiveOverrideProps<TextProps>;
    "$999,999,999,999.99"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. Pellentesque neque ipsum dis elementum viverra. Nisl ut urna viverra amet enim feugiat. Eu tellus ipsum lacinia ac. Consequat dolor in ipsum eu a faucibus nec sapien. Pellentesque accumsan augue cursus mi arcu. Pellentesque eleifend faucibus nunc sapien."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResultsPCProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ResultsPCOverridesProps | undefined | null;
}>;
export default function ResultsPC(props: ResultsPCProps): React.ReactElement;
