import React from "react";
import {
  Avatar,
  Box,
  ChakraProps,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  OmitCommonProps,
  Text,
  useColorModeValue,
  useDisclosure,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import theme from "~/src/theme";
import { ChakraProvider } from "@chakra-ui/provider";

// Componentes
import SideBarContent from "./SideBarContent";
import NavItem from "./NavItem";
export default function Base(props: any) {
  // useDisclosure es usado para los siguientes escenarios:
  // - open - close - toggle
  const sideBar = useDisclosure();
  const integrations = useDisclosure();

  const { children } = props;
  // useColorModeValue
  // https://chakra-ui.com/docs/styled-system/features/color-mode#usecolormodevalue

  // Se definen los dos colores, el primero para light mode, y el otro para el dark mode
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <ChakraProvider theme={theme}>
      {/* Contenedor principañ */}
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH={"100vh"}
      >
        {/* Parte lateral de la página */}
        <SideBarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sideBar.isOpen}
          onClose={sideBar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SideBarContent w={"full"} borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition={".4s ease"}>
          <Flex
            // Background
            align={"center"}
            as={"header"}
            bg={"brand.primary"}
            borderBottomWidth={"2px"}
            borderColor={"inherit"}
            h={"16"}
            justify={"space-between"}
            px={"4"}
            w={"full"}
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sideBar.onOpen}
              icon={<FiMenu />}
              size={"sm"}
            />
            <InputGroup
              w={"96"}
              display={{ base: "none", md: "flex" }}
              ml={"5"}
            >
              <InputLeftElement color={"white"}>
                <FiSearch color={"white"} />
              </InputLeftElement>
              <Input
                mr={{ base: "0", md: "5" }}
                placeholder="Buscar productos"
                color={"white"}
                _placeholder={{ color: "gray.300" }}
              />
            </InputGroup>
            {/* Fotografía e Icono de Notificación */}
            <HStack spacing={{ base: "2", md: "5" }}>
              <IconButton
                size={"lg"}
                color={"dark"}
                aria-label={"open menu"}
                // variant={"ghost"}
              />
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition={"all 0.3s"}
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        borderColor={"white"}
                        borderWidth={"3px"}
                        // Cambiar el valor de esta parte de sm
                        // size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={"white"}
                    borderColor={"gray.200"}
                    borderWidth={"2px"}
                  >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Billing</MenuItem>
                    <MenuDivider />
                    <MenuItem>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>

            {/* Fin de Fotografía e Icon de notificación */}
          </Flex>

          <Box as="main" p="3rem">
            {children}
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
