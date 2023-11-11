/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function FeedBackEmail(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="13px 17px 13px 17px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FeedBackEmail")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="641px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hello, &#xA;&#xA;Thank you for using Maestro, as our product improves feedback is much appreciated. Was our Estimate Accurate ? &#xA;&#xA;Thank you, &#x2028;From the Maestro Team   "
        {...getOverrideProps(
          overrides,
          "Hello, Thank you for using Maestro, as our product improves feedback is much appreciated. Was our Estimate Accurate ? Thank you, \u2028From the Maestro Team"
        )}
      ></Text>
    </Flex>
  );
}
