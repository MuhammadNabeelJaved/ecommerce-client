import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsData from "../data/productsData.js";
import service from "../assets/service.jpg";
import ProductsTitle from "./ProductsTitle.jsx";

const ProductView = () => {
  const { id } = useParams();
  const [filterdProduct, setFilterdProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setselectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  console.log("relatedProducts", relatedProducts);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    const product = productsData.find((product) => product.id === parseInt(id));
    if (product) {
      setFilterdProduct(product);
    } else {
      console.log("Product not found");
    }
    if (filterdProduct.category) {
      const related = productsData.filter(
        (product) =>
          product.category === filterdProduct.category &&
          product.id !== filterdProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id, filterdProduct]);

  const selecSize = (size) => {
    setselectedSize(size);
  };

  return (
    <>
      <div className="flex flex-col my-[100px] lg:flex-row gap-8 p-4">
        {/* Left Section: Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
          <div className="flex gap-4 justify-between overflow-x-auto lg:flex-col">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] p-3 min-w-[80px] min-h-[80px] rounded flex justify-center items-center"
              >
                <img
                  className="w-[60px] h-auto"
                  src={filterdProduct.image}
                  alt={`Thumbnail ${i}`}
                />
              </div>
            ))}
          </div>

          <div className="flex-1 bg-[#F5F5F5] rounded flex items-center justify-center p-4">
            <img
              className="max-w-full max-h-[400px]"
              src={filterdProduct.image}
              alt=""
            />
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-semibold font-poppins">
              {filterdProduct.title?.replace(/-/g, " ")}
            </h1>
            <p className="text-[#FF0000] text-xl font-bold">
              ${filterdProduct.price}
            </p>
            <p className="text-sm text-gray-600">
              {filterdProduct.description}
            </p>
            <hr className="my-4" />
          </div>

          {/* Color & Size */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-lg font-medium">Color:</span>
              {filterdProduct.color?.map((color, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectedColor === color
                      ? "border-2 border-black p-[2px]"
                      : "border border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-lg font-medium">Size:</span>
              {filterdProduct.size?.map((size) => (
                <span
                  key={size}
                  onClick={() => selecSize(size)}
                  className={`w-8 h-8 flex justify-center items-center border border-black rounded cursor-pointer ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity + Buy Now */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                onClick={handleDecrease}
                className="w-11 h-11 cursor-pointer flex items-center justify-center text-xl border-r border-gray-300 p-2.5 bg-white hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-11 h-11 cursor-pointer flex items-center justify-center text-xl border-l border-gray-300 p-2.5 bg-[#E94F46] text-white hover:bg-[#d43d35]"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="px-12 py-2.5 bg-[#E94F46] text-white rounded font-medium cursor-pointer hover:bg-[#d43d35]">
              Buy Now
            </button>

            {/* Heart Icon */}
            <span className="p-2 border border-black rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* Service Banner */}
          <div>
            <img src={service} alt="Service Banner" />
          </div>
        </div>
      </div>
      <ProductsTitle topTitle="Related Item" productsData={relatedProducts} />
    </>
  );
};

export default ProductView;
