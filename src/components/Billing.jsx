import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BillingDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [couponCode, setCouponCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      townCity: "",
      phoneNumber: "",
      emailAddress: "",
      saveInfo: false,
    },
  });

  const onSubmit = (data) => {
    const formData = {
      ...data,
      paymentMethod,
      couponCode,
    };
    console.log("Form submitted:", formData);
    alert("Order placed successfully!");
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      console.log("Applying coupon:", couponCode);
      alert(`Coupon "${couponCode}" applied!`);
    } else {
      alert("Please enter a coupon code");
    }
  };

  return (
    <div className="my-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Billing Details
            </h2>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "First name can only contain letters and spaces",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.firstName
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName", {
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.companyName
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Street Address */}
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address*
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  {...register("streetAddress", {
                    required: "Street address is required",
                    minLength: {
                      value: 5,
                      message: "Street address must be at least 5 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.streetAddress
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.streetAddress && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.streetAddress.message}
                  </p>
                )}
              </div>

              {/* Apartment */}
              <div>
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  {...register("apartment")}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Town/City */}
              <div>
                <label
                  htmlFor="townCity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Town/City*
                </label>
                <input
                  type="text"
                  id="townCity"
                  {...register("townCity", {
                    required: "Town/City is required",
                    minLength: {
                      value: 2,
                      message: "Town/City must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Town/City can only contain letters and spaces",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.townCity
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.townCity && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.townCity.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.phoneNumber
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  {...register("emailAddress", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:ring-2 focus:bg-white transition-colors ${
                    errors.emailAddress
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.emailAddress && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>

              {/* Save Info Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  {...register("saveInfo")}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="saveInfo"
                  className="ml-3 text-sm text-gray-700"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm h-fit">
            <div className="space-y-6">
              {/* Products */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-6 bg-red-500 rounded-sm"></div>
                    </div>
                    <span className="text-gray-900">LCD Monitor</span>
                  </div>
                  <span className="font-medium">$650</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-6 bg-gray-800 rounded-sm"></div>
                    </div>
                    <span className="text-gray-900">H1 Gamepad</span>
                  </div>
                  <span className="font-medium">$1100</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">$1750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-3">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500"
                  />
                  <label
                    htmlFor="bank"
                    className="ml-3 flex items-center space-x-2"
                  >
                    <span>Bank</span>
                    <div className="flex space-x-1">
                      <div className="w-8 h-5 bg-pink-500 rounded-sm"></div>
                      <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                      <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                      <div className="w-8 h-5 bg-red-600 rounded-sm"></div>
                    </div>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="cash" className="ml-3">
                    Cash on delivery
                  </label>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon Code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium"
                >
                  Apply Coupon
                </button>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="w-full py-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
