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
      <main id="home">
        <HeroSection />
      </main>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      {/* Feture of mouse tracker */}
      <div>
        <MouseTracker />
      </div>
    </div>
  );
};

export default HomePage;
