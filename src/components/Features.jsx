import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: "",
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: "",
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
      icon: "",
    },
  ];
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-center flex-wrap gap-[88px]">
          <div className="flex items-center justify-center flex-wrap gap-6">
            <img src="" alt="" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-black text-[20px] font-[600] font-poppins">
                FREE AND FAST DELIVERY
              </h2>
              <p className="text-[14px] text-[#6F6F6F]">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
