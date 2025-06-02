import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import AccountComp from "../components/AccountComp";

const Account = () => {
  const [user, setUser] = useState("Mia Rimel");

  return (
    <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
      <Breadcrumb user={user} />
      <AccountComp />
    </div>
  );
};

export default Account;
