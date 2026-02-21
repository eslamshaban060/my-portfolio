"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "@/constants/data";
import Image from "next/image";

const duplicatedSkills = [...skills, ...skills];

const SkillsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="section-padding bg-card/30 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="container mx-auto">
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={!isPaused ? { x: ["0%", "-50%"] } : { x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedSkills.map((skill, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl card-glass flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={1}
                    height={1}
                  />
                  <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - reverse */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={!isPaused ? { x: ["-50%", "0%"] } : { x: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...duplicatedSkills].reverse().map((skill, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl card-glass flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={1}
                    height={1}
                  />
                  <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
