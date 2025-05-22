import React from "react";
import icon1 from "../assets/Services.png";
import icon2 from "../assets/Services1.png";
import icon3 from "../assets/Services2.png";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: icon1,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: icon2,
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
      icon: icon3,
    },
  ];
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center m-32 justify-center flex-wrap gap-[88px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center flex-col justify-center flex-wrap gap-6"
            >
              <img src={feature.icon} alt="" />
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-black text-[20px] font-[600] font-poppins">
                  {feature.title}
                </h2>
                <p className="text-[14px] text-[#6F6F6F]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
