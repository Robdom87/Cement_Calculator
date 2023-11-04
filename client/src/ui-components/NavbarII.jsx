/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Heading, View } from "@aws-amplify/ui-react";
export default function NavbarII(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1032px"
      height="130px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,41,107,1)"
      {...getOverrideProps(overrides, "NavbarII")}
      {...rest}
    >
      <View
        width="1032px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,41,107,1)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
      <View
        width="880px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30.77%"
        bottom="30.77%"
        left="7.36%"
        right="7.36%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="345px"
        height="37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48px"
        left="134px"
        {...getOverrideProps(overrides, "Nav Bar Indexes ")}
      >
        <Heading
          width="75px"
          height="37px"
          position="absolute"
          top="0px"
          left="270px"
          level="1"
          children="Contact"
          {...getOverrideProps(overrides, "Contacts")}
        ></Heading>
        <Heading
          width="75px"
          height="37px"
          position="absolute"
          top="0px"
          left="172px"
          level="1"
          children="Pricing "
          {...getOverrideProps(overrides, "Pricing ")}
        ></Heading>
        <Heading
          width="75px"
          height="37px"
          position="absolute"
          top="0px"
          left="97px"
          level="1"
          children="Products "
          {...getOverrideProps(overrides, "Products")}
        ></Heading>
        <Heading
          width="75px"
          height="37px"
          position="absolute"
          top="0px"
          left="0px"
          level="1"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Heading>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="168.5px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45px"
        left="774px"
        {...getOverrideProps(overrides, "Login Group")}
      >
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="-2.5%"
          bottom="-2.5%"
          left="44.21%"
          right="-0.59%"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Up"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="-2.5%"
          bottom="-2.5%"
          left="-0.59%"
          right="54.3%"
          size="default"
          isDisabled={false}
          variation="default"
          children="Login"
          {...getOverrideProps(overrides, "Login Button")}
        ></Button>
      </View>
    </View>
  );
}
