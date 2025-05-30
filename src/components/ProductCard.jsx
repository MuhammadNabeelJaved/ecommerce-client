import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ViewAllProductButton from "./ViewAllProductButton";

const ProductCard = ({ productsData, arrowState, category }) => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  if (arrowState === "left") {
  }
  if (arrowState === "right") {
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
          arrows: false, // Hide arrows on smaller screens
          swipe: true,
        },
      },
    ],
  };
  useEffect(() => {
    // Shuffle the products array
    const shuffledProducts = [...productsData].sort(() => Math.random() - 0.5);

    // Select the first 4 products
    const selectedProducts = shuffledProducts.slice(0, 4);

    if (category === "all") {
      setCurrentProducts(productsData);
    } else if (category === "featured") {
      const featuredProducts = productsData.filter(
        (product) => product.featured
      );
      setCurrentProducts(featuredProducts);
    } else if (category === "best") {
      const bestProducts = productsData.filter((product) => product.best);
      setCurrentProducts(bestProducts);
    } else if (category === "sale") {
      const saleProducts = productsData.filter((product) => product.sale);
      setCurrentProducts(saleProducts);
    } else if (category === "new") {
      const newProducts = productsData.filter((product) => product.new);
      setCurrentProducts(newProducts);
    } else if (category === "popular") {
      const popularProducts = productsData.filter((product) => product.popular);
      setCurrentProducts(popularProducts);
    } else if (category === "trending") {
      const trendingProducts = productsData.filter(
        (product) => product.trending
      );
      setCurrentProducts(trendingProducts);
    } else if (category === "random") {
      const randomProducts = productsData.filter((product) => product.random);
      setCurrentProducts(randomProducts);
    } else if (category === "discount") {
      const discountProducts = productsData.filter(
        (product) => product.discount
      );
      setCurrentProducts(discountProducts);
    } else if (category === "latest") {
      const latestProducts = productsData.filter((product) => product.latest);
      setCurrentProducts(latestProducts);
    } else if (category === "top") {
      const topProducts = productsData.filter((product) => product.top);
      setCurrentProducts(topProducts);
    } else {
      setCurrentProducts(selectedProducts);
    }
  }, [productsData]);
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="flex items-center flex-wrap gap-5 justify-center md:gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex max-w-2xs flex-col items-start gap-5 justify-center"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-start flex-col justify-between w-full gap-2">
                <h3 className="text-lg  font-[500]">{product.title}</h3>
                <p className="text-[#DB4444]">
                  ${product.price} <s className="text-gray-400">$ 100</s>
                </p>
                <p className="flex items-center justify-center gap-2  font-[600]">
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
          ))}
          <ViewAllProductButton title="View All Products" />
        </div>
        <hr />
      </div>
    </>
  );
};

export default ProductCard;
