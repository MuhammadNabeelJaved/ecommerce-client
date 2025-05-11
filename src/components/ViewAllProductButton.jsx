import React from "react";

const ViewAllProductButton = ({ title }) => {
  return (
    <button className="bg-[#DB4444] mx-auto my-16 text-center hover:bg-[rgba(255,89,89,0.9)] transition-all delay-75 cursor-pointer rounded-[4px] text-white py-4 px-12">
      {title}
    </button>
  );
};

export default ViewAllProductButton;
