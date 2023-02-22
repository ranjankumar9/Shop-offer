import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "@chakra-ui/react";
import "./admin.css";
const AdminProfile = () => {
  return (
    <Container
      centerContent="center"
      py="80px"
      className="admin-profile-container"
      border="1px solid red"
    >
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://avatars.githubusercontent.com/u/107467642?v=4"
          />
        </WrapItem>
      </Wrap>
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input type="text" />
        <FormLabel>Username:</FormLabel>
        <Input type="text" />
        <FormLabel>Email:</FormLabel>
        <Input type="email" />
        <FormLabel>Phone No.</FormLabel>
        <Input type="tel" />
        {/* <Input type="submit" value="Update" /> */}
      </FormControl>
    </Container>
  );
};

export default AdminProfile;
