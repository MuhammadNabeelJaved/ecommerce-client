import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ products, arrowState, category }) => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  console.log("Current Products", currentProducts);

  // Custom arrow components
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle manual arrow clicks
  useEffect(() => {
    if (arrowState === "left" && slider) {
      slider.slickPrev();
    }
    if (arrowState === "right" && slider) {
      slider.slickNext();
    }
  }, [arrowState]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Changed from 1 to 4
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Changed from 1 to 3
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // Changed from 1 to 2
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  // Reference to the slider
  let slider = null;

  useEffect(() => {
    // Filter products based on category
    if (category === "all") {
      setCurrentProducts(products);
    } else if (category === "featured") {
      const featuredProducts = products.filter((product) => product.featured);
      setCurrentProducts(featuredProducts);
    } else if (category === "best") {
      const bestProducts = products.filter((product) => product.best);
      setCurrentProducts(bestProducts);
    } else if (category === "sale") {
      const saleProducts = products.filter((product) => product.sale);
      setCurrentProducts(saleProducts);
    } else if (category === "new") {
      const newProducts = products.filter((product) => product.new);
      setCurrentProducts(newProducts);
    } else if (category === "popular") {
      const popularProducts = products.filter((product) => product.popular);
      setCurrentProducts(popularProducts);
    } else if (category === "trending") {
      const trendingProducts = products.filter((product) => product.trending);
      setCurrentProducts(trendingProducts);
    } else if (category === "random") {
      const randomProducts = products.filter((product) => product.random);
      setCurrentProducts(randomProducts);
    } else if (category === "discount") {
      const discountProducts = products.filter((product) => product.discount);
      setCurrentProducts(discountProducts);
    } else if (category === "latest") {
      const latestProducts = products.filter((product) => product.latest);
      setCurrentProducts(latestProducts);
    } else if (category === "top") {
      const topProducts = products.filter((product) => product.top);
      setCurrentProducts(topProducts);
    } else {
      // Shuffle the products array for random selection
      const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
      // Select the first 4 products
      const selectedProducts = shuffledProducts.slice(0, 4);
      setCurrentProducts(products);
    }
  }, [products, category]);

  return (
    <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
      <Slider {...settings} ref={(c) => (slider = c)}>
        {currentProducts.map((product) => (
          <div key={product.id} className="px-2">
            <div className="flex max-w-2xs flex-col items-start gap-5 justify-center">
              <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-start flex-col justify-between w-full gap-2">
                <h3 className="text-lg font-[500]">{product.title}</h3>
                <p className="text-[#DB4444]">
                  ${product.price} <s className="text-gray-400">$100</s>
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
                  </svg>{" "}
                  <span className="text-black opacity-[0.6]">
                    ({product.reviews})
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCard;
