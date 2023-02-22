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
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreateProduct = () => {
  const [userInput, setUserInput] = useState({
    category: "",
    file: "",
    title: "",
    description: "",
    price: "",
    quantity: "",
  });

  const toast = useToast();
  const { category, file, title, description, price, quantity } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleAddProduct = () => {
    // console.log(userInput);

    toast({
      title: "Product Added.",
      description: "Product Added to Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setUserInput({
      category: "",
      file: "",
      title: "",
      description: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <VStack w="70%" m="auto" className="create-product" gap="40px">
      <Heading as="h2" size="xl">
        Add Product
      </Heading>
      <FormControl className="form">
        {/* <FormLabel>Select Category:</FormLabel> */}
        <Select
          placeholder="Select Category"
          name="category"
          value={category}
          onChange={handleInputChange}
        >
          <option value="mens">mens</option>
          <option value="womens">womens</option>
          <option value="kids">kids</option>
        </Select>
        {/* <FormLabel>Select Photo:</FormLabel> */}
        <Input
          type="file"
          placeholder="upload Image"
          name="file"
          value={file}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Title"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder="Enter Product Description"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          placeholder="Enter Your Price"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <NumberInput max={50} min={10}>
          <NumberInputField
            placeholder="Enter Your Quantity"
            name="quantity"
            value={quantity}
            onChange={handleInputChange}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button borderRadius="5px" size="md" onClick={handleAddProduct}>
          Add Product
        </Button>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
    </VStack>
  );
};

export default CreateProduct;
