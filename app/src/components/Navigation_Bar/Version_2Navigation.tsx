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
import React from "react";
import theme from "~/src/theme";
import { ChakraProvider } from "@chakra-ui/provider";

// Marca error por que no esta explicito el tipo de dato el cual se esta destructurando los parametros
export default function Swibc({ children }) {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");

  // Las propiedades son especificadas cada una de ellas con el tipo de datos, aún cuando se deconstruyen más abajo
  const NavItem = (props: { [x: string]: any; icon: any; children: any }) => {
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
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "cyan.400",
              color: "white",
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
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
  };

  const SidebarContent = (
    props: JSX.IntrinsicAttributes &
      OmitCommonProps<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        keyof ChakraProps
      > &
      ChakraProps & { as?: "div" | undefined }
  ) => (
    <ChakraProvider theme={theme}>
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("brand.primary_dark", "white")}
        // borderColor={useColorModeValue("inherit", "gray.700")}
        // borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          {/* <FiMenu size={"4vh"} color={"white"} /> */}
          <Image
            width={"50px"}
            height={"50px"}
            borderRadius={"20%"}
            src={require("../../img/squareco.jpg")}
            ml="2"
            mr={"2"}
            borderColor={"whatsapp.100"}
            borderWidth={"7px"}
          />
          <Text
            fontSize="xl"
            ml="2"
            color={useColorModeValue("brand.shadow", "white")}
            fontWeight="black"
            letterSpacing={"1px"}
            alignSelf={"center"}
          >
            SquareCo
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={MdHome} color={"white"}>
            Home
          </NavItem>
          <NavItem icon={FaRss} color={"white"}>
            Articles
          </NavItem>
          <NavItem icon={HiCollection} color={"white"}>
            Collections
          </NavItem>
          <NavItem icon={FaClipboardCheck} color={"white"}>
            Checklists
          </NavItem>
          <NavItem
            icon={HiCode}
            onClick={integrations.onToggle}
            color={"white"}
          >
            Integrations
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2" icon={null} color={"white"}>
              Shopify
            </NavItem>
            <NavItem pl="12" py="2" icon={null} color={"white"}>
              Slack
            </NavItem>
            <NavItem pl="12" py="2" icon={null} color={"white"}>
              Zapier
            </NavItem>
          </Collapse>
          <NavItem icon={AiFillGift} color={"white"}>
            Changelog
          </NavItem>
          <NavItem icon={BsGearFill} color={"white"}>
            Settings
          </NavItem>
          <NavItem icon={BsGearFill} color={"white"}>
            Log Out
          </NavItem>
        </Flex>
      </Box>
    </ChakraProvider>
  );
  return (
    <ChakraProvider theme={theme}>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("brand.primary", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            <InputGroup w="96" display={{ base: "none", md: "flex" }}>
              <InputLeftElement color="gray.500">
                <FiSearch color="white" />
              </InputLeftElement>
              <Input placeholder="Buscar Articulos" color={"white"} />
            </InputGroup>
            {/* Otro tipo de vista para la imagen */}
            {/* <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src="https://avatars.githubusercontent.com/u/30869823?v=4"
                cursor="pointer"
              />
            </Flex> */}
            <HStack spacing={{ base: "0", md: "6" }}>
              <IconButton
                size="lg"
                color={useColorModeValue("white", "baclk")}
                variant="ghost"
                aria-label="open menu"
                icon={<FaBell />}
              />
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        borderColor={"white"}
                        borderWidth={"3px"}
                        size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                      {/* <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">[NombreCuenta]</Text>
                        <Text fontSize="xs" color="gray.600">
                          [TipoDeCuenta]
                        </Text>
                      </VStack> */}

                      {/* Quitar el chevron si no es necesario */}
                      {/* <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown color="white" />
                      </Box> */}
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue("white", "gray.900")}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
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
          </Flex>

          <Box as="main" p="4">
            {/* Add content here, remove div below  */}
            {children}
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

// Barra de navegación de la siguiente página. Se esta usando chakra UI para la construcción en interacción visual del usuario
// https://choc-ui.com/docs/application-shells/sidebar-layouts

// Nada más se modifico algunas líneas de codigo para hacer el estilo
// -CsarChvz
