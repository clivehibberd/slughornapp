/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function HelloFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="280px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="49px 161px 49px 161px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HelloFrame")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="1"
        children="Hello From Figma"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        width="211px"
        height="62px"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Say Hello"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
