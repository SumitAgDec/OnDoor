import React from "react";
import { useLocation, Link } from "react-router-dom";
function ViewProduct() {
  const location = useLocation();

  const {
    productName,
    price = "0",
    productImage,
    productType = "Not Defined",
  } = location.state || {};
  return (
    <div>
      <div>
        <img src={`http://localhost:5001${productImage}`} alt="" />
      </div>
      <div className=" flex justify-between items-center">
        <h3>{productName}</h3>
        <p className="text-sm">({productType})</p>
      </div>
      <div>
        <p>Rs {price}</p>
        <div className="d-flex gap-4">
          <button type="button" className="read_more_btn">
            <Link to="/">Add to cart</Link>
          </button>
          <button type="button" className="read_more_btn">
            <Link to="/">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
