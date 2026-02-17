"use client";
import { CardImage } from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="section-padding  overflow-hidden">
      {/*  title  */}
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>
      </div>

      {/* projects cards */}
      <div>
        <CardImage />
      </div>
    </section>
  );
};

export default Projects;
