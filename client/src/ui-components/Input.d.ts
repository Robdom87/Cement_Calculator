/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputOverridesProps = {
    Input?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Cement Calculator"?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    SliderField41721218?: PrimitiveOverrideProps<FlexProps>;
    SliderField41721219?: PrimitiveOverrideProps<FlexProps>;
    SliderField41721220?: PrimitiveOverrideProps<FlexProps>;
    Alert?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type InputProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InputOverridesProps | undefined | null;
}>;
export default function Input(props: InputProps): React.ReactElement;
