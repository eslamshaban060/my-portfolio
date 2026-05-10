"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects } from "@/constants/data";

const FeaturedProject = () => {
  const project = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 inline-flex items-center gap-2">
            <Sparkles size={14} /> Spotlight
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10 items-center card-glass rounded-3xl overflow-hidden p-6 lg:p-10"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 mix-blend-overlay" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
              Highlighted work
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            <ul className="space-y-2 mb-6">
              {[
                "Optimized for Core Web Vitals",
                "Fully responsive & accessible",
                "Internationalization-ready (RTL)",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.live ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Visit live <ArrowUpRight size={16} />
              </a>
              <a
                href={project.github ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition"
              >
                <Github size={16} /> Source
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
