/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Scan(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="551px"
      height="690px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Scan")}
      {...rest}
    >
      <Flex
        width="320px"
        height="unset"
        {...getOverrideProps(overrides, "StandardCard")}
      ></Flex>
    </View>
  );
}
