/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function PrintReport(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="394px"
      direction="row"
      width="647px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="15px 16px 15px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PrintReport")}
      {...rest}
    >
      <Icon
        width="151px"
        height="74px"
        viewBox={{ minX: 0, minY: 0, width: 151, height: 74 }}
        paths={[
          {
            d: "M151 37C151 57.4345 117.197 74 75.5 74C33.8025 74 0 57.4345 0 37C0 16.5655 33.8025 0 75.5 0C117.197 0 151 16.5655 151 37Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
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
        width="418px"
        height="202px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Report: &#xA;Estimate:"
        {...getOverrideProps(overrides, "Report: Estimate:")}
      ></Text>
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
        width="119px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Maestro.ai  "
        {...getOverrideProps(overrides, "Maestro.ai")}
      ></Text>
    </Flex>
  );
}
