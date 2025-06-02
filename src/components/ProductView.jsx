import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsData from "../data/productsData.js"; // Adjust the import path as necessary

const ProductView = () => {
  const { id } = useParams();
  const [filterdProduct, setFilterdProduct] = useState({});

  console.log("Filtered Product:", filterdProduct);
  useEffect(() => {
    // You can fetch product details based on the id here
    // For example, you might want to fetch from an API or filter from productsData
    const product = productsData.find((product) => product.id === parseInt(id));
    if (product) {
      // console.log("Product found:", product);
      setFilterdProduct(product);
    } else {
      console.log("Product not found");
    }
  }, [id]);
  console.log("Product ID:", id);
  return (
    <>
      <div className="">ProductView</div>
    </>
  );
};

export default ProductView;
