"use client";
import { CardImage } from "./Card";
import { motion } from "framer-motion";
import { projects } from "@/constants/data";
import { useMediaQuery } from "@react-hookz/web";
import { useState } from "react";

const Projects = () => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const itemsPerLoad = isSmallScreen ? 2 : 4;
  const [visibleCount, setVisibleCount] = useState(itemsPerLoad);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerLoad);
  };
  return (
    <div className="section-padding  overflow-hidden">
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
      <div className=" grid   grid-cols-1  gap-y-8 md:gap-x-8 md:grid-cols-2">
        {projects.slice(0, visibleCount).map((prject, id) => (
          <div
            className="group  rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            style={{ animation: `fade-up 0.6s ease-out ${id * 0.12}s both` }}
            key={id}
          >
            <CardImage data={prject} />
          </div>
        ))}
      </div>
      {/* Load More Button */}
      {visibleCount < projects.length && (
        <div className="text-center mt-10">
          <button
            className="px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
