import React from "react";
import BillingDetails from "../components/Billing";
import Breadcrumb from "../components/Breadcrumb";

const Checkout = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <BillingDetails/>
      </div>
    </>
  );
};

export default Checkout;
