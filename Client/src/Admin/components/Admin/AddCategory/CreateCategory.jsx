import { Box, Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import React from "react";
import AllCategory from "./AllCategory";

const CreateCategory = () => {
  return (
    <VStack gap="40px">
      <Heading as="h2" size="xl">
        Add Category
      </Heading>
      <Flex w="70%" align="center" justify="center" gap="10px">
        <Input variant="flushed" placeholder="Enter Category" />
        <Button borderRadius="5px" size="md">
          Add Category
        </Button>
      </Flex>
      <AllCategory />
    </VStack>
  );
};

export default CreateCategory;
