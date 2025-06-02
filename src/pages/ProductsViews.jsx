import React from "react";
import ProductView from "../components/ProductView";
import Breadcrumb from "../components/Breadcrumb";

const ProductsViews = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <ProductView />
      </div>
    </>
  );
};

export default ProductsViews;
