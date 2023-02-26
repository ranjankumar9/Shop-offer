
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Orderitem from "../Components/Orderitem";


const MyOrders = () => {
  const [data,setData] = useState([])

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  
  const getcartdata = async() => {
    try {
      const res = await axios.get('http://localhost:4500/user/orders/get')
      console.log(res)
      setData(res.data)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getcartdata()
  },[])
  return (
    <div>
      { data?.map((item) => (
        <Orderitem
          getcartdata={getcartdata}
          key={item._id}
          id={item._id}
          image={item.product_image}
          title={item.product_title}
          price={item.offer_price}
          quantity={item.quantity}
          // discount={item.discount}
        />
      ))}

    </div>
  );
};

export default MyOrders;
