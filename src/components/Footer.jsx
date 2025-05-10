import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex gap-16 flex-col justify-center items-center font-poppins text-[#FAFAFA] py-5">
        <div className="flex justify-between w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px] flex-wrap items-start">
          {/* First Column */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold font-poppins mb-6">Exclusive</h1>
            <div className="mt-0">
              <p className="text-sm font-poppins text-[24px] mb-6">Subscribe</p>
              <p className="text-sm font-poppins mb-6">
                Get 10% off your first order
              </p>
              <div className="flex justify-center items-center gap-2 border-2 border-gray-300 rounded-md p-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="outline-none bg-transparent text-white placeholder:text-[#FAFAFA] placeholder:opacity-50"
                />
                <button type="submit" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.91196 11.9998H3.99996L2.02296 4.1348C2.0103 4.0891 2.00259 4.04216 1.99996 3.9948C1.97796 3.2738 2.77196 2.7738 3.45996 3.1038L22 11.9998L3.45996 20.8958C2.77996 21.2228 1.99596 20.7368 1.99996 20.0288C2.00198 19.9655 2.0131 19.9029 2.03296 19.8428L3.49996 14.9998"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-[20px] mb-6">Support</h2>
            <ul className="flex flex-col gap-4">
              <li>New York Street No. 28, NYC</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-[20px] mb-6">Account</h2>
            <ul className="flex flex-col gap-4">
              <NavLink to={`/account`}>My Account</NavLink>
              <NavLink to={`/login`}>Login / Register</NavLink>
              <NavLink to={`/cart`}>Cart</NavLink>
              <NavLink to={`/wishlist`}>Wishlist</NavLink>
              <NavLink to={`/shop`}>Shop</NavLink>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-[20px] mb-6">Quick Links</h2>
            <ul className="flex flex-col gap-4">
              <NavLink to={`/privacy`}>Privacy Policy</NavLink>
              <NavLink to={`/usage`}>Terms Of Use</NavLink>
              <NavLink to={`/faq`}>FAQ</NavLink>
              <NavLink to={`/contact`}>Contact</NavLink>
            </ul>
          </div>

          {/* Download App Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-[20px] mb-6">Download App</h2>
            <div>
              <p className="text-sm opacity-50 font-poppins">
                Save $3 with App New User Only
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  className="w-[100px]"
                  src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
                  alt="app-store"
                />
                <img
                  className="w-[100px]"
                  src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/visual-identity_logos_880x572.max-1920x1070.format-webp.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20250510%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250510T195219Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2bed983a3a5b70f5809feffeab5edfde16a0b3c3a4fccc0c6ea37ecb42a19a55d3ab2fea0abe299d2cd481b4db199d79e683799ffdafe73d6ac5d26e127eefbf61a90051a097f0cf6918ba4356f689b3241e0eafc0c43da81038be636bf0bc71e9595b3e5a60cad34b71f36a24a5e8c994f739a10529fffa8d619cb9ee7f13aeb74a9a76d21d36c41a5caeb5a8ec7a3412109a1dd49d20f4c59e010d8c4b0ca0445f75d3e9e19ce423abadd84732647953ab5e3e80613a9c879bd9023458d2fb2c38cac605d0dea7bf2173af3020672000838b86b391e347e69ef0f9a6dd9dc98069c701c12c78247ec9c1bbb358233e33801303f14d4dec236467bf3858d476"
                  alt="google-play"
                />
              </div>
              <div className="flex gap-6 mt-4">
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <path
                    d="M14.1211 4.44336C14.8883 4.1364 15.7199 4.03349 16.5352 4.1416L16.8838 4.20117C17.8082 4.39388 18.6557 4.85462 19.3193 5.52637L19.3486 5.55664H19.3906C19.7296 5.55426 20.0806 5.59738 20.498 5.53809C20.882 5.48352 21.3278 5.34203 21.915 5.00977C21.6091 6.49447 21.4324 7.16729 20.7646 8.08301L20.7451 8.10938V8.14258C20.7451 11.9414 19.5781 14.7564 17.8262 16.7393C16.1825 18.5994 14.0186 19.7335 11.8057 20.2568L11.3623 20.3535C9.7452 20.6761 7.754 20.5731 5.99609 20.2109C5.11794 20.03 4.30096 19.7842 3.62012 19.4971C3.03699 19.2511 2.56006 18.9759 2.22949 18.6885C2.6606 18.6463 3.41195 18.553 4.24414 18.3594C5.24389 18.1267 6.37194 17.749 7.20312 17.1406L7.31934 17.0557L7.19922 16.9766C6.50766 16.5207 4.81165 15.4984 3.73145 13.5166C2.66701 11.5637 2.19288 8.66296 3.91406 4.42578C5.47307 6.22095 7.05692 7.48915 8.66602 8.22363L8.99512 8.36719C9.57627 8.60556 9.94226 8.72333 10.2314 8.79102C10.5195 8.85841 10.7322 8.8754 10.9922 8.91113L11.2871 8.95215L11.1074 8.77148C11.1323 7.84188 11.4255 6.93867 11.9541 6.17285C12.4234 5.49307 13.0591 4.94768 13.7979 4.58691L14.1211 4.44336ZM15.9053 5.90137C15.119 5.90124 14.3638 6.20994 13.8027 6.76074C13.3119 7.24267 13.0038 7.87627 12.9248 8.55371L12.9053 8.84668L12.877 10.4209C12.8756 10.4914 12.8592 10.5613 12.8291 10.625C12.799 10.6887 12.7556 10.7452 12.7021 10.791C12.6487 10.8368 12.5861 10.8716 12.5186 10.8916C12.4848 10.9016 12.45 10.9075 12.415 10.9102L12.3105 10.9072L10.749 10.6953C8.71753 10.4183 6.7663 9.48248 4.88965 7.91895L4.75781 7.80859L4.72754 7.97754C4.42573 9.64812 4.56793 11.0709 5.14746 12.3018C5.69051 13.455 6.61342 14.4312 7.89453 15.2832L8.15625 15.4521L9.90234 16.5498C9.97145 16.5932 10.0296 16.6529 10.0703 16.7236C10.111 16.7944 10.1339 16.8744 10.1367 16.9561C10.1395 17.0377 10.1217 17.1189 10.0859 17.1924C10.0681 17.229 10.0455 17.2629 10.0195 17.2939L9.93066 17.3779L8.33887 18.541L8.11523 18.7041L8.3916 18.7207C9.22554 18.7727 10.0251 18.7474 10.7188 18.6396L11.0098 18.5879C13.3887 18.1129 15.375 16.9789 16.7656 15.2207C18.1559 13.4627 18.9453 11.0883 18.9453 8.14258C18.9453 7.99705 18.8715 7.78499 18.7441 7.55762C18.6144 7.32598 18.4211 7.06491 18.167 6.82031C17.6901 6.36143 16.9936 5.95525 16.0889 5.90625L15.9053 5.90137Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.2"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
