import HeroSection from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import SkillsSection from "@/components/Skils/Skils";
import Projects from "@/components/Projects/Project";
import MouseTracker from "@/components/Features/MouseTracker";
import Connect from "@/components/Connect/Connect";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";

const HomePage = () => {
  return (
    <main className="pt-16 h-[200vh] ">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Featured Project Section */}
      <section>
        <FeaturedProject />
      </section>
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

      {/* Connect Section */}
      <section id="contact">
        <Connect />
      </section>

      {/* Feture of mouse tracker */}
      <div>
        <MouseTracker />
      </div>
    </main>
  );
};

export default HomePage;
