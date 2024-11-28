import React from "react";
import { Link } from "react-router-dom";

function Card({
  productName,
  price = "0",
  productImage,
  productType = "Not Defined",
}) {
  return (
    <div>
      <div className="our_solution_category">
        <div className="solution_cards_box">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>
            <div className="so_top_icon">
              <img src={`http://localhost:5001${productImage}`} alt="" />
            </div>
            <div className="solu_title flex justify-between items-center">
              <h3>{productName}</h3>
              <p className="text-sm">({productType})</p>
            </div>
            <div className="solu_description">
              <p>Rs {price}</p>
              <button type="button" className="read_more_btn">
                <Link
                  to="/view-products"
                  state={{
                    productName,
                    price,
                    productImage,
                    productType,
                  }}
                >
                  View Product
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
