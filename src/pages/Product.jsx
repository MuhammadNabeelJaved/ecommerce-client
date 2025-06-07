import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import productsData from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Check if productsData exists and is iterable
      if (!productsData) {
        throw new Error("Products data is not available");
      }

      // Handle different data structures
      let products = [];
      
      if (Array.isArray(productsData)) {
        // If it's already an array
        products = productsData;
      } else if (typeof productsData === 'object') {
        // If it's an object with products array
        if (productsData.products && Array.isArray(productsData.products)) {
          products = productsData.products;
        } else {
          // If it's an object, convert to array
          products = Object.values(productsData);
        }
      } else {
        throw new Error("Products data is not in expected format");
      }

      setAllProducts(products);
      setLoading(false);
    } catch (err) {
      console.error("Error loading products:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  // Debug log
  console.log("productsData type:", typeof productsData);
  console.log("productsData:", productsData);
  console.log("allProducts:", allProducts);

  if (loading) {
    return (
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-center py-8">
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-center py-8">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <ProductCard productsData={allProducts} category="all" />
      </div>
    </>
  );
};

export default Products;