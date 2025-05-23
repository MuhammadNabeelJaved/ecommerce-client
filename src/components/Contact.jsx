import React from "react";
import { useForm } from "react-hook-form";

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // You can handle form submission here (e.g., send to API)
    // For demo, just reset after submit
    reset();
    alert("Message sent!");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-8 my-[100px] items-center">
        {/* Contact Info */}
        <div className="flex shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] justify-center items-center flex-col p-10 w-full lg:w-[40%]">
          <div className="flex flex-col gap-8 w-full">
            <div>
              <div className="flex justify-center flex-col items-start gap-6">
                <div className="flex justify-center items-center gap-4">
                  {/* Phone SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path
                      d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="text-center font-[500] font-poppins">
                    Contact Us
                  </h1>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-poppins">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="font-poppins">Phone: +8801611112222</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-center flex-col items-start gap-6">
              <div className="flex justify-center items-center gap-4">
                {/* Email SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path
                    d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="text-center font-[500] font-poppins">
                  Write To US
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-poppins">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="font-poppins">Emails: customer@exclusive.com</p>
                <p className="font-poppins">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10 shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] w-full lg:w-[55%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
            noValidate
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="w-full">
                <input
                  className="bg-[#F5F5F5] px-3.5 py-2.5 w-full rounded-[4px] outline-0"
                  type="text"
                  placeholder="Your Name *"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name should be at least 2 characters",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs font-poppins">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  className="bg-[#F5F5F5] px-3.5 py-2.5 w-full rounded-[4px] outline-0"
                  type="email"
                  placeholder="Your Email *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-poppins">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  className="bg-[#F5F5F5] px-3.5 py-2.5 w-full rounded-[4px] outline-0"
                  type="password"
                  placeholder="Your Password *"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs font-poppins">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <textarea
                className="bg-[#F5F5F5] outline-0 p-3.5 h-[207px] w-full"
                placeholder="Your Massage *"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs font-poppins">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#DB4444] px-12 font-poppins py-4 text-center hover:bg-[rgba(255,89,89,0.9)] transition-all delay-75 cursor-pointer rounded-[4px] text-white"
            >
              {isSubmitting ? "Sending..." : "Send Massage"}
            </button>
            {isSubmitSuccessful && (
              <span className="text-green-600 font-poppins">
                Message sent successfully!
              </span>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
