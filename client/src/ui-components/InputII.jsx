/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function InputII(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1321px"
      height="1123px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,41,107,1)"
      {...getOverrideProps(overrides, "InputII")}
      {...rest}
    >
      <View
        width="1055px"
        height="850px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="96px"
        left="120px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(1,8,67,1)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      ></View>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="467px"
        left="488px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 429")}
      >
        <TextField
          width="300px"
          height="unset"
          label="Width (Feet)"
          shrink="0"
          backgroundColor="rgba(120,178,225,1)"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField4184472")}
        ></TextField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="625px"
        left="488px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <TextField
          width="300px"
          height="unset"
          label="Length (Feet)"
          shrink="0"
          backgroundColor="rgba(120,178,225,1)"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField4184479")}
        ></TextField>
      </Flex>
      <Divider
        width="530px"
        height="5px"
        position="absolute"
        top="221px"
        left="396px"
        backgroundColor="rgba(120,178,225,1)"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <View
        width="827px"
        height="170px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="258px"
        left="245px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(120,178,225,1)"
        {...getOverrideProps(overrides, "Rectangle 21")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="840px"
        height="214px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="257px"
        left="256px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Input the dimensions of the work site to calculate cement needed for foundation slab. Enter the width and length of the site in feet. Then enter the slab width in inches."
        {...getOverrideProps(
          overrides,
          "Input the dimensions of the work site to calculate cement needed for foundation slab. Enter the width and length of the site in feet. Then enter the slab width in inches."
        )}
      ></Text>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="775px"
        left="488px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <TextField
          width="300px"
          height="unset"
          label="Slab Width (Inches)"
          shrink="0"
          backgroundColor="rgba(120,178,225,1)"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField4184493")}
        ></TextField>
      </Flex>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="881px"
        left="1023px"
        backgroundColor="rgba(174,179,183,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="SUBMIT"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="128px"
        left="387px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="300"
          color="rgba(120,178,225,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CEMENT CALCULATOR"
          {...getOverrideProps(overrides, "CEMENT CALCULATOR")}
        ></Text>
      </Flex>
    </View>
  );
}
