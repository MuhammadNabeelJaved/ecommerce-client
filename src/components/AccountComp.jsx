import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const AccountComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "Mia",
      lastName: "Rimel",
      email: "rimellitaj@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data) => {
    try {
      console.log("Saving changes:", data);
      // Add your API call here
      // await updateProfile(data);

      // Clear password fields after successful update
      reset({
        ...data,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const handleCancel = () => {
    reset();
    console.log("Form reset");
  };

  return (
    <div className="flex flex-col font-poppins lg:flex-row my-[100px] gap-8">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Manage My Account
          </h3>
          <ul className="space-y-3 mb-6">
            <li>
              <NavLink
                to={`/account`}
                className="text-red-500 font-medium hover:text-red-600"
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/address`}
                className="text-gray-600 hover:text-gray-800"
              >
                Address Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/payments`}
                className="text-gray-600 hover:text-gray-800"
              >
                My Payment Options
              </NavLink>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            My Orders
          </h3>
          <ul className="space-y-3 mb-6">
            <li>
              <NavLink
                to={`/account/returns`}
                className="text-gray-600 hover:text-gray-800"
              >
                My Returns
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/cancellations`}
                className="text-gray-600 hover:text-gray-800"
              >
                My Cancellations
              </NavLink>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            My Wishlist
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Edit Your Profile
          </h2>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password Changes Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Password Changes
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Current Password"
                    {...register("currentPassword")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  {errors.currentPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.currentPassword.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="New Password"
                    {...register("newPassword", {
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  {errors.newPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                    })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="px-6 py-3 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountComp;
