import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutHero from "../components/AboutHero";
import { Status } from "../components/Status";
import Features from "../components/Features";

const About = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <AboutHero />
        <Status />
        <Features />
      </div>
    </>
  );
};

export default About;
