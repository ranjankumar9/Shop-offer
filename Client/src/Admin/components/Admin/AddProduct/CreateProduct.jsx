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
    type: "",
    category: "",
    file: "",
    title: "",
    description: "",
    price: "",
    quantity: "",
  });

  const types = ["mens", "womens", "home", "kids", "beauty"];
  const categories = {
    mens: ["bags", "clothing", "eyewear", "footwear", "sportswear"],
    womens: ["watches", "cluthes", "makeup", "fragrance", "clothing"],
    home: ["kitchen", "electronics", "adsfg", "ccs", "cccdd"],
  };
  // console.log(userInput);

  const toast = useToast();
  const { type, category, file, title, description, price, quantity } =
    userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleAddProduct = () => {
    console.log(userInput);

    toast({
      title: "Product Added.",
      description: "Product Added to Database.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setUserInput({
      type: "",
      category: "",
      file: "",
      title: "",
      description: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <VStack
      w={{ base: "90%", sm: "80%", md: "70%", lg: "70%" }}
      m="auto"
      className="create-product"
      gap="40px"
    >
      <Heading as="h2" size="xl">
        Add Product
      </Heading>
      <FormControl className="form">
        {/* <FormLabel>Select Category:</FormLabel> */}
        <Select
          placeholder="Select Type"
          name="type"
          value={type}
          onChange={handleInputChange}
        >
          {/* <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option> */}
          {types.map((typ) => {
            return (
              <option key={typ} value={typ}>
                {typ}
              </option>
            );
          })}
        </Select>
        <Select
          placeholder="Select Category"
          name="category"
          value={category}
          onChange={handleInputChange}
        >
          {type &&
            categories[type].map((catgry) => {
              return (
                <option key={catgry} value={catgry}>
                  {catgry}
                </option>
              );
            })}
          {/* <option value="mens">mens</option>
          <option value="womens">womens</option>
          <option value="kids">kids</option> */}
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
        {/* <Textarea
          placeholder="Enter Product Description"
          name="description"
          value={description}
          onChange={handleInputChange}
        /> */}
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
