"use client";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

interface TextType {
  p1: string;
  title1: string;
  title12: string;
  section: string;
  p2: string;
  p3: string;
}
const Text = ({ p1, title1, title12, section, p2, p3 }: TextType) => {
  return (
    <div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-primary font-medium tracking-widest uppercase text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {p1}
        </motion.p>
        <motion.h1
          className={`${section === "about" ? "text-4xl max-w-[570px] md:text-5xl font-bold" : "text-4xl sm:text-5xl md:text-7xl font-bold"} leading-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {title1} <span className="text-gradient">{title12}</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-lg font-body leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {p2}
        </motion.p>
        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-lg font-body leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {p3}
        </motion.p>

        <motion.div
          className={`${section === "about" ? " hidden" : "flex"}  flex-wrap items-center gap-3 pt-4`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-5 sm:px-6 py-3 rounded-lg font-medium text-foreground hover:border-primary hover:text-primary transition-colors text-sm sm:text-base"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className={`${section === "about" ? " hidden" : "flex"}  items-center gap-4 pt-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Text;
