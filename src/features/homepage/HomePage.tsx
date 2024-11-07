import React from "react";
import HomePageHeroSection from "./components/HeroSection";
import HomePageBenefitsSection from "./components/BenefitsSection";
import HomePageShopSection from "./components/ShopSection";
import HomePageFindContractor from "./components/FindContractor";
import HomePageSignupSection from "./components/SignupSection";

const HomePage = () => {
  return (
    <>
      <HomePageHeroSection />
      <HomePageBenefitsSection className="mt-24" />
      <HomePageShopSection className="mt-[195px]" />
      <HomePageFindContractor className="mt-[195px]" />
      <HomePageSignupSection className="mb-80 mt-[267px]" />
    </>
  );
};

export default HomePage;
