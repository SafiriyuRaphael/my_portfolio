import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.aside
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <p className="text-sm text-gray-400 mb-2 tracking-wider">SCROLL DOWN</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/10"
      >
        <ChevronDown className="text-amber-500" />
      </motion.div>
    </motion.aside>
  );
};

export default ScrollIndicator;
