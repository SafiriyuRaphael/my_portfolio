import { AnimatePresence, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import UltraLine from "../animations/UltraLine";
import { useEffect, useState } from "react";
import { ICONSTACKS, SKILLS } from "../../../../../constant/home";
import { GithubIcon, ArrowRight } from "lucide-react";

const LeftContentContainer = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Enhanced skill switching animation with categories
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % SKILLS.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [SKILLS.length]);
  return (
    <motion.section
      className="w-full lg:w-1/2 flex flex-col justify-center py-16 lg:py-0 hero-content"
      initial={{ opacity: 1, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="relative overflow-hidden px-6 py-2 rounded-full inline-flex items-center gap-2">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30"></span>
            <span className="relative text-lg font-medium bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Web Designer & Developer
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I Create <span className="text-amber-500">Digital</span>
          <br />
          Experiences That{" "}
          <span className="relative inline-block">
            Matter
            <UltraLine />
          </span>
        </motion.h1>

        <motion.div
          className="mt-10 h-16 flex items-center"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentSkillIndex}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-2xl md:text-3xl font-bold mr-3">
                  Expert in
                </span>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-amber-500">
                    {SKILLS[currentSkillIndex].text}
                  </span>
                  <span className="text-sm text-amber-400/70">
                    {SKILLS[currentSkillIndex].category}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="mt-8 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I'm <span className="font-semibold text-white">Rapheal</span>,
          transforming ideas into exceptional digital solutions. With a unique
          blend of creativity and technical expertise, I craft engaging websites
          and applications that deliver outstanding user experiences and drive
          measurable growth.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-5"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <HashLink to="/#contact" smooth={(el) => scrollWithOffset(el)}>
            <motion.button
              className="group relative flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-out shadow-lg shadow-amber-500/20 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                Start a Project
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          </HashLink>

          <a
            href="https://github.com/SafiriyuRaphael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group relative flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-out overflow-hidden"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-white/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                <GithubIcon className="size-5" />
                GitHub Profile
              </span>
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex -space-x-4">
            {ICONSTACKS.map((icons, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=" z-30"
              >
                <img
                  src={`${icons}`}
                  alt={`icons-${i}`}
                  className="h-10 w-10 object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">
              Skilled with modern technologies
            </p>
            <p className="text-white font-medium">
              JavaScript • React • Node.js • Next.js
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LeftContentContainer;
