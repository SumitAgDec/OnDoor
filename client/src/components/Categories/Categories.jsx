import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

function Categories() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(null);

  const handelSearch = () => {
    const filteredItems = products.filter(
      (item) => item.productName === search
    );
    useEffect(() => {
      setSearchItem(filteredItems);
    }, [search]);
  };
  handelSearch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/get-products");
        const items = response.data;
        setProducts(items);
      } catch (error) {
        console.log("Error in fetchProduct: ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="my-6 px-4 sm:px-8 lg:px-20 xl:px-44">
        <input
          className="form-control w-full bg-bgCustomBlue rounded-full placeholder-white text-sm md:text-base px-4 py-2 focus:outline-none"
          type="text"
          name="productName"
          placeholder="Search Item..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {searchItem ? (
        <div
          className={`w-full px-4 sm:px-8 lg:px-20 xl:px-44 ${
            searchItem.length > 0 ? "" : "hidden"
          }`}
        >
          <h1
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              searchItem.length > 0 ? "" : "hidden"
            }`}
          >
            Search Item
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3">
            {searchItem.map((item) => (
              <Card
                key={item._id}
                productId={item._id}
                productName={item.productName}
                price={item.price}
                productImage={item.productImage}
                productType={item.productType}
                productDescription={item.productDescription}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-44">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Electronics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3">
            {products
              .filter((item) => item.productType === "electronics")
              .map((item) => (
                <Card
                  key={item._id}
                  productId={item._id}
                  productName={item.productName}
                  price={item.price}
                  productImage={item.productImage}
                  productType={item.productType}
                  productDescription={item.productDescription}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-44">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Furniture</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3">
            {products
              .filter((item) => item.productType === "furniture")
              .map((item) => (
                <Card
                  key={item._id}
                  productId={item._id}
                  productName={item.productName}
                  price={item.price}
                  productImage={item.productImage}
                  productType={item.productType}
                  productDescription={item.productDescription}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-44">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Clothing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3">
            {products
              .filter((item) => item.productType === "clothing")
              .map((item) => (
                <Card
                  key={item._id}
                  productId={item._id}
                  productName={item.productName}
                  price={item.price}
                  productImage={item.productImage}
                  productType={item.productType}
                  productDescription={item.productDescription}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-44">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Grocery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3">
            {products
              .filter((item) => item.productType === "grocery")
              .map((item) => (
                <Card
                  key={item._id}
                  productId={item._id}
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
    </>
  );
}

export default Categories;
