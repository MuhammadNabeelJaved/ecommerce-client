import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import iPhone from "../assets/iphone.jpg";

// Custom arrow components for the slider
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute border-[1px] border-amber-50 cursor-pointer left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/30 p-2 text-white hover:bg-gray-800/50"
    aria-label="Previous slide"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute border-[1px] border-amber-50 cursor-pointer right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/30 p-2 text-white hover:bg-gray-800/50"
    aria-label="Next slide"
  >
    <ChevronLeft size={20} className="rotate-180" />
  </button>
);

// Dot indicator component
const Indicator = ({ count, activeIndex }) => (
  <div className="absolute cursor-pointer bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
          i === activeIndex ? "w-4 bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
);

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [productSlides, setProductSlides] = useState([]);

  const slides = [
    {
      id: 1,
      title: "Up to 10% off Voucher",
      subtitle: "iPhone 14 Series",
      cta: "Shop Now",
      bgColor: "bg-black",
      textColor: "text-white",
      image: iPhone,
      productImage: true,
    },
    {
      id: 2,
      title: "New AirPods Pro",
      subtitle: "Active Noise Cancellation",
      cta: "Learn More",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      image: iPhone,
      productImage: false,
    },
    {
      id: 3,
      title: "MacBook Air M2",
      subtitle: "Supercharged for pros",
      cta: "Buy Now",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      image: iPhone,
      productImage: true,
    },
    {
      id: 4,
      title: "Apple Watch Series 8",
      subtitle: "A healthy leap ahead",
      cta: "Explore",
      bgColor: "bg-red-600",
      textColor: "text-white",
      image: iPhone,
      productImage: true,
    },
    {
      id: 5,
      title: "iPad Pro",
      subtitle: "Supercharged by M2",
      cta: "Available Now",
      bgColor: "bg-blue-900",
      textColor: "text-white",
      image: iPhone,
      productImage: true,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="relative mb-10 md:mb-36 w-full max-w-full mx-auto overflow-hidden">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className={`relative flex h-64 w-full items-center ${slide.bgColor} ${slide.textColor} md:h-80 lg:h-96`}
            >
              <div className="z-10 ml-8 flex w-1/2 flex-col space-y-3 pl-4 md:ml-16">
                <div className="flex items-center">
                  {slide.id === 1 && (
                    <div className="mr-2">
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                  )}
                  <p className="text-sm font-medium md:text-base">
                    {slide.subtitle}
                  </p>
                </div>
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  {slide.title}
                </h2>
                <div className="flex items-center pt-2">
                  <a
                    href="#"
                    className="group flex items-center text-sm font-medium md:text-base"
                  >
                    {slide.cta}
                    <svg
                      className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`absolute right-0 top-0 h-full w-1/2 ${
                  slide.productImage ? "flex items-center justify-center" : ""
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`h-full w-full object-cover ${
                    slide.productImage ? "object-contain p-4" : "object-cover"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Indicator count={slides.length} activeIndex={activeSlide} />
    </div>
  );
};

export default HeroSlider;
