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
      <div className="flex justify-between gap-14 items-center">
        <div className="flex max-h-auto justify-center items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="bg-[#F5F5F5] items-center flex flex-col gap-4 justify-center p-6 rounded-[4px]">
              <img className="w-[120px]" src={filterdProduct.image} alt="" />
            </div>
            <div className="bg-[#F5F5F5] items-center flex flex-col justify-center p-6 rounded-[4px]">
              <img className="w-[120px]" src={filterdProduct.image} alt="" />
            </div>
            <div className="bg-[#F5F5F5] items-center flex flex-col justify-center p-6 rounded-[4px]">
              <img className="w-[120px]" src={filterdProduct.image} alt="" />
            </div>
            <div className="bg-[#F5F5F5] items-center flex flex-col justify-center p-6 rounded-[4px]">
              <img className="w-[120px]" src={filterdProduct.image} alt="" />
            </div>
            <div className="bg-[#F5F5F5] items-center flex flex-col justify-center p-6 rounded-[4px]">
              <img className="w-[120px]" src={filterdProduct.image} alt="" />
            </div>
          </div>

          <div className="flex bg-[#F5F5F5] px-[27px] py-[204px] justify-center items-center w-[500px] rounded-[4px]">
            <img className="w-[450px]" src={filterdProduct.image} alt="" />
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-poppins text-black text-2xl font-[600]">
              {filterdProduct.title.replace(/-/g, " ")}
            </h1>
            <p className="text-[#FF0000] text-[20px] font-bold">
              ${filterdProduct.price}
            </p>
            <p>{filterdProduct.description}</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
