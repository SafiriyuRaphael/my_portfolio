import { motion } from "framer-motion";

const DecorativeSvg = () => {
  return (
    <motion.div
      className="absolute -bottom-16 left-1/2 w-24 h-24 -translate-x-1/2 opacity-20 pointer-events-none"
      initial={{ opacity: 1, scale: 0.8 }}
      animate={{ opacity: 1.2, scale: 1 }}
      transition={{ delay: 1.5, duration: 1.2 }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(50 50) rotate(90) scale(50)"
          >
            <stop stopColor="#FCA311" />
            <stop offset="1" stopColor="#FCA311" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default DecorativeSvg;
