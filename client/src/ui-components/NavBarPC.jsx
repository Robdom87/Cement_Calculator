/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBarPC(props) {
  const { Login, overrides, ...rest } = props;
  return (
    <Flex
      gap="63px"
      direction="row"
      width="1545px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      padding="19px 0px 19px 0px"
      backgroundColor="rgba(13,27,42,1)"
      {...getOverrideProps(overrides, "NavBarPC")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(119,141,169,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="88px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="@@"
        {...getOverrideProps(overrides, "@@")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(217,217,217,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="87px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="HOME"
        {...getOverrideProps(overrides, "HOME")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(217,217,217,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="152px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="PRODUCTS"
        {...getOverrideProps(overrides, "PRODUCTS")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(217,217,217,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="124px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="PRICING"
        {...getOverrideProps(overrides, "PRICING")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(217,217,217,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="140px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CONTACT"
        {...getOverrideProps(overrides, "CONTACT")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(217,217,217,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="144px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ABOUT US"
        {...getOverrideProps(overrides, "ABOUT US")}
      ></Text>
      <Button
        width="156px"
        height="49px"
        borderRadius="11px"
        shrink="0"
        backgroundColor="rgba(119,141,169,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Log In"
        {...getOverrideProps(overrides, "Button4224291")}
      ></Button>
      <Button
        width="156px"
        height="49px"
        borderRadius="11px"
        shrink="0"
        backgroundColor="rgba(119,141,169,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Sign Up"
        {...getOverrideProps(overrides, "Button4224899")}
      ></Button>
    </Flex>
  );
}
