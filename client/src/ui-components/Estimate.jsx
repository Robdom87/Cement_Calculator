/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Estimate(props) {
  const { results, overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="column"
      width="655px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 50px 0px 50px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Estimate")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="27.647998809814453px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="34.55999755859375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estimate"
        {...getOverrideProps(overrides, "label4099328")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="27.647998809814453px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="34.55999755859375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.sqft}
        {...getOverrideProps(overrides, "Total (FT^2) =")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="27.647998809814453px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="34.55999755859375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.depth}
        {...getOverrideProps(overrides, "Depth Inches = 6 In")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="27.647998809814453px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="34.55999755859375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.ydsCubed}
        {...getOverrideProps(
          overrides,
          "Total Cost (Includes Taxes) = $5773.28"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="27.647998809814453px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="34.55999755859375px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cost Breakdown"
        {...getOverrideProps(overrides, "label40701203")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Concrete"
        {...getOverrideProps(overrides, "label4079322")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="584px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.ftCubed}
        {...getOverrideProps(overrides, "Total FT^3 = 778.8 FT^3")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.ydsCubed}
        {...getOverrideProps(overrides, "Total YD^3 = 30 YD^3")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.concreteRate}
        {...getOverrideProps(overrides, "Cost per YD^3 = $125 YD^3")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.concreteCost}
        {...getOverrideProps(overrides, "Total Cost = $3750 + $1000 for pump")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Vapor Barrier"
        {...getOverrideProps(overrides, "label4079321")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.vbCost}
        {...getOverrideProps(overrides, "Total Cost = $200")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.vbRate}
        {...getOverrideProps(overrides, "Cost = $100 per 2000ft^2")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welded Wire Mesh"
        {...getOverrideProps(overrides, "label4079320")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.wwmRate}
        {...getOverrideProps(overrides, "Cost = $7 per 45ft^2")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.wwmCost}
        {...getOverrideProps(overrides, "Total Cost = $371")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tax (8.5%)"
        {...getOverrideProps(overrides, "label4079319")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.Tax}
        {...getOverrideProps(overrides, "= $452.28")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Total"
        {...getOverrideProps(overrides, "label4099333")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="23px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.75px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={results?.Total}
        {...getOverrideProps(overrides, "= $5773.28")}
      ></Text>
    </Flex>
  );
}
