import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

import "./CartItem.css";

const Orderitem = ({ id, image, title, price, discount,quantity}) => {

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <strong>{price}</strong>
          
        </p>
        <p>{discount}</p>
      </div>
  
    </div>
  );
};

export default Orderitem;
