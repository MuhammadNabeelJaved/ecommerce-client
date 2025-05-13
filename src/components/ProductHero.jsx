import React from "react";

const ProductHero = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center flex-wrap text-white bg-black justify-between gap-5 md:gap-28 w-full">
          <div></div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523278334708-0e3c02c02d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHero;
