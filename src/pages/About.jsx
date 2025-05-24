import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutHero from "../components/AboutHero";

const About = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <AboutHero/>
      </div>
    </>
  );
};

export default About;
