import React from "react";
import portrait from "../assets/portrait.png";

const AboutHero = () => {
  return (
    <>
      <div className="my-[100px] justify-between flex-wrap flex items-center gap-16">
        <div className="flex md:w-[45%] m-auto flex-col gap-6">
          <div className="flex flex-col gap-10">
            <h1 className="text-[54px] font-inter font-[600] tracking-[3.3px]">
              Our Story
            </h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
          </div>
          <p>
            {" "}
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img className="md:w-[49%] m-auto" src={portrait} alt="" />
      </div>
    </>
  );
};

export default AboutHero;
