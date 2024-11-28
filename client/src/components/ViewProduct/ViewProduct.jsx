import React from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
function ViewProduct() {
  const location = useLocation();

  const {
    productName,
    price,
    productImage,
    productType = "Not Defined",
    productDescription,
  } = location.state || {};

  const handlePayment = async (price) => {
    const {
      data: { order },
    } = await axios.post("/api/payment", { price });

    const {
      data: { key },
    } = await axios.get("/api/key");

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sumit verma",
      description: "Tutorial of RazorPay",
      image:
        "https://avatars.githubusercontent.com/u/162549367?s=400&u=7cfb9538802f05c1846154247eebb9b4aa87adba&v=4",
      order_id: order.id,
      callback_url: "http://localhost:5001/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9625781451",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

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
          <button
            onClick={() => handlePayment(price)}
            type="button"
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
