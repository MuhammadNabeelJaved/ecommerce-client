import React from "react";
import playstation from "../assets/playstation.png";
import woman from "../assets/woman.png";

const FeaturedProduct = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-between mb-32 flex-wrap gap-8 ">
          <div className="w-[48%] h-[600px] flex items-end justify-center overflow-hidden bg-black text-white">
            <div className="flex justify-center relative z-10 left-[10%] p-8 items-start flex-col gap-4">
              <h1 className="text-2xl font-bold font-poppins">Playstation 5</h1>
              <p className="text-[14px] font-poppins">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="border-b-[1px] border-white cursor-pointer">
                Shop Now
              </button>
            </div>
            <img src={playstation} alt="" />
          </div>
          <div className="flex w-[48%] items-center justify-center flex-wrap gap-4">
            <div className="h-[284px] flex overflow-hidden items-end justify-center bg-black text-white">
              <div className="flex justify-center p-8 items-start flex-col gap-4">
                <h1 className="text-2xl font-bold font-poppins">
                  Women’s Collections
                </h1>
                <p className="text-[14px] font-poppins">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="border-b-[1px] border-white cursor-pointer">
                  Shop Now
                </button>
              </div>
              <img src={woman} alt="" />
            </div>
            <div className="flex gap-4 justify-between items-center">
              <div className="w-[270px] h-[284px] bg-black text-white"></div>
              <div className="w-[270px] h-[284px] bg-black text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
