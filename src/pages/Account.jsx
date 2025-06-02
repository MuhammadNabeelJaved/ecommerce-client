import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Account = () => {
  const [user, setUser] = useState("Alina");

  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb user={user} />
      </div>
    </>
  );
};

export default Account;
