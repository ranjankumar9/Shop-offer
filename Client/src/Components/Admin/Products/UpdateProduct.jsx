import { Link, Select, useDisclosure, useToast } from "@chakra-ui/react";
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
import { toastProps, categories, types } from "../../../constant/constants";

const UpdateProduct = ({
  product: {
    _id,
    type,
    category,
    product_image,
    product_title,
    mrp,
    offer_price,
    product_discount,
    product_rating_count,
  },
  getProducts,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productImage, setproductImage] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userInput, setUserInput] = useState({
    type,
    category,
    product_image,
    product_title,
    mrp,
    offer_price,
    product_discount,
    product_rating_count,
  });

  const toast = useToast();
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "product_image") setproductImage(e.target.value);
    else setUserInput({ ...userInput, [name]: value });
  };

  const handleUpdateProduct = async (id) => {
    try {
      const res = await axios.patch(
        `https://unusual-cyan-cygnet.cyclic.app/seller/update/${id}`,
        userInput
      );
      toast({
        ...toastProps,
        title: res.data.msg,
      });
      getProducts();
      onClose();
      // console.log(res);
    } catch (error) {
      toast({
        ...toastProps,
        title: error.message,
        status: "error",
      });
      console.log(error);
    }
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
                value={userInput.type}
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
                value={userInput.category}
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
                value={productImage}
                onChange={handleInputChange}
              />

              <Input
                type="text"
                placeholder="Enter Product Title"
                name="product_title"
                value={userInput.product_title}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Enter Product Market Retail Price"
                name="mrp"
                value={userInput.mrp}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Enter Product Offer Price"
                name="offer_price"
                value={userInput.offer_price}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Enter Product Discount %"
                name="product_discount"
                value={userInput.product_discount}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Enter Product Rating"
                name="product_rating_count"
                value={userInput.product_rating_count}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => handleUpdateProduct(_id)}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProduct;
