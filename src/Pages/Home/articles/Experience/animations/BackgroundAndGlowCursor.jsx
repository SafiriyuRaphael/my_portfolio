import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const BackgroundAndGlowCursor = ({
  mousePosition,
  isHovering = false,
  scrollProgress = 0,
}) => {
  // Refs for advanced animations
  const glowRef = useRef(null);

  // Effect for advanced cursor interactions
  useEffect(() => {
    const handleMouseMove = () => {
      if (!glowRef.current) return;

      // Make the glow effects more dramatic with fast mouse movements
      const intensity = Math.min(1, 20);
      if (glowRef.current) {
        glowRef.current.style.transform = `scale(${1 + intensity * 0.5})`;
        glowRef.current.style.opacity = 0.3 + intensity * 0.4;
      }
    };

    handleMouseMove();

    // Cleanup
    return () => {};
  }, [mousePosition]);

  return (
    <>
      {/* Deep background gradient that shifts with scroll */}
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% ${
            50 + scrollProgress * 20
          }%, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 1))`,
          transform: `scale(${1 + scrollProgress * 0.1})`,
        }}
      />

      {/* Responsive ambient light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle at ${
            50 + Math.sin(scrollProgress * Math.PI) * 20
          }% ${
            50 + Math.cos(scrollProgress * Math.PI) * 20
          }%, rgba(251, 191, 36, 0.15), transparent 60%)`,
        }}
      />

      {/* Interactive primary glow cursor effect */}
      <motion.div
        ref={glowRef}
        className="absolute rounded-full pointer-events-none z-10"
        style={{
          width: isHovering ? 320 : 280,
          height: isHovering ? 320 : 280,
          background: `radial-gradient(circle, rgba(251,191,36,${
            isHovering ? 0.4 : 0.3
          }) 0%, rgba(251,191,36,0) ${isHovering ? 75 : 70}%)`,
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
          opacity: isHovering ? 0.45 : 0.35,
        }}
        animate={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
          scale: [1, 1.05, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />

      {/* Secondary smaller cursor effect for added depth */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-10"
        style={{
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,191,36,0) 70%)",
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
          opacity: 1.6,
        }}
        animate={{
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default BackgroundAndGlowCursor;
