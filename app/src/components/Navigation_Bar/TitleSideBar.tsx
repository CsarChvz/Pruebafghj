import {
  ChakraProvider,
  Text,
  Image,
  Flex,
  HStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import theme from "~/src/theme";

function TitleSideBar({ ...rest }) {
  return (
    <ChakraProvider theme={theme}>
      <HStack
        gap={"1"}
        justify={"left"}
        marginTop={"5"}
        marginLeft={"2"}
        marginBottom={"9"}
      >
        {/* Imagen de SquareCo */}
        <Image
          width={"50"}
          height={"50"}
          src={require("~/src/img/squareco.jpg")}
          borderRadius={"8px"}
          border="4px"
          borderColor="gray.200"
        />
        <Text {...rest}>SquareCo</Text>
      </HStack>
    </ChakraProvider>
  );
}

export default TitleSideBar;
