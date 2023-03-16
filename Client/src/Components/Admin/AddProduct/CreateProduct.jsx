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
    mrp: null,
    offer_price: null,
    product_discount: null,
    product_rating_count: null,
  });

  const types = ["mens", "womens", "home", "kids", "beauty"];
  const categories = {
    mens: ["bags", "clothing", "eyewear", "footwear", "sportswear"],
    womens: ["watches", "cluthes", "makeup", "fragrance", "clothing"],
    home: ["kitchen", "electronics", "adsfg", "ccs", "cccdd"],
  };
  // console.log(userInput);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

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
  } = userInput;
  console.log({ product_image });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleAddProduct = async () => {
    console.log(userInput);

    try {
      const res = await axios.post(
        "https://unusual-cyan-cygnet.cyclic.app/seller/post",
        userInput
      );

      // const res = await axios.post("http://localhost:4500/seller/post", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     authorization: localStorage.getItem("token"),
      //   },
      //   userInput,
      // });
      toast({
        title: res.data.msg,
        description: res.data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "Failed to Add Product.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }

    // setUserInput({
    //   type: "",
    //   category: "",
    //   product_image: "",
    //   product_title: "",
    //   mrp: "",
    //   offer_price: "",
    //   product_discount: "",
    //   product_rating_count: "",
    // });
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
        <Select
          placeholder="Select Type"
          name="type"
          value={type}
          onChange={handleInputChange}
        >
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
        </Select>

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
          type="number"
          placeholder="Enter Product Market Retail Price"
          name="mrp"
          value={mrp}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          placeholder="Enter Product Offer Price"
          name="offer_price"
          value={offer_price}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          placeholder="Enter Product Discount %"
          name="product_discount"
          value={product_discount}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          placeholder="Enter Product Rating"
          name="product_rating_count"
          value={product_rating_count}
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
