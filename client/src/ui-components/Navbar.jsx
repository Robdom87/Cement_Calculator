/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Navbar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="80px"
      direction="column"
      width="905px"
      height="222px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(0,41,107,1)"
      {...getOverrideProps(overrides, "Navbar")}
      {...rest}
    >
      <Flex
        width="756px"
        height="unset"
        {...getOverrideProps(overrides, "NavBarHeader2")}
      ></Flex>
    </Flex>
  );
}
