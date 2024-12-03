import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
function ViewProduct() {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState("");

  const { currentProductId } = location.state || {};

  useEffect(() => {
    const getUserData = async () => {
      console.log(currentProductId);
      const response = await axios.get(
        `/api/view-products/${currentProductId}`
      );
      const data = response.data;
      setUserData(data);
      console.log(userData);
    };
    getUserData();
    const getData = JSON.parse(localStorage.getItem("user"));
    const name = getData.fullName;
    const email = getData.email;
    setUserName(name);
    setUserEmail(email);
  }, []);

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
      name: "OnDoor",
      description: "Tutorial of RazorPay",
      image:
        "https://avatars.githubusercontent.com/u/162549367?s=400&u=7cfb9538802f05c1846154247eebb9b4aa87adba&v=4",
      order_id: order.id,
      callback_url: "http://localhost:5001/api/paymentverification",
      prefill: {
        name: userName,
        email: userEmail,
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
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <img
            src={`http://localhost:5001${userData.productImage}`}
            style={{ width: "300px!important" }}
            alt=""
          />
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-end w-full">
            <h3 className="text-4xl font-bold">{userData.productName}</h3>
            <p className="text-xl">({userData.productType})</p>
          </div>

          <p>{userData.productDescription}</p>

          <div className="flex gap-1">
            <p>₹</p>
            <p className="text-2xl">{userData.price}</p>
          </div>
          <div className="d-flex gap-4">
            <button
              onClick={() => handlePayment(userData.price)}
              type="button"
              className="btn btn-primary bg-customBlue border-none hover:bg-lightCustomBlue"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
