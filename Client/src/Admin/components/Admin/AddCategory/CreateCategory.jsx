import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AllCategory from "./AllCategory";

const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const toast = useToast();
  const handleAddCategory = () => {
    // console.log(category);
    toast({
      title: "Category Added.",
      description: "Category Added to Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setCategory("");
  };
  return (
    <VStack gap="40px">
      <Heading as="h2" size="xl">
        Add Category
      </Heading>
      <Flex w="70%" align="center" justify="center" gap="10px">
        <Input
          variant="flushed"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button borderRadius="5px" size="md" onClick={handleAddCategory}>
          Add Category
        </Button>
      </Flex>
      <AllCategory />
    </VStack>
  );
};

export default CreateCategory;
