import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const isRegister = pathname === "/register";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });

  // Watch password for confirmation validation
  const password = watch("password");

  // API call function
  const submitForm = async (data) => {
    setIsLoading(true);
    setApiError("");

    try {
      const endpoint = isRegister
        ? "https://jsonplaceholder.typicode.com/users"
        : "https://jsonplaceholder.typicode.com/posts";

      const payload = isRegister
        ? {
            name: data.name,
            email: data.email,
            password: data.password,
          }
        : {
            email: data.email,
            password: data.password,
          };

      const response = await axios.post(endpoint, payload);

      console.log("API Response:", response.data);
      alert(isRegister ? "Account created successfully!" : "Login successful!");

      reset();
      if (isRegister) {
        navigate("/login");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("API Error:", error);
      setApiError(
        error.response?.data?.message ||
          `${isRegister ? "Registration" : "Login"} failed. Please try again.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-between px-4 py-8 lg:px-0 lg:py-0 min-h-screen lg:min-h-0">
        {/* Image - Hidden on mobile/tablet, visible on laptop+ */}
        <div className="hidden lg:block w-full lg:w-[60%] mb-8 lg:mb-0 order-2 lg:order-1">
          <img
            className="w-full max-w-md mx-auto lg:max-w-none"
            src="https://img.freepik.com/free-photo/3d-rendering-cartoon-shopping-cart_23-2151680623.jpg?uid=R44072972&ga=GA1.1.90942914.1747474841&semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
        
        {/* Form - Full width on mobile/tablet, 40% on laptop+ */}
        <div className="flex justify-center items-center w-full lg:w-[40%] order-1 lg:order-2">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-6 lg:gap-10 w-full max-w-md px-4 lg:px-0"
          >
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="text-2xl lg:text-4xl font-poppins text-black font-[500]">
                  {pathname === "/register"
                    ? "Create an account"
                    : "Log in to Exclusive"}
                </h2>
                <p className="text-sm lg:text-base">Enter your details below</p>
              </div>

              {/* API Error Display */}
              {apiError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {apiError}
                </div>
              )}

              {pathname === "/register" && (
                <div className="w-full">
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can only contain letters and spaces",
                      },
                    })}
                    className={`w-full outline-none border-b-[1px] ${
                      errors.name ? "border-b-red-500" : "border-b-[#828282]"
                    } bg-transparent py-2 text-black placeholder:text-[#828282]`}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}

              <div className="w-full">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full outline-none border-b-[1px] ${
                    errors.email ? "border-b-red-500" : "border-b-[#828282]"
                  } bg-transparent py-2 text-black placeholder:text-[#828282]`}
                  placeholder="Email or Phone Number"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    ...(isRegister && {
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                      },
                    }),
                  })}
                  className={`w-full outline-none border-b-[1px] ${
                    errors.password ? "border-b-red-500" : "border-b-[#828282]"
                  } bg-transparent py-2 text-black placeholder:text-[#828282]`}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {pathname === "/register" ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#DB4444] cursor-pointer hover:bg-[#db5d44] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ease-in-out text-white py-[16px] px-4 lg:px-[122px] rounded-md"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>

                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-4 border border-[#828282] bg-transparent cursor-pointer py-[16px] px-4 lg:px-[122px] rounded-md hover:bg-gray-50 transition-all ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_926_3336)">
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
                  <p className="text-sm lg:text-base">Sign up with Google</p>
                </button>

                <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2">
                  <p className="text-black opacity-[0.7] text-sm lg:text-base">
                    Already have an account?
                  </p>{" "}
                  <span className="font-[500] border-b-[1px] cursor-pointer border-[#828282] text-sm lg:text-base">
                    <NavLink to="/login">Log in</NavLink>
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-[#DB4444] cursor-pointer hover:bg-[#db5d44] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ease-in-out text-white py-[16px] px-8 lg:px-[122px] rounded-md"
                  >
                    {isLoading ? "Logging in..." : "Log in"}
                  </button>
                  <p className="text-[#DB4444] font-[400] opacity-[0.7] cursor-pointer text-sm lg:text-base hover:opacity-100 transition-opacity">
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