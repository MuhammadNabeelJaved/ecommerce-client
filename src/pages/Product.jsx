import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import productsData from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";
import { useParams } from "react-router";
import { AlertTriangle } from "lucide-react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  console.log("Category from params:", category);

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
      } else if (typeof productsData === "object") {
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

      // Filter products by category if specified
      if (category && category !== "all") {
        products = products.filter((product) => product.category === category);
      }
      // Set the products to state
      if (products.length === 0) {
        throw new Error("No products found for the specified category");
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-800 mb-1">
                  Error
                </h3>
                <p className="text-red-700 text-sm leading-relaxed">{error}</p>
              </div>
            </div>
          </div>
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
