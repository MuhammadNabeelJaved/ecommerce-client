import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
      <Breadcrumb
        items={[
          { id: "home", label: "Home" },
          { id: "products", label: "Products" },
          { id: "category", label: "Electronics" },
        ]}
        onNavigate={(item) => {
          // Handle navigation logic
          console.log("Navigate to:", item);
        }}
      />
      Contact
    </div>
  );
};

export default Contact;
