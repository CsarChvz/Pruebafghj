import { ChakraProvider, Flex, Link, Icon } from "@chakra-ui/react";
import React from "react";
import theme from "~/src/theme";
function NavItem(props: { [x: string]: any; icon: any; children: any }) {
  const { icon, children, ...rest } = props;
  return (
    <ChakraProvider theme={theme}>
      <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="3"
          mx="4"
          my={"3"}
          borderRadius="lg"
          fontSize={"md"}
          role="group"
          fontWeight={"semibold"}
          cursor="pointer"
          _hover={{
            bg: "brand.primary_light",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="18"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </ChakraProvider>
  );
}

export default NavItem;
