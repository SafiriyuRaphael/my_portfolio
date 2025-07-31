import { motion } from "framer-motion";
import React from "react";

const UltraLine = () => {
  return (
    <motion.svg
      className="absolute w-full -bottom-1 left-0"
      viewBox="0 0 200 8"
      initial={{ pathLength: 0, opacity: 1 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <path
        d="M 0 4 C 50 0, 150 0, 200 4"
        stroke="#f59e0b"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default UltraLine;
