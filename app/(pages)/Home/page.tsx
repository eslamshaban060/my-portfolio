import React from "react";
import HeroSection from "@/components/Hero/Hero";
const HomePage = () => {
  return (
    <div
      className="pt-16 h-[200vh]  
    "
    >
      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>
      <div className="h-[100vh] w-full"></div>
    </div>
  );
};

export default HomePage;
