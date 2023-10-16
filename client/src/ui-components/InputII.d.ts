/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Results } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputIIOverridesProps = {
    InputII?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    TextField4184472?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    TextField4184479?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Input the dimensions of the work site to calculate cement needed for foundation slab. Enter the width and length of the site in feet. Then enter the slab width in inches."?: PrimitiveOverrideProps<TextProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    TextField4184493?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "CEMENT CALCULATOR"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InputIIProps = React.PropsWithChildren<Partial<ViewProps> & {
    results?: Results;
    Input?: Number;
} & {
    overrides?: InputIIOverridesProps | undefined | null;
}>;
export default function InputII(props: InputIIProps): React.ReactElement;
