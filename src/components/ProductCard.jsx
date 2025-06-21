import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ViewAllProductButton from "./ViewAllProductButton";
import { NavLink } from "react-router";
import { useParams, useLocation } from "react-router";

const ProductCard = ({ productsData = [], arrowState, category }) => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set()); // Track liked products
  const param = useParams();
  const location = useLocation();

  console.log("Params: ", location);

  // Early return if productsData is not available or not an array
  if (
    !productsData ||
    !Array.isArray(productsData) ||
    productsData.length === 0
  ) {
    return (
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center justify-center py-8">
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: activeSlide,
    nextArrow: activeSlide,
    beforeChange: (current, next) => setActiveSlide(next),
    swipe: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          swipe: true,
        },
      },
    ],
  };

  const addToCart = (e, productId) => {
    e.stopPropagation();
    console.log("ID: ", productId);
  };

  // Handle heart click with smooth animation
  const toggleHeart = (e, productId) => {
    e.stopPropagation();
    e.preventDefault();
    
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
    
    console.log("Heart clicked for product:", productId);
  };

  useEffect(() => {
    // Check if productsData is available and is an array
    if (!productsData || !Array.isArray(productsData)) {
      console.error("productsData is not an array:", productsData);
      return;
    }

    // Shuffle the products array
    const shuffledProducts = [...productsData].sort(() => Math.random() - 0.5);
    // Select the first 4 products
    const selectedProducts = shuffledProducts.slice(0, 4);

    try {
      switch (category) {
        case "all":
          setCurrentProducts(productsData);
          break;
        case "featured":
          setCurrentProducts(
            productsData.filter((product) => product.featured)
          );
          break;
        case "best":
          setCurrentProducts(productsData.filter((product) => product.best));
          break;
        case "sale":
          setCurrentProducts(productsData.filter((product) => product.sale));
          break;
        case "new":
          setCurrentProducts(productsData.filter((product) => product.new));
          break;
        case "popular":
          setCurrentProducts(productsData.filter((product) => product.popular));
          break;
        case "trending":
          setCurrentProducts(
            productsData.filter((product) => product.trending)
          );
          break;
        case "random":
          setCurrentProducts(productsData.filter((product) => product.random));
          break;
        case "discount":
          setCurrentProducts(
            productsData.filter((product) => product.discount)
          );
          break;
        case "latest":
          setCurrentProducts(productsData.filter((product) => product.latest));
          break;
        case "top":
          setCurrentProducts(productsData.filter((product) => product.top));
          break;
        default:
          setCurrentProducts(selectedProducts);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
      setCurrentProducts([]);
    }
  }, [productsData, category]);

  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="flex items-center flex-wrap gap-5 justify-center md:gap-8">
            {currentProducts.map((product, index) => (
              <div
                key={product.id || index}
                className="flex max-w-2xs flex-col items-start gap-5 justify-center"
              >
                <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center relative">
                  {/* Icons container */}
                  <div className="absolute top-2 right-2 flex gap-2 bg-white bg-opacity-70 rounded p-1 shadow-md z-10">
                    <span 
                      className="flex justify-center items-center p-1 cursor-pointer"
                      onClick={(e) => toggleHeart(e, product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={likedProducts.has(product.id) ? "#ef4444" : "none"}
                        stroke={likedProducts.has(product.id) ? "#ef4444" : "black"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300 ease-in-out transform hover:scale-110"
                        style={{
                          filter: likedProducts.has(product.id) ? 'drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))' : 'none'
                        }}
                      >
                        <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" />
                      </svg>
                    </span>
                    <NavLink
                      to={`/products/${product.category}/${product.id}/${product.title}`}
                      className="flex justify-center items-center p-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962Z" />
                          <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" />
                        </svg>
                      </span>
                    </NavLink>
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200?text=No+Image";
                    }}
                  />
                </div>

                <div className="flex items-start flex-col justify-between w-full gap-2">
                  <h3 className="text-lg font-[500]">
                    {product.title
                      ? product.title.replace(/-/g, " ")
                      : "No Title"}
                  </h3>
                  <p className="text-[#DB4444]">
                    ${product.price || 0} <s className="text-gray-400">$ 100</s>
                  </p>
                  <p className="flex items-center justify-center gap-2 font-[600]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-black opacity-[0.6]">
                        ({product.reviews || 0})
                      </span>
                      <svg
                        onClick={(e) => addToCart(e, product.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide cursor-pointer lucide-shopping-cart-icon lucide-shopping-cart"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {location.pathname !== "/products" ? (
            <ViewAllProductButton title="View All Products" />
          ) : null}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ProductCard;