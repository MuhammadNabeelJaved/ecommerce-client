import React from "react";
import playstation from "../assets/playstation.png";
import woman from "../assets/woman.png";

const FeaturedProduct = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto mb-72 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-between flex-wrap gap-8">
          <div className="w-[50%] h-[600px] flex items-end justify-center bg-black text-white">
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
          <div className="flex items-center justify-center flex-wrap gap-8">
            <div className="h-[284px] flex items-end justify-center bg-black text-white">
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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
