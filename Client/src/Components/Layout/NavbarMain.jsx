import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaRegUserCircle } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BsBox, BsCart, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserLoginModal from "../Login/UserLoginModal";
import UserRegisterModal from "../Register/UserRegisterModal";
import { toastProps } from "../../constant/constants";

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
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const toast = useToast();

  const handleLogout = () => {
    setToken(localStorage.removeItem("token"));
    toast({
      ...toastProps,
      title: "Logged Out.",
    });
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
        fontSize="12px"
        fontWeight={400}
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
        top={-1}
        bg={"#e40046"}
        px={4}
        pl={{ base: "5px", sm: "10px", md: "20px", lg: "30px", xl: "40px" }}
        pr={{ base: "5px", sm: "10px", md: "20px", lg: "50px", xl: "60px" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            variant="unstyled"
            color="white"
            size={"md"}
            icon={showHam ? <CloseIcon /> : <HamburgerIcon fontSize={"25px"} />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={() => setShowHam(!showHam)}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
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
            </Link>
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
                <Flex
                  gap={"2"}
                  alignItems="center"
                  fontSize="14px"
                  color={"#fff"}
                  display={{ base: "none", lg: "flex" }}
                ></Flex>
              </MenuButton>
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
                {/* <HStack as={"nav"} spacing={4}>
                  <Flex gap={"2"}>
                    <Box color={"white"} mt="6px" fontSize="20px"> */}
                <FaRegUserCircle fontSize={"20px"} color={"#fff"} />
                {/* </Box>
                  </Flex>
                </HStack> */}
                {/* <Avatar size={"sm"} src={"./Images/projectlogo.png"} /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/myorders">
                    <Flex justify="center" align={"center"} gap="10px">
                      <BsBox fontSize={"16px"} />
                      <Text fontSize="14px">Your Orders</Text>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/">
                    <Flex justify="center" align={"center"} gap="10px">
                      <BsHeart fontSize={"16px"} />
                      <Text fontSize="14px">Wishlist</Text>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/cart">
                    <Flex justify="center" align={"center"} gap="10px">
                      <BsCart fontSize={"16px"} />
                      <Text fontSize="14px">Cart</Text>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/seller/register">
                    <Flex justify="center" align={"center"} gap="10px">
                      <RiAdminLine fontSize={"16px"} />
                      <Text fontSize="14px">Become A Seller</Text>
                    </Flex>
                  </Link>
                </MenuItem>

                <MenuDivider />

                {!token ? (
                  <>
                    <MenuItem>
                      <UserRegisterModal />
                    </MenuItem>
                    <MenuItem>
                      <UserLoginModal />
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    <Button
                      bgColor="crimson"
                      colorScheme={"red"}
                      textDecoration="none"
                      onClick={handleLogout}
                      w={"full"}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                )}
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
