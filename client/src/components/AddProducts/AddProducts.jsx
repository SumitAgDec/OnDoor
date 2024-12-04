import React from "react";
import axios from "axios";
import { useState } from "react";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setproductImage] = useState(null);
  const [productType, setProductType] = useState("");
  const [productDescription, setproductDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("productImage", productImage);
    formData.append("productType", productType);
    formData.append("productDescription", productDescription);

    try {
      await axios.post("/api/add-products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProductName("");
      setPrice("");
      setproductImage(null);
      setProductType("");
      setproductDescription("");
      console.log("product created successfully");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full p-5 gap-7 bg-veryLightCustomBlue">
      <h1 className="text-3xl font-bold text-gray-500">Add Products</h1>
      <form
        className="w-full"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              className="form-control"
              type="text"
              name="productName"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </div>
          <div className="cols-span-12 mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Image
            </label>
            <input
              className="form-control"
              type="file"
              name="productImage"
              onChange={(e) => setproductImage(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productType" className="form-label">
              Product Type
            </label>
            <select
              className="form-select"
              name="productType"
              onChange={(e) => setProductType(e.target.value)}
              value={productType}
              id=""
            >
              <option value="">Select Product Type</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="grocery">Grocery</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control h-[200px]"
            type="text"
            name="productDescription"
            value={productDescription}
            onChange={(e) => setproductDescription(e.target.value)}
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

export default AddProducts;
