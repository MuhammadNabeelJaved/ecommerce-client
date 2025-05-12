import React from "react";
import ProductsTitle from "./ProductsTitle";
import phone from "../assets/Category-CellPhone.png";
import computer from "../assets/Category-Computer.png";
import gaming from "../assets/Category-Gamepad.png";
import camera from "../assets/Category-Camera.png";
import headphones from "../assets/Category-Headphone.png";
import SmartWatch from "../assets/Category-SmartWatch.png";

const Categories = () => {
  const categories = [
    { title: "Phones", icon: phone },
    { title: "Computers", icon: computer },
    { title: "SmartWatch", icon: SmartWatch },
    { title: "Camera", icon: camera },
    { title: "HeadPhones", icon: headphones },
    { title: "Gaming", icon: gaming },
  ];
  const selectCategory = (category) => {
    // Handle category selection logic here
    console.log("Selected category:", category);
  };
  return (
    <>
      <ProductsTitle title="Browse By Category" topTitle="Categories" />
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="py-20">
          <div className="flex justify-center items-center flex-wrap gap-8">
            {categories.map((category, index) => (
              <div
                onClick={() => selectCategory(category.title)}
                key={index}
                className="flex justify-center max-w-[170px] max-h-[145px] items-center px-14 py-6 border-[1px] border-[rgba(0, 0, 0, 0.30] rounded-[4px] cursor-pointer hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out"
              >
                <div className="flex justify-center flex-col gap-4 items-center">
                  <img className="w-[56px]" src={category.icon} alt="" />
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Categories;
