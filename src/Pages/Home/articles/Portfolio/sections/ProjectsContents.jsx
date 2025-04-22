import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../../../../../constant/portfolio";
import ProgressBar from "../animations/ProgressBar";
import TechIcon from "../animations/TechIcon";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiFramer,
  SiThreedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Github,
  Star,
  Eye,
  Zap,
  Sparkle,
} from "lucide-react";

const ProjectsContents = ({ currentIndex, setCurrentIndex }) => {
  const currentProject = PROJECTS[currentIndex];
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length
    );
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);
  return (
    <section
      className=" w-full p-6 md:p-12 flex flex-col justify-center relative overflow-y-auto"
      style={{
        background: `radial-gradient(circle at top right, ${currentProject.gradientFrom}, ${currentProject.gradientTo})`,
        maxHeight: ["50vh", "50vh", "100vh"], // Adjust based on screen size
      }}
    >
      <div className=" w-full z-50 relative flex items-center justify-center perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full flex items-center justify-center p-4"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Glowing border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-${currentProject.accentColor}-500 to-${currentProject.accentColor}-300 rounded-2xl opacity-70 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
              ></div>

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden z-10 bg-slate-900 h-full">
                <img
                  src={currentProject.img}
                  alt={currentProject.heading}
                  className="w-full h-full object-cover object-center transform transition-transform duration-1500 ease-out group-hover:scale-110"
                />

                {/* Overlay with frosted glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-${currentProject.accentColor}-400 animate-pulse`}
                      ></div>
                      <p className="uppercase tracking-wider text-xs text-white/70">
                        Featured Project
                      </p>
                    </div>
                    <h2
                      className={`text-2xl md:text-4xl font-bold mt-2 ${currentProject.textColor}`}
                    >
                      {currentProject.heading}
                    </h2>
                    <p className="text-white/80 text-sm md:text-base italic mt-1">
                      {currentProject.subheading}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-slate-800/30 to-transparent blur-3xl -top-20 -right-20 animate-slow-spin"></div>
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-slate-800/20 to-transparent blur-2xl bottom-20 -left-20 animate-slow-spin animation-delay-2000"></div>
      </div>

      {/* Ornamental lines */}
      <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Content container */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <motion.div
              className={`inline-block px-3 py-1 rounded-full bg-${currentProject.accentColor}-500/20 border border-${currentProject.accentColor}-500/30 backdrop-blur-sm`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span
                className={`text-xs font-medium ${currentProject.textColor}`}
              >
                {PROJECTS.findIndex(
                  (p) => p.heading === currentProject.heading
                ) + 1}{" "}
                / {PROJECTS.length}
              </span>
            </motion.div>

            {/* Project Description with sophisticated typography */}
            <div className="space-y-6">
              <motion.p
                className="text-gray-300 text-sm md:text-base leading-relaxed first-letter:float-left first-letter:text-4xl first-letter:mr-3 first-letter:font-light first-letter:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {currentProject.longDescription}
              </motion.p>
            </div>

            {/* Project Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-slate-800/30 border border-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <Sparkle className="size-4 text-yellow-400" />
                  <span className="text-lg font-bold text-white">
                    {currentProject.stats.features}
                  </span>
                </div>
                <p className="text-xs text-white/60 mt-1">Features</p>
              </div>
              <div className="bg-slate-800/30 border border-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-blue-400" />
                  <span className="text-lg font-bold text-white">
                    {currentProject.stats.optimizations}%
                  </span>
                </div>
                <p className="text-xs text-white/60 mt-1">Code Optimization</p>
              </div>
              <div className="bg-slate-800/30 border border-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">
                    {currentProject.stats.contributors}
                  </span>
                </div>
                <p className="text-xs text-white/60 mt-1">Contributors</p>
              </div>
            </motion.div>

            {/* Tech Stack with enhanced animations */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-gray-300 text-sm font-medium mb-4 uppercase tracking-wider">
                Built Using
              </h3>
              <div className="flex flex-wrap gap-4">
                {currentProject.tech.map((tech, idx) => {
                  let Icon;

                  switch (tech) {
                    case "React":
                      Icon = FaReact;
                      break;
                    case "TypeScript":
                      Icon = SiTypescript;
                      break;
                    case "JavaScript":
                      Icon = DiJavascript1;
                      break;
                    case "Tailwind CSS":
                      Icon = RiTailwindCssFill;
                      break;
                    case "Three.js":
                      Icon = SiThreedotjs;
                      break;
                    case "Next.js":
                      Icon = SiNextdotjs;
                      break;
                    case "Framer Motion":
                      Icon = SiFramer;
                      break;
                    default:
                      Icon = FaReact;
                  }

                  return (
                    <TechIcon
                      key={tech}
                      Icon={Icon}
                      label={tech}
                      delay={idx}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Action Buttons with enhanced interactive effects */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href={currentProject.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                      relative group flex items-center gap-2 overflow-hidden
                      bg-${currentProject.accentColor}-500/20 hover:bg-${currentProject.accentColor}-500/40 
                      backdrop-blur-sm text-white rounded-full px-8 py-4
                      transition-all duration-500 hover:shadow-glow
                      border border-${currentProject.accentColor}-500/30
                    `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-medium">Live Preview</span>
                <ExternalLink className="size-4 relative z-10" />
                <div
                  className={`
                      absolute bottom-0 left-0 h-full bg-${currentProject.accentColor}-500/30 
                      w-0 group-hover:w-full transition-all duration-500 ease-out
                    `}
                ></div>
              </motion.a>
              <motion.a
                href={currentProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                      relative group flex items-center gap-2 overflow-hidden
                      bg-white/10 hover:bg-white/20
                      backdrop-blur-sm text-white rounded-full px-8 py-4
                      transition-all duration-500 hover:shadow-glow
                      border border-white/10
                    `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-medium">Source Code</span>
                <Github className="size-4 relative z-10" />
                <div
                  className="
                      absolute bottom-0 left-0 h-full bg-white/10
                      w-0 group-hover:w-full transition-all duration-500 ease-out
                    "
                ></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls with elegant design */}
        <div className="mt-16 flex justify-between items-center relative">
          {/* Progress indicators */}
          <ProgressBar
            current={currentIndex}
            total={PROJECTS.length}
            onSelect={setCurrentIndex}
          />

          {/* Navigation buttons */}
          <div className="flex gap-4">
            <motion.button
              onClick={prevProject}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/5"
              disabled={isAnimating}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="size-5 text-white group-hover:text-white/80" />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/5"
              disabled={isAnimating}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="size-5 text-white group-hover:text-white/80" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContents;
