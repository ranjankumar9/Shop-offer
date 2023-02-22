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
} from "@chakra-ui/react";

import React from "react";

const Users = () => {
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
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Gaurav</Td>
            <Td>Gaurav123</Td>
            <Td>gaurav@gmail.com</Td>
            <Td>82356476657</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
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
