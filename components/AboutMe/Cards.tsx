"use client";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

// motion
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const items = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CardsData = [
  {
    icon: GraduationCap,
    title: "Engineering Student",
    description:
      "Final-year student at Faculty of Engineering, Minia University — Communications & Electronics Engineering, Class of 2026.",
  },
  {
    icon: Briefcase,
    title: "Freelance Experience",
    description:
      "Completed 3+ real-world freelance projects, delivering production-ready React & Next.js applications for clients.",
  },
  {
    icon: Rocket,
    title: "Self-Driven Builder",
    description:
      "Continuously building personal projects and exploring modern web technologies to sharpen my skills and stay ahead.",
  },
];
const Cards = () => {
  return (
    <motion.div
      className=" flex flex-col gap-5  "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {CardsData.map((item, id: number) => (
        <motion.div variants={items} whileHover={{ x: 6 }} key={id}>
          <div className="card-glass riduesxl px-5 py-6 flex items-start gap-4 border-4 hover:border-primary/40 transition-colors cursor-default">
            <div className="w-12 h-12 ridueslg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="text-primary " size="42" />
            </div>
            <div>
              <h3 className="font-semibold text-xl md:text-2xl mb-2">
                {item.title}
                <span className=" ps-2 text-[12px] font-body text-primary/70">
                  0{id + 1}
                </span>
              </h3>

              <p className="text-muted-foreground text-sm font-body">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
