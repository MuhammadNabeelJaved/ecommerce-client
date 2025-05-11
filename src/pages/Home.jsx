import Hero from "../components/Hero.jsx";
import SalesTimer from "../components/ProductsTitle.jsx";
import ProductsTitle from "../components/ProductsTitle.jsx";

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
      />
    </>
  );
};

export default Home;
