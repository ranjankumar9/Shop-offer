import React, { useRef, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { CiTrash, CiEdit } from "react-icons/ci";

const AllCategory = () => {
  const [newCategory, setNewCategory] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(newCategory);

  const toast = useToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const openUpdateModal = () => {
    onOpen();
  };

  const handleInputChange = (e) => {
    // console.log(newCategory);
    setNewCategory(e.target.value);
  };

  const handleUpdateCategory = () => {
    onClose();
    toast({
      title: "Category Updated.",
      description: "Category Updated to Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setNewCategory("");
  };

  const handleDeleteCategory = () => {
    toast({
      title: "Category Deleted.",
      description: "Category Deleted from Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <TableContainer w="70%">
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion </TableCaption> */}
        <Thead>
          <Tr>
            <Th>Category Name</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>mens</Td>
            <Td>
              <Button colorScheme="green" onClick={openUpdateModal}>
                <CiEdit fontSize="25px" fontWeight={800} />
              </Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Category</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>New Category</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder="Enter Your Category Name"
                        value={newCategory}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="green"
                      mr={3}
                      onClick={handleUpdateCategory}
                    >
                      Update Category
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Td>
            <Td>
              <Button colorScheme="red" onClick={handleDeleteCategory}>
                <CiTrash fontSize="25px" fontWeight={800} />
              </Button>
            </Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default AllCategory;
