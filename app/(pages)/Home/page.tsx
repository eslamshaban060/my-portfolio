import HeroSection from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
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

      {/* About Me Section */}
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default HomePage;
