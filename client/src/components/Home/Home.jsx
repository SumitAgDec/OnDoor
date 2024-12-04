import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

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
      <div className="hero-section h-screen">
        <div class="relative flex items-center justify-center h-[calc(100vh-71px)] bg-gradient-to-b text-center">
          <div class="absolute top-1/2 transform -translate-y-1/2 w-100 ">
            <h1 class="text-5xl font-extrabold text-customBlue animate-bounce">
              Welcome to On<span className="text-gray-500">Door!</span>
            </h1>
            <p class="mt-4 text-lg text-gray-700 font-semibold">
              Your one-stop shop for everything you need. Fast delivery,
              exclusive offers, and more!
            </p>
            <Link to="/categories">
              <button class="mt-6 px-6 py-3 bg-customBlue text-white rounded-lg shadow-lg hover:bg-lightCustomBlue focus:ring-4 focus:ring-blue-300 transition-all">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-44 mb-6 mt-8">
        <div className="container mx-auto px-4 space-y-16">
          {/* Our Vision Section */}
          <section className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                About Us
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
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
            <div className="w-full lg:w-1/2">
              <img
                src="../../about-us-1.jpg"
                alt="Our Vision"
                className="w-full h-auto max-h-[400px] rounded-lg shadow-md object-cover"
              />
            </div>
          </section>

          {/* About Us Section */}
          <section className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <img
                src="../../our-vision.jpg"
                alt="About Us"
                className="w-full h-auto max-h-[400px] rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Latest Added
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0, 3).map((item) => (
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
    </div>
  );
}

export default Home;
