import React, { useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { BsTrashFill } from "react-icons/bs";

import UpdateProduct from "./UpdateProduct";
import axios from "axios";

const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const toast = useToast();

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4500/seller/get");
      console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://unusual-cyan-cygnet.cyclic.app/seller/delete/${id}`);
      toast({
        title: "Product Deleted.",
        description: "Product Deleted from Database.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      getProducts();
    } catch (error) {
      // console.log(error);
      toast({
        title: "Failed to Delete Product.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  // const handleUpdateProduct = (id) => {
  //   // toast({
  //   //   title: "Product Updated.",
  //   //   description: "Product Updated from Database.",
  //   //   status: "success",
  //   //   duration: 5000,
  //   //   isClosable: true,
  //   // });
  // };
  return (
    <table className="table products-table">
      <thead>
        <tr>
          <th>ProductID</th>
          <th>Name</th>
          <th>MRP</th>
          <th>Offer Price</th>
          <th>Discount</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => {
          const { _id, product_title, mrp, offer_price, product_discount } =
            product;
          return (
            <tr key={_id}>
              <td data-label="ProductID">{_id}</td>
              <td data-label="Name">
                {product_title.length > 50
                  ? `${product_title.slice(0, 30)}...`
                  : product_title}
              </td>
              <td data-label="MRP">Rs {mrp}</td>
              <td data-label="Offer Price">Rs {offer_price}</td>
              <td data-label="Discount">{product_discount}%</td>
              <td data-label="Update">
                <Button variant={"unstyled"}>
                  <UpdateProduct product={product} getProducts={getProducts} />
                </Button>
              </td>
              <td data-label="Remove">
                <Button
                  variant={"unstyled"}
                  onClick={() => handleDeleteProduct(_id)}
                >
                  <BsTrashFill fontSize="25px" color="red" />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SellerProducts;
