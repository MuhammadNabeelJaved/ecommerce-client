import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";

const Form = () => {
  const [location, setLocation] = useState("");
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-[60%]">
          <img
            className="w-full"
            src="https://img.freepik.com/free-photo/3d-rendering-cartoon-shopping-cart_23-2151680623.jpg?uid=R44072972&ga=GA1.1.90942914.1747474841&semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center w-[40%]">
          <form action="" className="flex flex-col gap-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-poppins text-black font-[500]">
                  {pathname === "/register"
                    ? "Create an account"
                    : "Log in to Exclusive"}
                </h2>
                <p>Enter your details below</p>
              </div>
              {pathname === "/register" && (
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full outline-none border-b-[1px] border-b-[#828282] bg-transparent py-2 text-black placeholder:text-[#828282]"
                    placeholder="Name"
                  />
                </div>
              )}

              <div className="w-full">
                <input
                  type="email"
                  className="w-full outline-none border-b-[1px] border-b-[#828282] bg-transparent py-2 text-black placeholder:text-[#828282]"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full outline-none border-b-[1px] border-b-[#828282] bg-transparent py-2 text-black placeholder:text-[#828282]"
                  placeholder="Password"
                />
              </div>
            </div>
            {pathname === "/register" ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <button className="w-full bg-[#DB4444] cursor-pointer hover:bg-[#db5d44] transition-all ease-in-out  text-white py-[16px] px-[122px] rounded-md">
                  Create Account
                </button>
                <button className="w-full flex justify-center items-center gap-4 border border-[#828282] bg-transparent cursor-pointer py-[16px] px-[122px] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_926_3336)">
                      <path
                        d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_926_3336">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="">Sign up with Google</p>
                </button>
                <div className="w-full flex justify-center items-center gap-2">
                  <p className="text-black opacity-[0.7]">
                    Already have an account?
                  </p>{" "}
                  <span className="font-[500] border-b-[1px] cursor-pointer border-[#828282] ">
                    <NavLink to="/login">Log in</NavLink>
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-6">
                  <button className="bg-[#DB4444] cursor-pointer hover:bg-[#db5d44] transition-all ease-in-out  text-white py-[16px] px-[122px] rounded-md">
                    Log in
                  </button>
                  <p className="text-[#DB4444] font-[400] opacity-[0.7] cursor-pointer">
                    Forgot Password?
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
