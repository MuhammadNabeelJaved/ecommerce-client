import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactFrom from "../components/Contact.jsx";

const Contact = () => {
  return (
    <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
      <Breadcrumb />
      <ContactFrom />
    </div>
  );
};

export default Contact;
