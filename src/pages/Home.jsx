import BestProducts from "../components/BestProducts.jsx";
import Categories from "../components/Categories.jsx";
import FeaturedProduct from "../components/FeaturedProduct.jsx";
import Features from "../components/Features.jsx";
import Hero from "../components/Hero.jsx";
import ProductHero from "../components/ProductHero.jsx";
import SalesTimer from "../components/ProductsTitle.jsx";
import ProductsTitle from "../components/ProductsTitle.jsx";
import productsData from "../data/productsData.js";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsTitle
        title="Flash Sales"
        topTitle="Today's Deals"
        offer="Up to 50% off"
        tagline="Limited time offer"
        category="New Arrivals"
        timer="00:00:00"
        percent="Up to 50% off"
        productsData={productsData}
        arrow={true}
      />
      <Categories />
      <BestProducts />
      <ProductHero />
      <ProductsTitle
        title="Explore Our Products"
        topTitle="Our Products"
        productsData={productsData}
        arrow={true}
      />
      {/* <ProductsTitle title="New Arrival" topTitle="Featured" />
      <FeaturedProduct /> */}
      <Features />
    </>
  );
};

export default Home;
