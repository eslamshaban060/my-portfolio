"use client";
import { motion } from "framer-motion";
import Form from "./Form";
import Text from "./Text";
const Connect = () => {
  return (
    <div className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Text />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
