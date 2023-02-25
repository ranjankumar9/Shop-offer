import {
  Button,
  FormControl,
  Heading,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [userInput, setUserInput] = useState({
    type: "",
    category: "",
    product_image: "",
    product_title: "",
    mrp: "",
    offer_price: "",
    product_discount: "",
    product_rating_count: "",
    sellerId: "",
  });

  const types = ["mens", "womens", "home", "kids", "beauty"];
  const categories = {
    mens: ["bags", "clothing", "eyewear", "footwear", "sportswear"],
    womens: ["watches", "cluthes", "makeup", "fragrance", "clothing"],
    home: ["kitchen", "electronics", "adsfg", "ccs", "cccdd"],
  };
  // console.log(userInput);

  const toast = useToast();
  const {
    type,
    category,
    product_image,
    product_title,
    mrp,
    offer_price,
    product_discount,
    product_rating_count,
    sellerId,
  } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleAddProduct = async () => {
    console.log(userInput);
    try {
      const res = await axios.post(
        "http://localhost:4500/seller/post",
        userInput
      );
      toast({
        title: "Product Added.",
        description: "Product Added to Database.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "Failed to Add Product.",
        description: "Failed to Add Product to Database.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }

    setUserInput({
      type: "",
      category: "",
      product_image: "",
      product_title: "",
      mrp: "",
      offer_price: "",
      product_discount: "",
      product_rating_count: "",
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
          name="product_image"
          value={product_image}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Title"
          name="product_title"
          value={product_title}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Market Retail Price"
          name="mrp"
          value={mrp}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Offer Price"
          name="offer_price"
          value={offer_price}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Discount %"
          name="product_discount"
          value={product_discount}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter Product Rating"
          name="product_rating_count"
          value={product_rating_count}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Enter seller ID "
          name="sellerId"
          value={sellerId}
          onChange={handleInputChange}
        />

        <Button borderRadius="5px" size="md" onClick={handleAddProduct}>
          Add Product
        </Button>
      </FormControl>
    </VStack>
  );
};

export default CreateProduct;
