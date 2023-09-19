/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Input(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="859px"
      height="933px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Input")}
      {...rest}
    >
      <View
        width="859px"
        height="933px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,41,107,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <View
        width="731px"
        height="785px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7.93%"
        bottom="7.93%"
        left="7.45%"
        right="7.45%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(1,8,67,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        width="633px"
        height="93px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.11%"
        bottom="77.92%"
        left="12.69%"
        right="13.62%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(120,178,225,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="700"
        color="rgba(1,8,67,1)"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="618px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.5%"
        bottom="78.78%"
        left="12.69%"
        right="15.37%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cement Calculator"
        {...getOverrideProps(overrides, "Cement Calculator")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="661px"
        height="454px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.33%"
        bottom="27.01%"
        left="11.53%"
        right="11.53%"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Flex
          width="321px"
          height="unset"
          {...getOverrideProps(overrides, "SliderField41721218")}
        ></Flex>
        <Flex
          width="321px"
          height="unset"
          {...getOverrideProps(overrides, "SliderField41721219")}
        ></Flex>
        <Flex
          width="321px"
          height="unset"
          {...getOverrideProps(overrides, "SliderField41721220")}
        ></Flex>
        <Flex
          width="661px"
          height="unset"
          {...getOverrideProps(overrides, "Alert")}
        ></Flex>
      </View>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </View>
  );
}
