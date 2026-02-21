"use client";
import { motion } from "framer-motion";
import { CardsData } from "@/constants/data";

// motion
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const items = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
            <div className="w-12 h-12 ridueslg  flex items-center justify-center flex-shrink-0">
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
