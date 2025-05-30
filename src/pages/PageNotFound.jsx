import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ErrorPage from "../components/404";

const PageNotFound = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <ErrorPage />
      </div>
    </>
  );
};

export default PageNotFound;
