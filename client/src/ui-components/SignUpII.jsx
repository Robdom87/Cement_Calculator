/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function SignUpII(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1321px"
      height="1123px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,41,107,1)"
      {...getOverrideProps(overrides, "SignUpII")}
      {...rest}
    >
      <View
        width="1116px"
        height="951px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="86px"
        left="121px"
        border="1px SOLID rgba(0,41,107,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(1,8,67,1)"
        {...getOverrideProps(overrides, "Rectangle 22")}
      ></View>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="952px"
        left="1023px"
        backgroundColor="rgba(174,179,183,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="SIGN UP"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <TextField
        width="300px"
        height="unset"
        placeholder="Company Name "
        position="absolute"
        top="478px"
        left="773px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Company Name")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Phone Number"
        position="absolute"
        top="328px"
        left="773px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Phone Number ")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Last Name "
        position="absolute"
        top="153px"
        left="773px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Last Name")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="First Name "
        position="absolute"
        top="153px"
        left="248px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "First Name")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Email"
        position="absolute"
        top="328px"
        left="248px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Zip Code"
        position="absolute"
        top="478px"
        left="248px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Zip Code ")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Pasword"
        position="absolute"
        top="653px"
        left="248px"
        backgroundColor="rgba(120,178,225,1)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Password")}
      ></TextField>
    </View>
  );
}
