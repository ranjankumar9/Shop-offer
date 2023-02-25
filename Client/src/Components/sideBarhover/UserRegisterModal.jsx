import { Link, LinkOverlay, useDisclosure, useToast } from "@chakra-ui/react";
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
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

const UserRegisterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
  });
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toast = useToast();
  const { name, email, mobile, pass } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleUserRegister = async () => {
    console.log(userInput);
    onClose();
    try {
      const res = await axios.post(
        "http://localhost:4500/user/register",
        userInput
      );
      toast({
        title: res.data.msg,
        description: res.data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "User Registration Failed.",
        description: "Failed to Add Product to Database.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }

    setUserInput({
      name: "",
      email: "",
      mobile: "",
      pass: "",
    });
  };

  return (
    <>
      <Link textDecoration="none" onClick={onOpen}>
        Register
      </Link>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl className="form">
              <Input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <Input
                type="tel"
                placeholder="Enter Your Mobile No."
                name="mobile"
                value={mobile}
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
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserRegisterModal;
