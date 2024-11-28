import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Orders() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("reference");
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h1 className="text-3xl text-bold">Order Successful</h1>
      <p>
        Payment id: <span>{paymentId}</span>
      </p>
    </div>
  );
}

export default Orders;
