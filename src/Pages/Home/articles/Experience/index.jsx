import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import BackgroundAndGlowCursor from "./animations/BackgroundAndGlowCursor";
import AvatarContainer3D from "./sections/AvatarContainer3D";
import SkillsInfo from "./sections/SkillsInfo";
import EducationInfo from "./sections/EducationInfo";
import ProjectsInfo from "./sections/ProjectsInfo";
import HeaderProfile from "./sections/HeaderProfile";

const Experience = () => {
  const [anime, setAnime] = useState("default");
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Refs for scroll animations
  const experienceRef = useRef(null);
  const containerMouseRef = useRef(null);

  // Initialize mouse position to center of screen
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [mouseMoved, setMouseMoved] = useState(false);

  const [containerRef, containerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Handle scroll for parallax and progress effects
  useEffect(() => {
    const handleScroll = () => {
      if (!experienceRef.current) return;

      const rect = experienceRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(
        0,
        Math.min(1, 1 - (rect.bottom - window.innerHeight) / rect.height)
      );

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced mouse tracking with velocity detection
  const prevMousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerMouseRef.current) return;

    const rect = containerMouseRef.current.getBoundingClientRect();
    const newPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setMousePosition(newPos);
    prevMousePos.current = newPos;

    if (!mouseMoved) setMouseMoved(true);
  };

  // Reset animation when no section is hovered
  useEffect(() => {
    if (activeSection === null) {
      setAnime("default");
    }
  }, [activeSection]);

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Initialize positions on first render
  useEffect(() => {
    const setInitialPosition = () => {
      if (typeof window !== "undefined" && experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        setMousePosition({
          x: rect.width / 2,
          y: rect.height / 2,
        });
        prevMousePos.current = {
          x: rect.width / 2,
          y: rect.height / 2,
        };
      }
    };

    setInitialPosition();
  }, []);

  return (
    <article
      ref={(el) => {
        experienceRef.current = el;
        containerMouseRef.current = el; // Connect both refs to the same element
      }}
      className="w-full py-32 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced background elements */}
      <BackgroundAndGlowCursor
        mousePosition={mousePosition}
        isHovering={isHovering}
        scrollProgress={scrollProgress}
      />

      <motion.div
        ref={containerRef}
        className="max-w-7xl mx-auto relative z-20" // Increased z-index
        variants={containerVariants}
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
      >
        <HeaderProfile />

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          <AvatarContainer3D activeSection={activeSection} anime={anime} />

          {/* Experience Sections */}
          <motion.section className="lg:w-1/2 flex flex-col gap-8">
            {/* Skills Section */}
            <SkillsInfo
              setActiveSection={setActiveSection}
              setAnime={setAnime}
            />

            {/* Education Section */}
            <EducationInfo
              setActiveSection={setActiveSection}
              setAnime={setAnime}
            />

            {/* Projects Section */}
            <ProjectsInfo
              setActiveSection={setActiveSection}
              setAnime={setAnime}
            />
          </motion.section>
        </div>
      </motion.div>
    </article>
  );
};

export default Experience;
