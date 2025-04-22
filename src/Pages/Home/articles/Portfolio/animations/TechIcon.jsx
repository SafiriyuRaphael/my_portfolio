import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TechIcon = ({ Icon, label, delay = 0 }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iconRef.current.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={iconRef}
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 + 0.3, duration: 0.5 }}
    >
      <div
        className={`
           bg-slate-800/60 backdrop-blur-lg p-3 rounded-2xl 
           shadow-lg transition-all duration-300 
           group-hover:scale-110 group-hover:shadow-xl 
           border 
           group-hover:bg-slate-800/90
         `}
      >
        <Icon className="md:size-8 size-5 text-gray-100 " />
      </div>
      <motion.span
        className="text-xs md:text-sm mt-2 font-medium tracking-wider"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default TechIcon;
