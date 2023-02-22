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

const AllCategory = () => {
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
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>womens</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>kids</Td>
            <Td>
              <Button colorScheme="green">Edit</Button>
            </Td>
            <Td>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
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

export default AllCategory;
