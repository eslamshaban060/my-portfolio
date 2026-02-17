import HeroSection from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import SkillsSection from "@/components/Skils/Skils";
import Projects from "@/components/Projects/Project";
import MouseTracker from "@/components/Features/MouseTracker";

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

      {/* Projects Section */}
      <div>
        <Projects />
      </div>
      {/* Feture of mouse tracker */}
      <div>
        <MouseTracker />
      </div>
    </div>
  );
};

export default HomePage;
