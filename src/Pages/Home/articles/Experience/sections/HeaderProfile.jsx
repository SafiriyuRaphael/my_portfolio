import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeaderProfile = () => {

  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });


  
    const headerVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smoother motion
        },
      },
    };

  const titleChars = "My Experience".split("");

  return (
    <motion.section
      ref={headerRef}
      className="mb-24 relative"
      variants={headerVariants}
    >
      <div className="flex flex-col items-center">
        <motion.span
          className="text-amber-300 text-lg mb-4 font-semibold tracking-wider uppercase relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: headerInView ? 1 : 0,
            y: headerInView ? 0 : -20,
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="relative z-10">Career Path</span>
          <motion.span
            className="absolute inset-0 bg-amber-500/20 blur-md rounded-lg" // Increased opacity
            animate={{
              opacity: [0.4, 0.8, 0.4], // Increased opacity
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.span>

        {/* Animated title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center">
          <div className="flex justify-center overflow-hidden">
            {titleChars.map((char, index) => (
              <motion.span
                key={`title-${index}`}
                className={
                  char === " "
                    ? "mr-4"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600"
                }
                initial={{ y: 80, opacity: 0 }}
                animate={
                  headerInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </h2>

        <motion.div
          className="mt-7 h-1.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 rounded-full relative overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={
            headerInView ? { width: 180, opacity: 1 } : { width: 0, opacity: 0 }
          }
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-white/50"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </motion.div>

        <motion.p
          className="mt-8 text-slate-300 text-center max-w-xl text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Crafting digital experiences with a blend of technical expertise and
          creative passion. Explore my journey through skills, education, and
          projects.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeaderProfile;
