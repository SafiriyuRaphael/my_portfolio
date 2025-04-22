import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ParticlesAnimations = ({currentTheme, themeColors, mousePosition, footerRef}) => {

      const particlesRef = useRef([]);


  // Generate particles with improved characteristics
  useEffect(() => {
    const particleCount = 80; // Increased particle count
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const size = Math.random() * 8 + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const depth = Math.random();
      const theme = themeColors[currentTheme];
      const colorOptions = [
        theme.primary,
        theme.secondary,
        theme.accent,
        "#ffffff",
        "#f0f0f0",
      ];
      
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        originalSize: size,
        depth,
        opacity,
        originalOpacity: opacity,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        velocity: {
          x: (Math.random() - 0.5) * (0.05 + depth * 0.15),
          y: (Math.random() - 0.5) * (0.05 + depth * 0.15),
        },
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        shape: Math.random() > 0.7 
          ? "circle" 
          : Math.random() > 0.5 
            ? "square" 
            : Math.random() > 0.5 
              ? "triangle" 
              : "star",
      };
    });
  }, [currentTheme, themeColors]);


    // Animate particles
useEffect(() => {
    let animationFrameId;
    
    const animateParticles = () => {
      if (!footerRef.current) {
        animationFrameId = requestAnimationFrame(animateParticles);
        return;
      }
      
      particlesRef.current = particlesRef.current.map(particle => {
        // Update position based on velocity
        let x = particle.x + particle.velocity.x;
        let y = particle.y + particle.velocity.y;
        
        // Bounce off walls
        if (x <= 0 || x >= 100) particle.velocity.x *= -1;
        if (y <= 0 || y >= 100) particle.velocity.y *= -1;
        
        // Mouse interaction - particles are attracted to mouse
        if (mousePosition.x && mousePosition.y) {
          const footerRect = footerRef.current.getBoundingClientRect();
          const mouseX = (mousePosition.x / footerRect.width) * 100;
          const mouseY = (mousePosition.y / footerRect.height) * 100;
          
          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only affect particles within range
          if (distance < 30) {
            particle.velocity.x += dx * 0.001;
            particle.velocity.y += dy * 0.001;
          }
        }
        
        // Apply some drag
        particle.velocity.x *= 0.99;
        particle.velocity.y *= 0.99;
        
        return {
          ...particle,
          x: x <= 0 ? 0.1 : x >= 100 ? 99.9 : x,
          y: y <= 0 ? 0.1 : y >= 100 ? 99.9 : y
        };
      });
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <div className="absolute inset-0 pointer-events-none">
    {particlesRef.current.map((particle, i) => {
      // Render different shapes based on the particle's shape property
      let shapeElement;
      
      switch(particle.shape) {
        case "square":
          shapeElement = (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                zIndex: Math.floor(particle.depth * 10),
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          );
          break;
        case "triangle":
          shapeElement = (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: 0,
                height: 0,
                borderLeft: `${particle.size / 2}px solid transparent`,
                borderRight: `${particle.size / 2}px solid transparent`,
                borderBottom: `${particle.size}px solid ${particle.color}`,
                opacity: particle.opacity,
                zIndex: Math.floor(particle.depth * 10),
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          );
          break;
        case "star":
          shapeElement = (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                zIndex: Math.floor(particle.depth * 10),
                transform: `rotate(${particle.rotation}deg)`,
              }}
            >
              <svg
                width={particle.size}
                height={particle.size}
                viewBox="0 0 24 24"
                fill={particle.color}
              >
                <path d="M12 0l2.5 9h9.5l-7.5 5.5 3 9.5-7.5-5.5-7.5 5.5 3-9.5-7.5-5.5h9.5z" />
              </svg>
            </motion.div>
          );
          break;
        default:
          shapeElement = (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                borderRadius: "50%",
                opacity: particle.opacity,
                zIndex: Math.floor(particle.depth * 10),
                transform: `rotate(${particle.rotation}deg)`,
                boxShadow: particle.size > 5 ? `0 0 ${particle.size * 2}px ${particle.color}40` : 'none',
              }}
            />
          );
      }
      
      return shapeElement;
    })}
  </div>
  )
}

export default ParticlesAnimations
