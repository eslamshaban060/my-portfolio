"use client";
import { motion } from "framer-motion";
import profileAvatar from "../../assets/profile-avatar.png";
import ParticlesBackground from "./ParticlesBackground";
import Image from "next/image";
import Text from "./Text";
const HeroSection = () => {
  return (
    <div className=" min-h-screen flex items-center relative section-padding overflow-hidden">
      {/* Particles Background */}
      <div className="  bg-background/30">
        <ParticlesBackground />
      </div>
      <div className=" mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <Text
              p1="Frontend Developer"
              title1="Hi, I'm"
              title12="Eslam Shaban"
              section="hero"
              p2="I craft modern, performant web applications using React and Next.js.
              Passionate about clean code, beautiful interfaces, and seamless user
              experiences."
              p3=""
            />
          </div>

          {/* Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 ridues2xl overflow-hidden border-2 border-border glow"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={profileAvatar}
                  alt="Eslam Shaban"
                  className="w-full h-full object-cover"
                  loading="eager"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary ridues2xl -z-10"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 border border-primary/30 riduesxl -z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-60px] sm:bottom-0 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
