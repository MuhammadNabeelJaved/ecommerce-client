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
  arrow,
}) => {
  const [products, setProducts] = useState([]);
  const [arrowState, setArrowState] = useState("");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Timer logic
  useEffect(() => {
    // Only run if timer prop is true
    if (!timer) return;
    
    // Set the end date (you can modify this to accept a dynamic end date)
    const endDate = new Date();
    // Add 7 days to current date for demo purposes
    endDate.setDate(endDate.getDate() + 7);
    
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = endDate - now;
      
      // If timer has ended
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    // Calculate initial time
    calculateTimeRemaining();
    
    // Set up interval to update every second
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [timer]);

  // Helper function to format time with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

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
                  <span>{formatTime(timeRemaining.days)}</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Hours</span>
                  <span>{formatTime(timeRemaining.hours)}</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Minutes</span>
                  <span>{formatTime(timeRemaining.minutes)}</span>
                </p>
                <span className="text-[#E07575]">:</span>
                <p className="flex items-start flex-col justify-center gap-2">
                  <span className="text-black text-[12px]">Seconds</span>
                  <span>{formatTime(timeRemaining.seconds)}</span>
                </p>
              </div>
            )}
          </div>
          {arrow && (
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
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