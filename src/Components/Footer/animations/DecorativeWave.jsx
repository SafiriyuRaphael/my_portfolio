import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

const DecorativeWave = ({ theme, isVisible }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Listen for resize events to adjust the component dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Enhanced wave paths with more complex variants and smoother animation
  const wavePaths = useMemo(
    () => [
      {
        color: `${theme.secondary}30`,
        duration: 20,
        delay: 0,
        pathVariants: [
          "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0,0,0,321.39,56.44,321.39,56.44z",
          "M320.39,49.44c58-10.79,116.16-28.13,172-36.86,82.39-12.72,168.19-11.73,250.45,4.61C823.78,41,907.67,82,986.66,100.83c70.05,16.48,147.53,21.09,213.34,1V120H0V0c0,0,0,0,0,0C0,0,320.39,49.44,320.39,49.44z",
          "M319.39,40.44c58-8.79,116.16-22.13,172-30.86,82.39-10.72,168.19-9.73,250.45,6.61C823.78,36,909.67,80,988.66,96.83c68.05,14.48,145.53,16.09,211.34,2V120H0V0c0,0,0,0,0,0C0,0,319.39,40.44,319.39,40.44z",
          "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0,0,0,321.39,56.44,321.39,56.44z",
        ],
      },
      {
        color: `${theme.primary}20`,
        duration: 15,
        delay: 0.5,
        pathVariants: [
          "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0,0,0,321.39,56.44,321.39,56.44z",
          "M322.39,65.44c58-12.79,110.16-32.13,168-42.86,85.39-18.72,170.19-15.73,252.45,1.61C827.78,41,908.67,82,989.66,96.83c68.05,16.48,143.53,20.09,210.34,0V120H0V0c0,0,0,0,0,0C0,0,322.39,65.44,322.39,65.44z",
          "M320.39,50.44c58-10.79,115.16-28.13,170-36.86,84.39-13.72,167.19-12.73,249.45,3.61C820.78,36,908.67,78,987.66,94.83c69.05,15.48,144.53,19.09,212.34,2V120H0V0c0,0,0,0,0,0C0,0,320.39,50.44,320.39,50.44z",
        ],
      },
      {
        color: `${theme.accent || theme.primary}15`,
        duration: 18,
        delay: 1,
        pathVariants: [
          "M0,0V120H1200V3.4c-22.6,6.2-47.1,9.5-73.2,9.5c-32.4,0-64-7.2-98.1-21.6C975.2-32.1,905.7-1.8,855.2,15.2c-50.5,17-123,43.6-202.9,28.3c-80-15.3-131.5-51.1-195.7-64.3C389.5-34.4,311.3-8.9,235,13.5C158.7,35.8,88.9,58.7,0,0z",
          "M0,0V120H1200V3.4c-54.1,18.9-108.9,28.1-156.4,17.5c-65.5-14.6-120.8-47.2-183.8-39.1c-63,8.1-121.9,21.6-180.5,12.5C620.8-15.4,566.5-33.8,466.2-38.2c-100.2-4.4-190.5,44.9-277.5,75.3C101.7,67.5,39.8,44.2,0,0z",
          "M0,0V120H1200V3.4c-76.3,26.4-154.4,25.6-198.9,4.9C942.5-26.4,904.9-14.5,831,16.6c-74,31.1-125.2,9.6-188.6-21.5c-63.4-31.1-112.2-32.5-194.3-10.9c-82.2,21.6-162.9,19.3-255.2-16.6C100.7-56.6,45.2-35.2,0,0z",
        ],
      },
      {
        color: `${theme.secondary}10`,
        duration: 25,
        delay: 0.3,
        pathVariants: [
          "M0,0V120H1200V20.4c-67.7,15.6-135.4,15.6-203.1,0c-67.7-15.6-135.4-15.6-203.1,0c-67.7,15.6-135.4,15.6-203.1,0c-67.7-15.6-135.4-15.6-203.1,0c-67.7,15.6-135.4,15.6-203.1,0C117.7,4.8,50,4.8,0,20.4z",
          "M0,0V120H1200V10.4c-67.7,25.6-135.4,25.6-203.1,0c-67.7-25.6-135.4-25.6-203.1,0c-67.7,25.6-135.4,25.6-203.1,0c-67.7-25.6-135.4-25.6-203.1,0c-67.7,25.6-135.4,25.6-203.1,0C117.7-15.2,50-15.2,0,10.4z",
          "M0,0V120H1200V0.4c-67.7,35.6-135.4,35.6-203.1,0c-67.7-35.6-135.4-35.6-203.1,0c-67.7,35.6-135.4,35.6-203.1,0c-67.7-35.6-135.4-35.6-203.1,0c-67.7,35.6-135.4,35.6-203.1,0C117.7-35.2,50-35.2,0,0.4z",
        ],
      },
      // New additional wave layer with more complex path for extra visual interest
      {
        color: `${theme.accent || theme.primary}12`,
        duration: 22,
        delay: 1.5,
        pathVariants: [
          "M0,40V120H1200V40c-30-10-60-15-90-15s-60,5-90,15c-30,10-60,15-90,15s-60-5-90-15c-30-10-60-15-90-15s-60,5-90,15c-30,10-60,15-90,15s-60-5-90-15c-30-10-60-15-90-15s-60,5-90,15c-30,10-60,15-90,15S30,50,0,40z",
          "M0,20V120H1200V20c-30-20-60-30-90-30s-60,10-90,30c-30,20-60,30-90,30s-60-10-90-30c-30-20-60-30-90-30s-60,10-90,30c-30,20-60,30-90,30s-60-10-90-30c-30-20-60-30-90-30s-60,10-90,30c-30,20-60,30-90,30S30,40,0,20z",
          "M0,60V120H1200V60c-30-5-60-7.5-90-7.5s-60,2.5-90,7.5c-30,5-60,7.5-90,7.5s-60-2.5-90-7.5c-30-5-60-7.5-90-7.5s-60,2.5-90,7.5c-30,5-60,7.5-90,7.5s-60-2.5-90-7.5c-30-5-60-7.5-90-7.5s-60,2.5-90,7.5c-30,5-60,7.5-90,7.5S30,65,0,60z",
        ],
      },
    ],
    [theme]
  );

  // Enhanced parallax effect based on mouse movement with smoother responsiveness
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth mouse following effect
  useEffect(() => {
    let animationFrameId;

    const smoothFollow = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.05,
        y: prev.y + (targetPosition.y - prev.y) * 0.05,
      }));

      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    smoothFollow();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPosition]);

  // Entrance animation variants with enhanced timing
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: isVisible ? 1 : 0,
      transition: {
        duration: 1.5,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  // Create a parallax effect for scroll position
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate shimmer effect particles
  const shimmerParticles = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        size: 1 + Math.random() * 3,
        x: Math.random() * 1200,
        y: 70 + Math.random() * 50,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 w-full overflow-hidden z-0"
      style={{
        height: "20vh",
        minHeight: "150px",
        pointerEvents: "none", // Prevents the wave from blocking interactions
      }}
    >
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          filter: "drop-shadow(0 -5px 10px rgba(0,0,0,0.05))",
          transform: `translateY(${scrollY * 0.05}px)`, // Subtle parallax on scroll
        }}
      >
        <defs>
          {/* Enhanced gradients with more color stops */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`${theme.primary}25`} />
            <stop offset="25%" stopColor={`${theme.secondary}25`} />
            <stop
              offset="50%"
              stopColor={`${theme.accent || theme.primary}25`}
            />
            <stop offset="75%" stopColor={`${theme.secondary}25`} />
            <stop offset="100%" stopColor={`${theme.primary}25`} />
          </linearGradient>

          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`${theme.secondary}20`} />
            <stop offset="33%" stopColor={`${theme.primary}20`} />
            <stop
              offset="66%"
              stopColor={`${theme.accent || theme.primary}20`}
            />
            <stop offset="100%" stopColor={`${theme.secondary}20`} />
          </linearGradient>

          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor={`${theme.accent || theme.primary}15`}
            />
            <stop offset="50%" stopColor={`${theme.secondary}15`} />
            <stop
              offset="100%"
              stopColor={`${theme.accent || theme.primary}15`}
            />
          </linearGradient>

          {/* Radial gradient for particles */}
          <radialGradient
            id="particleGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor={`${theme.primary}80`} />
            <stop offset="100%" stopColor={`${theme.primary}00`} />
          </radialGradient>

          {/* Enhanced shadow filter */}
          <filter id="waveShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for highlights */}
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Enhanced background glow effect */}
        <motion.rect
          x="0"
          y="60"
          width="1200"
          height="60"
          fill={`${theme.primary}08`}
          animate={{
            y: [55, 50, 60, 55],
            height: [65, 70, 60, 65],
            opacity: [0.3, 0.4, 0.3, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Multiple wave layers with enhanced effects */}
        {wavePaths.map((wave, index) => (
          <motion.path
            key={index}
            fill={index < 3 ? `url(#waveGradient${index + 1})` : wave.color}
            filter={index === 0 ? "url(#waveShadow)" : ""}
            animate={{
              d: wave.pathVariants,
              x: mousePosition.x * (8 * (index + 1)),
              y: mousePosition.y * (8 * (index + 1)),
            }}
            transition={{
              d: {
                duration: wave.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              x: {
                type: "spring",
                stiffness: 20,
                damping: 30,
              },
              y: {
                type: "spring",
                stiffness: 20,
                damping: 30,
              },
            }}
            initial={{
              opacity: 1,
              y: 20,
            }}
            variants={{
              hidden: { opacity: 1, y: 20 },
              visible: {
                opacity: isVisible ? 0.9 : 0,
                y: 0,
                transition: {
                  duration: 1.2,
                  delay: wave.delay,
                  ease: "easeOut",
                },
              },
            }}
            style={{
              transformOrigin: "center",
              mixBlendMode: index === 0 ? "normal" : "soft-light",
            }}
          />
        ))}

        {/* Enhanced particle effect with motion trails */}
        {shimmerParticles.map((particle, i) => (
          <g key={`particle-group-${i}`}>
            {/* Particle glow */}
            <motion.circle
              key={`particle-glow-${i}`}
              r={particle.size * 2}
              fill={`${theme.primary}15`}
              filter="url(#glow)"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 1,
              }}
              animate={{
                x: [
                  null,
                  particle.x - 100 + Math.random() * 200,
                  particle.x - 100 + Math.random() * 200,
                  particle.x - 100 + Math.random() * 200,
                ],
                y: [
                  null,
                  particle.y - 10 + Math.random() * 20,
                  particle.y - 10 + Math.random() * 20,
                  particle.y - 10 + Math.random() * 20,
                ],
                opacity: isVisible ? [0, 0.3, 0.3, 0] : 0,
                scale: [1, 1.5, 1, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />

            {/* Main particle */}
            <motion.circle
              key={`particle-${i}`}
              r={particle.size}
              fill="url(#particleGradient)"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 1,
              }}
              animate={{
                x: [
                  null,
                  particle.x - 100 + Math.random() * 200,
                  particle.x - 100 + Math.random() * 200,
                  particle.x - 100 + Math.random() * 200,
                ],
                y: [
                  null,
                  particle.y - 10 + Math.random() * 20,
                  particle.y - 10 + Math.random() * 20,
                  particle.y - 10 + Math.random() * 20,
                ],
                opacity: isVisible ? [0, 0.9, 0.9, 0] : 0,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          </g>
        ))}

        {/* Add highlight accents that follow mouse movement */}
        <motion.circle
          r="50"
          fill={`${theme.primary}10`}
          filter="url(#glow)"
          animate={{
            x: 600 + mousePosition.x * 300,
            y: 60 + mousePosition.y * 40,
            opacity: isVisible ? [0.2, 0.3, 0.2] : 0,
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default DecorativeWave;
