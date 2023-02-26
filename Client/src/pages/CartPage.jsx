import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../Components/CartItem";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getcartdata = async () => {
    try {
      const res = await axios.get(
        "https://unusual-cyan-cygnet.cyclic.app/user/get"
      );
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePay = () => {
    navigate("/payment");
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
          </div>
        ))
      )}
      <Box>
        <Button onClick={handlePay}>Proceed To Pay</Button>
      </Box>
    </div>
  );
};

export default CartPage;
