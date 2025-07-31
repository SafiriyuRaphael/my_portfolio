import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import HeaderBackground from "../animations/HeaderBackground";
import DecorativeSvg from "../animations/DecorativeSvg";
import useView from "../../../../../hooks/inview";

const HeaderAbout = () => {
  const { containerVariants, itemVariants } = useView();
  // Refs for animations
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced scroll effect with multiple breakpoints
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  // Improved transform values for more noticeable but still elegant effect
  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 60]);
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.9, 0.7]
  );
  const headerScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.98, 0.95]
  );

  // Add more responsive springs with custom settings
  const springHeaderY = useSpring(headerY, {
    stiffness: 70,
    damping: 15,
    mass: 1.2,
  });

  const springHeaderScale = useSpring(headerScale, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Create multi-layered parallax effect with different speeds for different elements
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const springTitleY = useSpring(titleY, { stiffness: 60, damping: 20 });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const springTextY = useSpring(textY, { stiffness: 80, damping: 25 });

  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const springBadgeY = useSpring(badgeY, { stiffness: 90, damping: 15 });

  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.75]);
  const springDescriptionY = useSpring(descriptionY, {
    stiffness: 75,
    damping: 20,
  });

  // Add a subtle rotation effect for enhanced parallax
  const headerRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const springHeaderRotate = useSpring(headerRotate, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.section
      ref={headerRef}
      style={{
        y: springHeaderY,
        opacity: headerOpacity,
        scale: springHeaderScale,
        rotateX: springHeaderRotate,
        transformPerspective: "1000px",
      }}
      className="relative z-10 text-center mb-12 px-5 py-20 md:py-24 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <HeaderBackground />

      {/* Content container with enhanced layering */}
      <div className="relative z-10">
        {/* Badge with independent parallax */}
        <motion.div
          ref={badgeRef}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            y: springBadgeY,
            opacity: badgeOpacity,
          }}
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="inline-block bg-gradient-to-r from-[#fca31130] to-[#fca31110] backdrop-blur-sm text-[#fca311] px-6 py-3 rounded-full text-sm font-medium tracking-wider mb-6 border border-[#fca31140] shadow-lg shadow-[#fca31110]">
            DISCOVER MY STORY
          </span>
        </motion.div>

        {/* Main heading with enhanced parallax and gradient effect */}
        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            y: springTitleY,
            opacity: titleOpacity,
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, #fca311 50%, #ffffff 100%)",
            backgroundSize: isHovering ? "200% 200%" : "100% 100%",
            backgroundPosition: isHovering ? "100% 100%" : "0% 0%",
            transition: "background-position 0.8s ease",
          }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          About Me
          <motion.span
            className="absolute -inset-1 rounded-lg opacity-30 blur-md bg-[#fca31130]"
            animate={{
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.h1>

        {/* Content section with text parallax */}
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            y: springTextY,
            opacity: textOpacity,
          }}
          className="max-w-3xl mx-auto relative"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Hi, I'm{" "}
            <span
              className="text-[#fca311] relative inline-block"
              style={{ textShadow: "0 0 15px rgba(252, 163, 17, 0.3)" }}
            >
              Raphael
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fca311]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              />
            </span>{" "}
            — A Creative Developer with Vision
          </h2>

          {/* Description with enhanced typography and independent parallax */}
          <motion.p
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              y: springDescriptionY,
              opacity: descriptionOpacity,
            }}
          >
            I transform complex problems into{" "}
            <span className="text-white font-medium">
              elegant digital solutions
            </span>
            . With a passion for crafting{" "}
            <span className="text-white font-medium">
              immersive web experiences
            </span>
            , I blend artistic design with cutting-edge technology to create
            memorable, high-performing websites that{" "}
            <span className="italic text-[#fca311]">stand out</span>.
          </motion.p>

          {/* Decorative elements with their own subtle motion */}
          <motion.div
            style={{
              y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 40]), {
                stiffness: 65,
                damping: 18,
              }),
              opacity: useTransform(scrollYProgress, [0, 0.7], [1, 0.6]),
              rotate: useSpring(useTransform(scrollYProgress, [0, 1], [0, 5]), {
                stiffness: 55,
                damping: 12,
              }),
            }}
          >
            <DecorativeSvg />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeaderAbout;
