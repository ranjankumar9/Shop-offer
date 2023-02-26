import {
  Avatar,
  FormControl,
  FormLabel,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "@chakra-ui/react";
import "../admin.css";
const AdminProfile = () => {
  return (
    <Container
      centerContent="center"
      py="80px"
      // className="admin-profile-container"
      border="1px solid gray"
      borderRadius="10px"
      bgColor="gray.100"
    >
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://avatars.githubusercontent.?v="
            bgColor="#dedede"
          />
        </WrapItem>
      </Wrap>
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input type="text" variant="flushed" />
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
