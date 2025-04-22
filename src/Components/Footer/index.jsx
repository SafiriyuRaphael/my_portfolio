import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ParticlesAnimations from "./animations/ParticlesAnimations";
import MagneticLink from "./animations/MagneticLink";
import DecorativeWave from "./animations/DecorativeWave";
import SparkleTrails from "./animations/SparkleTrails";
import Logo3DEffect from "./animations/Logo3DEffect";
import EasterEggAndMicrointeractions from "./animations/EasterEggAndMicrointeractions";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [interactionCount, setInteractionCount] = useState(0);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterHovered, setIsFooterHovered] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const themeColors = useMemo(
    () => [
      { primary: "#7493c0", secondary: "#d6e4f8", accent: "#2a4c7f" },
      { primary: "#c08401", secondary: "#faecd9", accent: "#4a2a00" },
      { primary: "#9c4dcc", secondary: "#f0e6f8", accent: "#5a1a7f" },
      { primary: "#4dcc9c", secondary: "#e6f8f0", accent: "#1a7f5a" },
    ],
    []
  );
  const [currentTheme, setCurrentTheme] = useState(0);

  // Visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setIsFooterHovered(true);
      } else {
        setIsFooterHovered(false);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  // Track mouse position relative to footer with improved precision
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const newPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setMousePosition(newPosition);
    setInteractionCount((prev) => prev + 1);
  };


  // Create variable for current theme colors
  const theme = themeColors[currentTheme];

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-between items-center pt-12 pb-8 border-t-2 relative overflow-hidden"
      style={{ borderColor: `${theme.accent}80` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFooterHovered(true)}
      onMouseLeave={() => setIsFooterHovered(false)}
    >
      {/* Enhanced Particles Animation */}
      <ParticlesAnimations
        currentTheme={currentTheme}
        themeColors={themeColors}
        mousePosition={mousePosition}
        footerRef={footerRef}
      />

      {/* Enhanced Radial Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial opacity-70 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.secondary}30, transparent 50%)`,
        }}
        animate={{
          scale: isFooterHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 3,
          repeat: isFooterHovered ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      <Logo3DEffect
        setCurrentTheme={setCurrentTheme}
        setShowEasterEgg={setShowEasterEgg}
        showEasterEgg={showEasterEgg}
        theme={theme} themeColors={themeColors}
      />

      {/* Enhanced Navigation Links with stagger effect */}
      <MagneticLink isVisible={isVisible} theme={theme} />

      {/* Enhanced Signature */}
      <motion.div
        className="mt-10 text-sm relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.p className="relative inline-block" whileHover={{ y: -2 }}>
          Built with
          <motion.span
            className="inline-block mx-1"
            style={{ color: theme.accent }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0],
              filter: [
                "drop-shadow(0 0 0px transparent)",
                `drop-shadow(0 0 5px ${theme.accent})`,
                "drop-shadow(0 0 0px transparent)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ❤
          </motion.span>
          by
          <motion.span
            className="ml-1 font-medium relative px-1"
            whileHover={{
              color: theme.primary,
              transition: { duration: 0.2 },
            }}
          >
            Safiriyu Rapheal
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5"
              style={{
                background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`,
              }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Enhanced decorative wave */}
      <DecorativeWave theme={theme} isVisible={isVisible} />

      {/* Floating elements that react to scroll and mouse */}

      <EasterEggAndMicrointeractions currentTheme={currentTheme} showEasterEgg={showEasterEgg} interactionCount={interactionCount} theme={theme} isFooterHovered={isFooterHovered} mousePosition={mousePosition}/>

      {/* Sparkle trails that follow the mouse */}
      {isFooterHovered &&
        Array.from({ length: 5 }).map((_, i) => (
          <SparkleTrails i={i} key={i} mousePosition={mousePosition} theme={theme} />
        ))}
    </motion.footer>
  );
};

export default Footer;
