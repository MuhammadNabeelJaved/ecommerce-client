import React from "react";
import boomBox from "../assets/BOOMBOX.png";

const ProductHero = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto mb-8 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center font-poppins px-14 py-16 flex-wrap text-white bg-black justify-center gap-5 md:gap-28 w-full">
          <div className="flex flex-col items-start gap-8 w-1/2">
            <p className="text-[#0F6]">Categories</p>
            <h2 className="text-5xl text-white">
              Enhance Your Music Experience
            </h2>

            <div className="rounded-full w-16 h-16 flex-col bg-white text-black flex items-center justify-center">
              <p className="text-black font-poppins font-[600]">23</p>
              <p className="text-[11px] font-[400]">Hours</p>
            </div>

            <button className="bg-[#0F6] font-poppins text-center hover:bg-[rgba(89,255,139,0.98)] transition-all delay-75 cursor-pointer rounded-[4px] text-white py-4 px-12">
              Buy Now!
            </button>
          </div>
          <div className="">
            <img className="w-lg " src={boomBox} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHero;
