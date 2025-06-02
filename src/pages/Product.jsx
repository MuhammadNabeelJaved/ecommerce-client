import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import productsData from "../data/productsData.js";

const products = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
      </div>
    </>
  );
};

export default products;
