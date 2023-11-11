/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SignUpIIIOverridesProps = {
    SignUpIII?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField4178854?: PrimitiveOverrideProps<FlexProps>;
    TextField4178855?: PrimitiveOverrideProps<FlexProps>;
    TextField4178856?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 284178860"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 284178861"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon4178862?: PrimitiveOverrideProps<ViewProps>;
    Instagram?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon4178865?: PrimitiveOverrideProps<ViewProps>;
    Twitter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignUpIIIProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignUpIIIOverridesProps | undefined | null;
}>;
export default function SignUpIII(props: SignUpIIIProps): React.ReactElement;
