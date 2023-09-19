/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrintReportOverridesProps = {
    PrintReport?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Report: Estimate:"?: PrimitiveOverrideProps<TextProps>;
    "Maestro.ai"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PrintReportProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PrintReportOverridesProps | undefined | null;
}>;
export default function PrintReport(props: PrintReportProps): React.ReactElement;
