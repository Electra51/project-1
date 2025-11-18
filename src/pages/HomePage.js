import React from "react";
import Hero from "../component/Hero/Hero";
import FeaturedCategories from "../component/FeaturedCategories/FeaturedCategories";
import BestSellers from "../component/BestSellers/BestSellers";
import SaleBanner from "../component/SaleBanner/SaleBanner";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <SaleBanner />
    </div>
  );
};

export default HomePage;
