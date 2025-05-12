import React from "react";
import ProductsTitle from "./ProductsTitle";

const Categories = () => {
  const categories = [
    { title: "Phones", icon: "" },
    { title: "Computers", icon: "" },
    { title: "SmartWatch", icon: "" },
    { title: "Camera", icon: "" },
    { title: "HeadPhones", icon: "" },
    { title: "Gaming", icon: "" },
  ];
  const selectCategory = (category) => {
    // Handle category selection logic here
    console.log("Selected category:", category);
  };
  return (
    <>
      <ProductsTitle title="Browse By Category" topTitle="Categories" />
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {categories.map((category, index) => (
              <div
                onClick={() => selectCategory(category.title)}
                key={index}
                className="flex justify-center max-w-[170px] max-h-[145px] items-center px-14 py-6 border-[1px] border-[rgba(0, 0, 0, 0.30] rounded-[4px] cursor-pointer hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out"
              >
                <div className="flex justify-center flex-col gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_866_868)">
                      <path
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_866_868">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
