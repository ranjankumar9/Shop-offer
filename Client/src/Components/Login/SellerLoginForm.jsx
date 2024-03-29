import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { toastProps } from "../../constant/constants";
import { useNavigate } from "react-router-dom";

const SellerLoginForm = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();
  const toast = useToast();
  const { email, pass } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSellerLogin = async () => {
    console.log(userInput);

    try {
      const res = await axios.post(
        "https://unusual-cyan-cygnet.cyclic.app/seller/login",
        userInput
      );
      if (res.data.token) {
        toast({
          ...toastProps,
          title: res.data.msg,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/admin/create-product");
      } else {
        toast({
          ...toastProps,
          title: res.data.msg,
          status: "error",
        });
      }
    } catch (error) {
      toast({
        ...toastProps,
        title: error.message,
        status: "error",
      });
    }

    setUserInput({
      email: "",
      pass: "",
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="400px">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
          <Text fontSize={"sm"} color={"gray.600"}>
            Not a Seller?
            <Link href="/seller/register">Become a Seller Now.</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="pass"
                value={pass}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSellerLogin}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SellerLoginForm;
