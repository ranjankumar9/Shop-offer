
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";


const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart)
  
  return (
    <div>
        <h3>Shopping Cart</h3>
      {cart.length>0 && cart?.map((item) => (
        <CartItem
          id={item._id}
          image={item.product_image}
          title={item.title}
          price={item.mrp}
          quantity={item.quantity}
          discount={item.discount}
        />
      ))}
    </div>
  );
};




export default CartPage;
