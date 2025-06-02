import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";
import cancellIcon from "../assets/cancell.png";
import orderIcon from "../assets/orders.png";
import reviewIcon from "../assets/reviews.png";
import logoutIcon from "../assets/logout.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  const [accountDropdown, setaccountDropdown] = useState(false);
  const [mobileAccountDropdown, setMobileAccountDropdown] = useState(false);

  const accountDropdownDetail = [
    {
      id: 1,
      icon: userIcon,
      name: "Manage My Account",
      link: "/account",
    },
    {
      id: 1,
      icon: orderIcon,
      name: "My Order",
      link: "/orders",
    },
    {
      id: 1,
      icon: cancellIcon,
      name: "My Cancellations",
      link: "/cancellations",
    },
    {
      id: 1,
      icon: reviewIcon,
      name: "My Reviews",
      link: "/reviews",
    },
    {
      id: 1,
      icon: logoutIcon,
      name: "Logout",
      link: "/logout",
    },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        open &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".menu-button")
      ) {
        setOpen(false);
      }

      // Close dropdown when clicking outside
      if (
        accountDropdown &&
        !e.target.closest(".account-dropdown") &&
        !e.target.closest(".account-button")
      ) {
        setaccountDropdown(false);
      }

      // Close mobile dropdown when clicking outside
      if (
        mobileAccountDropdown &&
        !e.target.closest(".mobile-account-dropdown") &&
        !e.target.closest(".mobile-account-button")
      ) {
        setMobileAccountDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Prevent scrolling when sidebar is open on mobile
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Close the sidebar when screen resizes to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [open, accountDropdown, mobileAccountDropdown]);

  return (
    <>
      {/* Overlay for when sidebar is open */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-[90] transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Hamburger Menu */}
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden m-5 fixed top-0 left-0 menu-button cursor-pointer"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-white rounded-full p-1"
        >
          {open ? (
            // X icon when menu is open
            <>
              <path d="M18 6L6 18" stroke="#222222" strokeLinecap="round" />
              <path d="M6 6L18 18" stroke="#222222" strokeLinecap="round" />
            </>
          ) : (
            // Hamburger icon when menu is closed
            <>
              <path d="M5 7H19" stroke="#222222" strokeLinecap="round" />
              <path d="M5 12H15" stroke="#222222" strokeLinecap="round" />
              <path d="M5 17H11" stroke="#222222" strokeLinecap="round" />
            </>
          )}
        </svg>
      </div>

      {/* Desktop Navbar */}
      <div className="md:flex max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px] flex-wrap justify-between gap-2 items-center hidden p-4 border-b-2 border-gray-300">
        <h2 className="cursor-pointer font-poppins font-bold text-2xl">
          Exclusive
        </h2>
        <div>
          <ul className="flex items-center gap-12 flex-wrap">
            <NavLink
              to={`/`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to={`/contact`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </NavLink>
            <NavLink
              to={`/about`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to={`/register`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
            >
              Sign Up
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div>
            <div className="flex gap-8 justify-center pt-[7px] rounded-[4px] pb-[7px] pl-[12px] pr-[12px] bg-[#F5F5F5] items-center">
              <input
                className="outline-none w-full"
                type="search"
                placeholder="What are you looking for?"
              />
              <img
                className="w-4 h-4 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt="search icon"
              />
            </div>
          </div>
          <ul className="flex items-center gap-4">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <NavLink to={`/cart`}>
              <img
                className="cursor-pointer w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="Cart"
              />
            </NavLink>
            {/* {Show user icon} */}
            {user && (
              <div className="relative">
                <div
                  onClick={() => {
                    setaccountDropdown(!accountDropdown);
                  }}
                  className="account-button cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-[#4e4e4e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect width="32" height="32" rx="16" fill="#DB4444" />
                    <path
                      d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Dropdown with smooth animation */}
                <div
                  className={`account-dropdown absolute z-[100] right-0 top-12 w-56 rounded-[4px] bg-[rgba(0,0,0,0.39)] bg-clip-padding backdrop-blur-[70px] p-4 shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
                    accountDropdown
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col gap-3.5">
                    {accountDropdownDetail.map((item, index) => (
                      <ul
                        key={index}
                        className={`flex gap-4 text-white transform transition-all duration-200 ease-in-out ${
                          accountDropdown
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                        style={{
                          transitionDelay: accountDropdown
                            ? `${index * 50}ms`
                            : "0ms",
                        }}
                      >
                        <img className="w-6 h-6" src={item.icon} alt="" />
                        <li className="cursor-pointer hover:text-gray-300 transition-colors">
                          <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar - Hidden on md screens and above */}
      <div
        className={`sidebar md:hidden h-screen w-64 bg-white border-r-2 border-gray-300 fixed left-0 top-0 flex flex-col z-[100] transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Logo/Title */}
        <div className="p-6 border-b-2 border-gray-300 flex justify-between items-center">
          <h2 className="cursor-pointer font-poppins font-bold text-2xl">
            Exclusive
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-6 border-b-2 border-gray-300">
          <div className="flex gap-2 justify-between rounded-[4px] py-2 px-3 bg-[#F5F5F5] items-center">
            <input
              className="outline-none w-full bg-transparent text-sm"
              type="search"
              placeholder="What are you looking for?"
            />
            <img
              className="w-4 h-4 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="search icon"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-6 px-4 flex-grow">
          <ul className="flex flex-col space-y-6">
            <NavLink
              to={`/`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={`/contact`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to={`/about`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to={`/register`}
              className="cursor-pointer font-poppins text-black hover:text-gray-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </NavLink>
          </ul>
        </div>

        {/* Action Icons and User Account at bottom */}
        <div className="p-4 border-t-2 border-gray-300 mt-auto">
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <NavLink to={`/cart`} onClick={() => setOpen(false)}>
                <img
                  className="cursor-pointer w-6 h-6"
                  src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                  alt="Cart"
                />
              </NavLink>
            </li>
          </ul>

          {/* Mobile User Account Section */}
          {user && (
            <div className="flex flex-col items-center">
              <div
                onClick={() => {
                  setMobileAccountDropdown(!mobileAccountDropdown);
                }}
                className="mobile-account-button cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-[#F5F5F5] mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" rx="16" fill="#DB4444" />
                  <path
                    d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Mobile Dropdown with smooth animation */}
              <div
                className={`mobile-account-dropdown w-full rounded-[4px] bg-[rgba(0,0,0,0.87)] border-[1px] border-b-[#a7a7a75b] bg-clip-padding backdrop-blur-[70px] p-4 shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
                  mobileAccountDropdown
                    ? "opacity-100 scale-y-100 translate-y-0 max-h-96"
                    : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3.5">
                  {accountDropdownDetail.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-4  text-white transform transition-all duration-200 ease-in-out cursor-pointer hover:text-gray-600 ${
                        mobileAccountDropdown
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                      style={{
                        transitionDelay: mobileAccountDropdown
                          ? `${index * 50}ms`
                          : "0ms",
                      }}
                      onClick={() => {
                        setOpen(false);
                        setMobileAccountDropdown(false);
                      }}
                    >
                      <img className="w-5 h-5" src={item.icon} alt="" />
                      <span className="text-sm font-poppins">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
