/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FeedBackEmailOverridesProps = {
    FeedBackEmail?: PrimitiveOverrideProps<FlexProps>;
    "Hello, Thank you for using Maestro, as our product improves feedback is much appreciated. Was our Estimate Accurate ? Thank you, \u2028From the Maestro Team"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeedBackEmailProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeedBackEmailOverridesProps | undefined | null;
}>;
export default function FeedBackEmail(props: FeedBackEmailProps): React.ReactElement;
