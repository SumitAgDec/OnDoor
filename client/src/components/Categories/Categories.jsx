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
      <div className="my-6 px-44">
        <input
          className="form-control bg-bgCustomBlue rounded-full placeholder-white"
          type="text"
          name="productName"
          placeholder="Search Item..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {searchItem ? (
        <>
          <div
            className={`w-full px-44 ${searchItem.length > 0 ? "" : "hidden"}`}
          >
            <h1 className={`text-3xl ${searchItem.length > 0 ? "" : "hidden"}`}>
              Search Item
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
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
        </>
      ) : (
        ""
      )}
      <div>
        <div className="w-full px-44">
          <h1 className="text-3xl ">Electornics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
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

        <div className="w-full px-44">
          <h1 className="text-3xl ">Furniture</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
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

        <div className="w-full px-44">
          <h1 className="text-3xl ">Clothing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
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

        <div className="w-full px-44">
          <h1 className="text-3xl ">Grocery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
            {products
              .filter((item) => item.productType === "grocery")
              .map((item) => (
                <Card
                  productId={item._id}
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
    </>
  );
}

export default Categories;
