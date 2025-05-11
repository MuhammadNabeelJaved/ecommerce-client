import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

const ProductsTitle = ({
  title,
  topTitle,
  offer,
  tagline,
  category,
  timer,
  percent,
  productsData,
}) => {
  const [products, setProducts] = useState([]);
  const [arrowState, setArrowState] = useState("");

  console.log(arrowState);

  return (
    <>
      <div className="w-full font-poppins max-w-full mt-10 mb-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center flex-wrap justify-between gap-5 md:gap-28 w-full">
          <div className="flex items-center flex-wrap justify-start gap-5 md:gap-20">
            <div className="flex items-start flex-col justify-start gap-5">
              <div className="flex items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="40"
                  viewBox="0 0 20 40"
                  fill="none"
                >
                  <rect width="20" height="40" rx="4" fill="#DB4444" />
                </svg>
                <p className="text-[#DB4444] font-poppins font-[600]">
                  {topTitle}
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold font-poppins tracking-[1.44px]">
                  {title}
                </h2>
                <h2>{percent}</h2>
                <p className="text-[#B7B7B7] text-[16px] font-poppins font-[400]">
                  {tagline}
                </p>
              </div>
            </div>
            {timer && (
              <div className="text-[#000] text-2xl md:text-4xl font-poppins font-[700] tracking-[1.28px] flex gap-5 items-end">
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Days</span>
                  <span>30</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Hours</span>
                  <span>30</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Minutes</span>
                  <span>30</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Seconds</span>
                  <span>30</span>
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-start gap-2">
            <svg
              onClick={() => setArrowState("left")}
              className="cursor-pointer"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              onClick={() => setArrowState("right")}
              className="cursor-pointer"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {productsData && (
        <ProductCard
          productsData={productsData}
          arrowState={arrowState}
          category={category}
        />
      )}
    </>
  );
};

export default ProductsTitle;
