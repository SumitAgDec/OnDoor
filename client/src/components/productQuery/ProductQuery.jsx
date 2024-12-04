import React, { useState } from "react";
import axios from "axios";

function ProductQuery() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OrderId, setOrderId] = useState("");
  const [description, setDescription] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      phoneNumber,
      OrderId,
      description,
    };

    try {
      await axios.post("/query", formData);
      alert("Query submitted successfully");
      console.log("Product Created Successfully");
      setFullName("");
      setEmail("");
      setOrderId("");
      setPhoneNumber("");
      setDescription("");
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div className="flex flex-col  w-full px-5 py-4 gap-4 bg-veryLightCustomBlue">
      <h1 className="text-3xl font-bold text-gray-500">Add Query</h1>
      <form onSubmit={handelSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              className="form-control"
              type="text"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="cols-span-12 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="OrderId" className="form-label">
              Order Id
            </label>
            <input
              className="form-control"
              type="text"
              name="OrderId"
              onChange={(e) => setOrderId(e.target.value)}
              value={OrderId}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control h-[200px]"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary bg-customBlue border-none hover:bg-lightCustomBlue"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductQuery;
