/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import AddOnsPC from "./AddOnsPC";
import { View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1546px"
      height="698px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <AddOnsPC
        width="1484px"
        height="694px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0.57%"
        left="0%"
        right="4.01%"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(224,225,221,1)"
        {...getOverrideProps(overrides, "Add-Ons PC")}
      ></AddOnsPC>
    </View>
  );
}
