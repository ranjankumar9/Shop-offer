import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../Components/CartItem";
import { Box, Button, Heading } from "@chakra-ui/react";

const CartPage = () => {
  const [data, setData] = useState([]);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getcartdata = async () => {
    try {
      const res = await axios.get("http://localhost:4500/user/get");
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePay = () => {
    window.open("/payment");
  };

  useEffect(() => {
    getcartdata();
  }, []);
  return (
    <div>
      {data.length == 0 ? (
        <Box>
          <Heading>Cart Is Empty</Heading>
          <Button>0/0</Button>
        </Box>
      ) : (
        data?.map((item) => (
          <div key={item._id}>
            <CartItem
              getcartdata={getcartdata}
              key={item._id}
              id={item._id}
              image={item.product_image}
              title={item.product_title}
              price={item.offer_price}
              quantity={item.quantity}
            />
            <Box>
              <Button onClick={handlePay}>Proceed To Pay</Button>
            </Box>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
