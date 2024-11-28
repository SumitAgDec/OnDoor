import React from "react";
import { useLocation, Link } from "react-router-dom";
function ViewProduct() {
  const location = useLocation();

  const {
    productName,
    price = "0",
    productImage,
    productType = "Not Defined",
    productDescription,
  } = location.state || {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-16">
      <div>
        <img
          src={`http://localhost:5001${productImage}`}
          style={{ width: "300px!important" }}
          alt=""
        />
      </div>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-end w-full">
          <h3 className="text-4xl font-bold">{productName}</h3>
          <p className="text-xl">({productType})</p>
        </div>
        <div className="flex gap-1">
          <p>₹</p>
          <p className="text-2xl">{price}</p>
        </div>
        {productDescription}
        <div className="d-flex gap-4">
          <button type="button" className="btn btn-primary">
            <Link to="/">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
