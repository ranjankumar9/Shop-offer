import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

const Users = () => {
  const toast = useToast();
  const handleDeleteUser = () => {
    toast({
      title: "User Remove.",
      description: "User Removed from Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="red">
        {/* <TableCaption>Imperial to metric conversion </TableCaption> */}
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            {/* <Th>Edit</Th> */}
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            {/* <Td>
              <Button colorScheme="green">Edit</Button>
            </Td> */}
            <Td>
              <Button colorScheme="red" onClick={handleDeleteUser}>
                <BsTrash fontSize="25px" />
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

export default Users;
