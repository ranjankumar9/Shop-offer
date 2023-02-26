import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastProps } from "../../constant/constants";

const SellerRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    seller_name: "",
    email: "",
    pass: "",
    shop_name: "",
    gst_number: "",
    location: "",
  });
  console.log(userInput);

  const toast = useToast();
  const { seller_name, email, pass, shop_name, gst_number, location } =
    userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSellerRegister = async () => {
    try {
      const res = await axios.post(
        "https://unusual-cyan-cygnet.cyclic.app/seller/register",
        userInput
      );
      toast({
        ...toastProps,
        title: res.data.msg,
      });
      navigate("/seller/login");
      // console.log(res);
    } catch (error) {
      console.log(error);
      toast({
        title: error.message,
        status: "error",
      });
    }

    setUserInput({
      seller_name: "",
      email: "",
      pass: "",
      shop_name: "",
      gst_number: "",
      location: "",
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register
          </Heading>
          <Text fontSize={"sm"} color={"gray.600"}>
            Become A Seller Now
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Seller Name</FormLabel>
                  <Input
                    type="text"
                    name="seller_name"
                    value={seller_name}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Shop Name</FormLabel>
                  <Input
                    type="text"
                    name="shop_name"
                    value={shop_name}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="pass"
                  value={pass}
                  onChange={handleInputChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>GST No.</FormLabel>
              <Input
                type="text"
                name="gst_number"
                value={gst_number}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                name="location"
                value={location}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSellerRegister}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a Seller?{" "}
                <Link color={"blue.400"} href="/seller/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SellerRegisterForm;
