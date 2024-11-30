import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/Orders");
        console.log("Response structure:", response.data); // Log the structure of the data
        setOrders(response.data); // Set the array directly
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col mx-5 justify-center my-3">
      <h1 className="text-3xl text-bold">Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-3 my-2  flex flex-wrap gap-4"
          >
            <h2>Status: {order.status}</h2>
            <p>Order ID: {order._id}</p>
            <p>Payment ID: {order.razorpay_payment_id}</p>
            <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Username: {order.orderBy?.fullName || "N/A"}</p>{" "}
            {/* Show fullName */}
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Orders;
