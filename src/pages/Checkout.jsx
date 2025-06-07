import React from "react";
import BillingDetails from "../components/Billing";

const Checkout = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <BillingDetails/>
      </div>
    </>
  );
};

export default Checkout;
