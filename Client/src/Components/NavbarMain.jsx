import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import snaplogo from "../Images/snaplogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import UserRegisterModal from "./Register/UserRegisterModal";
import UserLoginModal from "./Login/UserLoginModal";

const dropLinks = ["Men", "Women", "Kids", "Home & Kitchen", "Health Products"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavbarMain() {
  const [showHam, setShowHam] = useState(false);

  const handleCart = () => {
    console.log("aji");
  };

  return (
    <>
      <Box
        bg={"#c6003d"}
        height={"30px"}
        justifyContent={"space-between"}
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
        fontSize="15px"
        p={1}
        pl={{ base: "5px", sm: "10px", md: "20px", lg: "30px", xl: "45px" }}
        pr={{ base: "5px", sm: "10px", md: "20px", lg: "50px", xl: "60px" }}
      >
        <Flex>
          <Text color={"white"}>Brand Waali Quality, Bazaar Waali Deal!</Text>
        </Flex>
        <Flex color={"white"} gap="10px">
          <Link>Impact@Snapdeal </Link>
          <Link>Gift Cards </Link>
          <Link>Help Center </Link>
          <Link> Sell On Snapdeal </Link>
          <Link> Download App</Link>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        position={"sticky"}
        zIndex={999}
        top={0}
        bg={"#e40046"}
        px={4}
        pl={{ base: "5px", sm: "10px", md: "20px", lg: "30px", xl: "40px" }}
        pr={{ base: "5px", sm: "10px", md: "20px", lg: "50px", xl: "60px" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={showHam ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={() => setShowHam(!showHam)}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                display={{ sm: "center", md: "center", lg: "center" }}
                boxSize="60px"
                width={"200px"}
                objectFit="cover"
                src={
                  "https://www.logo.wine/a/logo/Snapdeal/Snapdeal-White-Dark-Background-Logo.wine.svg"
                }
              />
            </Box>
            {/* <Flex gap={"100px"} display={{ base: "none", md: "flex" }}> */}
            {/* <Input width={"500px"} display={{ base: "none", md: "flex" }} /> */}
            <InputGroup
              size="sm"
              placeholder="Search Products and Brands"
              display={{ base: "none", md: "flex" }}
            >
              <Input
                paddingLeft={5}
                border={0}
                bg="white"
                width={{
                  xl: "700px",
                  lg: "500px",
                  md: "400px",
                  sm: "none",
                  base: "none",
                }}
                borderRadius="10px"
                placeholder="Search products & Brands"
              />

              <InputRightAddon
                children="Search"
                color={"white"}
                bg="black "
                cursor={"pointer"}
              />
            </InputGroup>
            {/* <Box>Cart</Box> */}
            {/* </Flex> */}

            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {dropLinks.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", lg: "flex" }}
                >
                  <Flex gap={"2"}>
                    <Box
                      color={"white"}
                      fontSize={{
                        xl: "25px",
                        lg: "16px",
                        md: "13px",
                        base: "10px",
                      }}
                      display={"flex "}
                      gap="10px"
                    >
                      Cart
                    </Box>
                    <Box
                      color={"white"}
                      mt="6px"
                      fontSize={{
                        xl: "25px",
                        lg: "16px",
                        md: "18px",
                        base: "16px",
                      }}
                    >
                      <BsFillCartFill />
                    </Box>
                  </Flex>
                </HStack>
                {/* <Avatar size={"sm"} src={"./Images/projectlogo.png"} /> */}
              </MenuButton>
              {/* <MenuList>
                <MenuItem>mens</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <HStack
                  as={"nav"}
                  spacing={4}
                  //   display={{ base: "flex", md: "flex" }}
                >
                  <Flex gap={"2"}>
                    <Box
                      color={"white"}
                      fontSize={{
                        xl: "25px",
                        lg: "16px",
                        md: "18px",
                        base: "16px",
                      }}
                      display={"flex "}
                      gap="10px"
                    >
                      SignIn
                    </Box>
                    <Box
                      color={"white"}
                      mt="6px"
                      fontSize={{
                        xl: "25px",
                        lg: "16px",
                        md: "13px",
                        base: "0",
                      }}
                      //   display={{ base: "none", md: "none" }}
                    >
                      <FaRegUserCircle />
                    </Box>
                  </Flex>
                </HStack>{" "}
                {/* <Avatar size={"sm"} src={"./Images/projectlogo.png"} /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>mens</MenuItem>
                <MenuItem>
                  <Link to="/seller/register">Become A Seller</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <UserRegisterModal />
                </MenuItem>

                <MenuItem>
                  <UserLoginModal />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {showHam ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {dropLinks.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
