import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import productsData from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";

const products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const products = productsData.map((item) => item);
    setAllProducts(products);
  }, []);
  console.log(productsData.map((item) => item));
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <ProductCard ProductCards={allProducts} />
      </div>
    </>
  );
};

export default products;
