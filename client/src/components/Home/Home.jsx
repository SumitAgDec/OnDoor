import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import Card from "../Card/Card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/get-products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error in fetchProduct: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Carousel />
      <div className="w-full px-44">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7">
          {products.map((item) => (
            <Card
              key={item._id}
              productName={item.productName}
              price={item.price}
              productImage={item.productImage}
              productType={item.productType}
              productDescription={item.productDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
