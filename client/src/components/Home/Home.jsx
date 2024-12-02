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
      <div className="w-full px-44 mb-6 mt-8">
        <div className="container mx-auto px-4 space-y-16">
          {/* Our Vision Section */}
          <section className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
              <p className="text-gray-600">
                Welcome to our e-commerce platform, where quality meets
                convenience. Our mission is to provide a seamless online
                shopping experience for customers looking for a diverse range of
                products. From electronics to groceries, we have curated a
                selection of items that cater to every need. Our team is
                committed to bringing the best deals and customer service,
                ensuring that every purchase is a pleasant experience. With fast
                shipping, secure payments, and round-the-clock support, we aim
                to be your trusted partner in all your shopping needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="../../public/our-vision.jpg"
                height={"400px"}
                alt="Our Vision"
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* About Us Section */}
          <section className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="../../public/about-us-1.jpg"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-gray-600">
                At our core, we believe in revolutionizing the way people shop.
                Our vision is to create a sustainable e-commerce ecosystem where
                both customers and sellers thrive. By leveraging advanced
                technologies and innovative strategies, we aim to reduce
                environmental impact while enhancing customer satisfaction. We
                see a future where every product is accessible to everyone, no
                matter where they are. Together, let’s build a community that
                values trust, transparency, and quality above all else.
              </p>
            </div>
          </section>
        </div>

        <div className="pb-12 pt-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Latest Added
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {products.slice(0, 3).map((item) => (
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
    </div>
  );
}

export default Home;
