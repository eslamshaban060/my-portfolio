"use client";
import { ContactData } from "@/constants/data";
import { motion } from "framer-motion";
const Text = () => {
  return (
    <div>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted-foreground font-body leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let's build something great
          together.
        </p>

        <div className="space-y-4">
          {ContactData.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={18} />
              </div>
              <span className="text-muted-foreground font-body">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Text;
