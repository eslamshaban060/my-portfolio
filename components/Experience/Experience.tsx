"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants/data";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10 items-center"
                >
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow ring-4 ring-background z-10`}
                  />
                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="card-glass p-6 rounded-2xl hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2 md:justify-start">
                        <Briefcase size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {exp.company}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-start">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
