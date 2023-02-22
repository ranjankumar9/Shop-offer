import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CreateProduct = () => {
  return (
    <VStack w="70%" m="auto" className="create-product" gap="40px">
      <Heading as="h2" size="xl">
        Add Product
      </Heading>
      <FormControl className="form">
        {/* <FormLabel>Select Category:</FormLabel> */}
        <Select placeholder="Select Category">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        {/* <FormLabel>Select Photo:</FormLabel> */}
        <Input type="file" placeholder="upload Image" />
        <Input type="text" placeholder="Enter Product Title" />
        <Textarea placeholder="Enter Product Description" />
        <Input type="number" placeholder="Enter Your Price" />
        <NumberInput max={50} min={10}>
          <NumberInputField placeholder="Enter Your Quantity" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button borderRadius="5px" size="md">
          Add Product
        </Button>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
    </VStack>
  );
};

export default CreateProduct;
