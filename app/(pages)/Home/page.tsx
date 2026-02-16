import HeroSection from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import SkillsSection from "@/components/Skils/Skils";
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

      {/* Skills Section */}
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomePage;
