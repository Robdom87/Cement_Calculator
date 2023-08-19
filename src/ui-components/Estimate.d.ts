/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EstimateOverridesProps = {
    Estimate?: PrimitiveOverrideProps<FlexProps>;
    label4099328?: PrimitiveOverrideProps<TextProps>;
    "Total FT^2 = 2360 FT^2"?: PrimitiveOverrideProps<TextProps>;
    "Depth Inches = 6 In"?: PrimitiveOverrideProps<TextProps>;
    "Total Cost (Includes Taxes) = $5773.28"?: PrimitiveOverrideProps<TextProps>;
    label40701203?: PrimitiveOverrideProps<TextProps>;
    label4079322?: PrimitiveOverrideProps<TextProps>;
    "Total FT^3 = 778.8 FT^3"?: PrimitiveOverrideProps<TextProps>;
    "Total YD^3 = 30 YD^3"?: PrimitiveOverrideProps<TextProps>;
    "Cost per YD^3 = $125 YD^3"?: PrimitiveOverrideProps<TextProps>;
    "Total Cost = $3750 + $1000 for pump"?: PrimitiveOverrideProps<TextProps>;
    label4079321?: PrimitiveOverrideProps<TextProps>;
    "Total Cost = $200"?: PrimitiveOverrideProps<TextProps>;
    "Cost = $100 per 2000ft^2"?: PrimitiveOverrideProps<TextProps>;
    label4079320?: PrimitiveOverrideProps<TextProps>;
    "Cost = $7 per 45ft^2"?: PrimitiveOverrideProps<TextProps>;
    "Total Cost = $371"?: PrimitiveOverrideProps<TextProps>;
    label4079319?: PrimitiveOverrideProps<TextProps>;
    "= $452.28"?: PrimitiveOverrideProps<TextProps>;
    label4099333?: PrimitiveOverrideProps<TextProps>;
    "= $5773.28"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EstimateProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EstimateOverridesProps | undefined | null;
}>;
export default function Estimate(props: EstimateProps): React.ReactElement;
