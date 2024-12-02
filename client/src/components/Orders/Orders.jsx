import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [statuses] = useState([
    "Pending",
    "Shipped",
    "On Delivery",
    "Delivered",
  ]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getData();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`/api/orders/${orderId}`, {
        status: newStatus,
      });

      console.log("Status updated:", response.data);

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      alert("Order status updated successfully!");
    } catch (error) {
      console.error(
        "Error updating order status:",
        error.response?.data || error.message
      );
      alert("Failed to update order status. Please try again.");
    }
  };

  return (
    <div className="flex flex-col mx-5 justify-center my-3">
      <h1 className="text-3xl font-bold">Orders</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div className="flex items-center gap-4">
            {index + 1}
            <div
              key={order._id}
              className="border p-3 my-2 flex flex-wrap gap-4 flex-1"
            >
              <h2>
                Status:{" "}
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="border px-2 py-1 rounded"
                >
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </h2>
              <p>Order ID: {order._id}</p>
              <p>Payment ID: {order.razorpay_payment_id}</p>
              <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Orders;
