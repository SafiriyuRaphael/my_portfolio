import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import AnimatedStarParticles from "./animations/AnimatedStarParticles";
import AmbientBackground from "./animations/AmbientBackground";
import ProjectsContents from "./sections/ProjectsContents";
import ProjectVisual from "./sections/ProjectVisual";

// Main portfolio component with enhanced visuals while keeping original structure
const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Enhanced parallax effect with better values
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7]
  );

  return (
    <article>
      <h2 className="text-4xl font-bold text-amber-500 text-center mt-16 pb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
        Featured Projects
      </h2>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden min-h-screen"
      >
        {/* Keeping your original background components */}
        <AmbientBackground />
        <AnimatedStarParticles />

        {/* Main Content with improved animation */}
        <motion.div
          className="relative z-10 grid md:grid-cols-2 min-h-screen w-full max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
            exit: { opacity: 1, transition: { duration: 0.5 } },
          }}
          style={{ y, opacity }}
        >
          {/* Left Column - Keeping your original component */}
          <ProjectVisual currentIndex={currentIndex} />

          {/* Right Column - Keeping your original component */}
          <ProjectsContents
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </motion.div>
      </div>
    </article>
  );
};

// Preload 3D models and textures for smooth experience
useGLTF.preload("/animations/computer.glb");

export default Portfolio;
