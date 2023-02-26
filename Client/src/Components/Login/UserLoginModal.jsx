import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

const UserLoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userInput, setUserInput] = useState({
    email: "",
    pass: "",
  });
  

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toast = useToast();
  const { email, pass } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleUserRegister = async () => {
    console.log(userInput);
    onClose();
    try {
      const res = await axios.post(
        "http://localhost:4500/user/login",
        userInput
      );

      if (res.data.token) {
        toast({
          title: res.data.msg,
          description: res.data.msg,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        localStorage.setItem("token", res.data.token);
      } else {
        toast({
          title: "Login Failed.",
          description: res.data.msg,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }

      // console.log(res);
    } catch (error) {
      toast({
        title: "Login Failed.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setUserInput({
      email: "",
      pass: "",
    });
  };

  return (
    <>
      <Button
        bgColor="crimson"
        colorScheme={"red"}
        textDecoration="none"
        onClick={onOpen}
        w={"full"}
      >
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl className="form">
              <Input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                placeholder="Enter Your Password"
                name="pass"
                value={pass}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleUserRegister}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserLoginModal;
