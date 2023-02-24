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
      title: "Seller Removed.",
      description: "Seller Removed from Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">Gaurav</td>
          <td data-label="Username">Gaurav123</td>
          <td data-label="Email">gaurasdfdsfv@gmail.com</td>
          <td data-label="Phone">878354889</td>
          <td data-label="Remove">
            <Button onClick={handleDeleteUser}>
              <BsTrash fontSize="25px" color="red" />
            </Button>
          </td>
        </tr>
        <tr>
          <td data-label="Name">Gaurav</td>
          <td data-label="Username">Gaurav123</td>
          <td data-label="Email">gaurav@gmail.com</td>
          <td data-label="Phone">878354889</td>
          <td data-label="Remove">
            <Button onClick={handleDeleteUser}>
              <BsTrash fontSize="25px" color="red" />
            </Button>
          </td>
        </tr>
        <tr>
          <td data-label="Name">Gaurav</td>
          <td data-label="Username">Gaurav123</td>
          <td data-label="Email">gaurav@gmail.com</td>
          <td data-label="Phone">878354889</td>
          <td data-label="Remove">
            <Button onClick={handleDeleteUser}>
              <BsTrash fontSize="25px" color="red" />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Users;
