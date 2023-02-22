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
  Select,
} from "@chakra-ui/react";

import React from "react";

const Orders = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion </TableCaption> */}
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Status</Th>
            <Th>Buyer</Th>
            <Th>Date</Th>
            <Th>Payment</Th>
            <Th>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>
              <Select variant="unstyled">
                <option value="">Delivered</option>
                <option value="">Pending</option>
                <option value="">Canceled</option>
              </Select>
            </Td>
            <Td>Gaurav</Td>
            <Td>a few seconds ago</Td>
            <Td>Success</Td>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>
              <Select variant="unstyled">
                <option value="">Delivered</option>
                <option value="">Pending</option>
                <option value="">Canceled</option>
              </Select>
            </Td>
            <Td>Gaurav</Td>
            <Td>a few seconds ago</Td>
            <Td>Success</Td>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>
              <Select variant="unstyled">
                <option value="">Delivered</option>
                <option value="">Pending</option>
                <option value="">Canceled</option>
              </Select>
            </Td>
            <Td>Gaurav</Td>
            <Td>a few seconds ago</Td>
            <Td>Success</Td>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>
              <Select variant="unstyled">
                <option value="">Delivered</option>
                <option value="">Pending</option>
                <option value="">Canceled</option>
              </Select>
            </Td>
            <Td>Gaurav</Td>
            <Td>a few seconds ago</Td>
            <Td>Success</Td>
            <Td>5</Td>
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

export default Orders;
