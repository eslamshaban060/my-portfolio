"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseTracker = () => {
  const [postion, setPostion] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMovement = (e: MouseEvent) => {
      setPostion({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMovement);
    return () => {
      window.removeEventListener("mousemove", mouseMovement);
    };
  }, []);

  const mousemovement = {
    start: { x: postion.x - 5, y: postion.y - 5 },
    move: { x: postion.x, y: postion.y },
  };
  return (
    <div>
      <motion.div
        initial="start"
        animate="move"
        className="newMouse fixed pointer-events-none rounded-full border-card  border-3  z-[1000] flex justify-center items-center w-10 h-10 top-0 left-0"
        variants={mousemovement}
      >
        <div className=" w-3 h-3 bg-primary  rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default MouseTracker;
