import Text from "../Hero/Text";
const AboutMe = () => {
  return (
    <div className="container">
      <div className=" container w-full  lg:py-10 flex flex-col items-center gap-8 md:flex-row md:justify-between  ">
        <div className=" w-full h-full ">
          <Text
            p1="About Me"
            title1="Turning ideas into"
            title12=" digital reality"
            section="about"
            p2="I'm Eslam Shaban — a passionate Frontend Developer and final-year Communications and Electronics Engineering student at Minia University. I specialize in building modern, responsive web applications with React, Next.js, and TypeScript."
            p3="Though I'm about to graduate in 2026, I've already shipped real freelance projects and built a growing portfolio of personal work. I love clean code, thoughtful UI/UX, and creating experiences that users enjoy."
          />
        </div>
        <div className=" w-full h-full "></div>
      </div>
    </div>
  );
};

export default AboutMe;
