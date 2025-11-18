import React from "react";
import Hero from "../component/Hero/Hero";
import FeaturedCategories from "../component/FeaturedCategories/FeaturedCategories";
import BestSellers from "../component/BestSellers/BestSellers";
import SaleBanner from "../component/SaleBanner/SaleBanner";
import WhyChooseUs from "../component/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "../component/CustomerReviews/CustomerReviews";
import Newsletter from "../component/Newsletter/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <SaleBanner />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
};

export default HomePage;
