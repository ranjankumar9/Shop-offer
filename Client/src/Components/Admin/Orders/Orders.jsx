import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orderStatus, setOrderStatus] = useState("pending");
  // console.log(orderStatus);
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://unusual-cyan-cygnet.cyclic.app/user/orders/get"
      );
      console.log(res);
      setOrdersList(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Buyer</th>
          <th>Date</th>
          <th>Payment</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="#">1</td>
          <td data-label="Status">
            <select
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
          </td>
          <td data-label="Buyer">Gaurav</td>
          <td data-label="Date">a few seconds ago</td>
          <td data-label="Payment">Success</td>
          <td data-label="Quantity">5</td>
        </tr>
        <tr>
          <td data-label="#">1</td>
          <td data-label="Status">
            <select
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
          </td>
          <td data-label="Buyer">Gaurav</td>
          <td data-label="Date">a few seconds ago</td>
          <td data-label="Payment">Success</td>
          <td data-label="Quantity">5</td>
        </tr>
        <tr>
          <td data-label="#">1</td>
          <td data-label="Status">
            <select
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
          </td>
          <td data-label="Buyer">Gaurav</td>
          <td data-label="Date">a few seconds ago</td>
          <td data-label="Payment">Success</td>
          <td data-label="Quantity">5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;
