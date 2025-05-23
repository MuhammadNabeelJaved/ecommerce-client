import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div className="my-[100px] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-10 items-center">
          <h1 className="text-3xl text-center font-inter text-[110px] font-[500] space-[3.3px]">
            404 Not Found
          </h1>
          <p className="font-[400] font-poppins">
            Your visited page not found. You may go home page.
          </p>
          <button className="bg-[#DB4444] text-white rounded-[4px] px-12 py-4 cursor-pointer hover:bg-[#ff8686fd] transition-all duration-300 ease-in-out">
            Back to home page
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
