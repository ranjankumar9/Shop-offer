import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

import "./CartItem.css";

const CartItem = ({ id, image, title, price, discount, quantity,getcartdata}) => {
  const toast = useToast();
  let [queue, setQue] = useState(quantity);


  const handledec = () => {
    setQue(queue--);
  }

  const handleInc = () => {
    setQue(queue++)
  }

  const handleRemove = async() => {
    try {
      let res = await axios.delete(`https://unusual-cyan-cygnet.cyclic.app/user/delete/${id}`)
      getcartdata()
      toast({
        title: "CartItem",
        description: res.data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <strong>{queue*price}</strong>
          
        </p>
        <p>{discount}</p>
        <div className="cartItem__incrDec">
          <button onClick={handledec}>-</button>
          <p>{queue}</p>
          
          <button onClick={handleInc}>+</button>
        </div>
        <button
          className="cartItem-removeButton"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
  
    </div>
  );
};

export default CartItem;
