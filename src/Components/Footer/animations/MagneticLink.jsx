import { AnimatePresence, motion } from "framer-motion";
import { NAVLINK } from "../../../constant/navLink";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const MagneticLink = ({ isVisible, theme }) => {
  const [activeLink, setActiveLink] = useState(null);

  // Enhanced magnetic link effect with acceleration/deceleration
  const magneticLinkEffect = (e, index) => {
    const linkElement = e.currentTarget;
    const rect = linkElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Calculate distance from center to determine effect strength
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = Math.max(rect.width, rect.height);
    const strength = Math.max(0, 1 - distance / maxDistance);

    // Apply non-linear transformation for more organic feel
    const moveX = distanceX * 0.4 * strength * strength;
    const moveY = distanceY * 0.4 * strength * strength;

    linkElement.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${
      1 + strength * 0.1
    })`;
    setActiveLink(index);
  };

  const resetMagneticEffect = (e) => {
    e.currentTarget.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
    setActiveLink(null);
  };
  return (
    <motion.ul
      className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 relative z-10"
      initial={{ opacity: 1 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 1 }}
      transition={{ delay: 0.3, staggerChildren: 0.1 }}
    >
      {NAVLINK.map((link, index) => (
        <motion.li
          key={index}
          initial={{ y: 20, opacity: 1 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative perspective-400"
          onMouseMove={(e) => magneticLinkEffect(e, index)}
          onMouseLeave={resetMagneticEffect}
        >
          <HashLink
            smooth={true}
            to={link.to}
            className="relative px-3 py-2 transition-colors duration-300 transform-style-3d"
            style={{
              color: activeLink === index ? theme.primary : "currentColor",
            }}
          >
            <motion.span className="relative z-10">{link.label}</motion.span>

            {/* Enhanced animated underline */}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 rounded-full z-0"
              style={{ backgroundColor: theme.primary }}
              initial={{ width: "0%", left: "50%", right: "50%" }}
              animate={{
                width: activeLink === index ? "100%" : "0%",
                left: activeLink === index ? "0%" : "50%",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Background hover effect */}
            <motion.span
              className="absolute inset-0 rounded-lg -z-10"
              initial={{ opacity: 1 }}
              animate={{
                opacity: activeLink === index ? 0.1 : 0,
                scale: activeLink === index ? 1.05 : 1,
              }}
              style={{ backgroundColor: theme.primary }}
              transition={{ duration: 0.2 }}
            />

            {/* Enhanced magnetic hover effect indicator */}
            <AnimatePresence>
              {activeLink === index && (
                <motion.span
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
              )}
            </AnimatePresence>
          </HashLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MagneticLink;
