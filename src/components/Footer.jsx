import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex gap-16 flex-col justify-center items-center font-poppins text-[#FAFAFA] py-5">
        <div className="flex justify-center items-center gap-[90px]">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-2xl font-bold font-poppins">Exclusive</h1>
            <p className="text-sm font-poppins text-[24px]">Subscribe</p>
            <p className="text-sm font-poppins">Get 10% off your first order</p>
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[20px]">Support</h2>
            <ul className="flex flex-col gap-4">
              <li className="">New York Street No. 28, NYC</li>
              <li className="">exclusive@gmail.com</li>
              <li className="">+88015-88888-9999</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[20px]">Account</h2>
            <ul className="flex flex-col gap-4">
              <li className="">My Account</li>
              <li className="">Login / Register</li>
              <li className="">Cart</li>
              <li className="">Wishlist</li>
              <li className="">Shop</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[20px]">Quick Links</h2>
            <ul className="flex flex-col gap-4">
              <li className="">Privacy Policy</li>
              <li className="">Terms Of Use</li>
              <li className="">FAQ</li>
              <li className="">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[20px]">Download App</h2>
            <div>
              <p className="text-sm opacity-50 font-poppins">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-2">
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
