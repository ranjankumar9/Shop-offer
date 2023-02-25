import {
  Link,
  LinkOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { TbEdit } from "react-icons/tb";

const UpdateProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userInput, setUserInput] = useState({
    type: "",
    category: "",
    product_image: "",
    product_title: "",
    mrp: "",
    offer_price: "",
    product_discount: "",
    product_rating_count: "",
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
  } = userInput;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleUpdateProduct = async () => {
    // console.log(userInput);
    try {
      const res = await axios.post(
        "http://localhost:4500/seller/update",
        userInput
      );
      toast({
        title: "Product Updated.",
        description: "Product Updated to Database.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "Failed to Update Product.",
        description: "Failed to Updated to Database.",
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
    <>
      <Link textDecoration="none" onClick={onOpen}>
        <TbEdit fontSize="25px" color="#000" />
      </Link>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
              {/* <Input
                type="text"
                placeholder="Enter seller ID "
                name="sellerId"
                value={sellerId}
                onChange={handleInputChange}
              /> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleUpdateProduct}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProduct;
