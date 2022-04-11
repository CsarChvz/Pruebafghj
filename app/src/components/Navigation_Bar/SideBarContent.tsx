import {
  Box,
  ChakraProps,
  ChakraProvider,
  Flex,
  Text,
  Image,
  OmitCommonProps,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import NavItem from "./NavItem";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import theme from "~/src/theme";
import { useColorModeValue } from "@chakra-ui/react";

// Iconos
import { FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { BiStore } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TitleSideBar from "./TitleSideBar";
function SideBarContent(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      keyof ChakraProps
    > &
    ChakraProps & { as?: "div" | undefined }
) {
  // Para la listas de navitem, checar si es necesario realmente poner el Cerrar sesión en la parte del sidebar
  return (
    <ChakraProvider theme={theme}>
      <Box
        as="nav"
        // borderRightWidth={"1px"}
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={"brand.primary_dark"}
        w="60"
        {...props}
      >
        <Container>
          <TitleSideBar color={"white"} fontWeight={"bold"} fontSize={"xl"} />
        </Container>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={IoHomeOutline} color={"white"}>
            Home
          </NavItem>
          <NavItem icon={BsPerson} color={"white"}>
            Mi tienda
          </NavItem>
          <NavItem icon={FiShoppingCart} color={"white"}>
            Carrito
          </NavItem>
          <NavItem icon={GoPackage} color={"white"}>
            Pedidos
          </NavItem>
          <NavItem icon={BiStore} color={"white"}>
            Tiendas
          </NavItem>
          <NavItem icon={IoSettingsOutline} color={"white"}>
            Configuración
          </NavItem>

          <Button m={"10"} as="button">
            <Text fontWeight={"thin"}>Cerrar Sesión</Text>
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default SideBarContent;
