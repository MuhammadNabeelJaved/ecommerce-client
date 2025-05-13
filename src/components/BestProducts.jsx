import React from "react";
import Product from "../pages/Product";
import ProductsTitle from "./ProductsTitle";
import productsData from "../data/productsData.js";

const BestProducts = () => {
  return (
    <>
      <ProductsTitle
        title="Best Selling Products"
        topTitle="This Month"
        productsData={productsData}
      />
    </>
  );
};

export default BestProducts;
