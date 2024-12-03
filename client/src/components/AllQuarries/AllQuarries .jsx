import React, { useEffect, useState } from "react";
import axios from "axios";

function AllQuarries() {
  const [quarries, setQuarries] = useState([]);

  useEffect(() => {
    const getQuarries = async () => {
      try {
        const items = await axios.get("/query/getquery");
        setQuarries(items.data);
      } catch (error) {
        console.log("Error fetching queries:", error);
      }
    };
    getQuarries();
  }, []);

  return (
    <div className="px-5 py-4">
      <h1 className="text-2xl font-bold mb-3 text-gray-500">All Queries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quarries.map((quarry) => (
          <div
            key={quarry._id}
            className="Orders-list rounded-md shadow-md p-4 bg-white"
          >
            <h2 className="text-lg font-semibold">{quarry.fullName}</h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {quarry.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone Number:</strong> {quarry.phoneNumber}
            </p>
            <p className="text-gray-600">
              <strong>Order ID:</strong> {quarry.OrderId}
            </p>
            <p className="text-gray-800 mt-2">
              <strong>Description:</strong> {quarry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllQuarries;
