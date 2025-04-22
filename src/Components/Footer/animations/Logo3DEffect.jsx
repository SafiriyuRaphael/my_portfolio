import { AnimatePresence, motion } from "framer-motion";
import useView from "../../../hooks/inview";
import { useRef, useState } from "react";

const Logo3DEffect = ({setShowEasterEgg, setCurrentTheme, showEasterEgg, theme, themeColors}) => {
  const { glowVariants, logoVariants } = useView();
  const [hoverLogo, setHoverLogo] = useState(false);
  const clickCount = useRef(0);

  const handleLogoClick = () => {
    clickCount.current += 1;

    if (clickCount.current >= 3) {
      setShowEasterEgg(true);
      clickCount.current = 0;

      // Change color theme on easter egg activation
      setCurrentTheme((prev) => (prev + 1) % themeColors.length);

      // Clear easter egg after delay
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };
  return (
    <motion.div
      className="flex flex-col items-center relative z-10 perspective-800"
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={logoVariants}
      onMouseEnter={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={handleLogoClick}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={glowVariants}
        className="absolute inset-0 rounded-full filter z-0"
        style={{ backgroundColor: theme.primary }}
      />

      <div
        className="rounded-full shadow-lg p-2 relative z-10 overflow-hidden transform-style-3d"
        style={{ backgroundColor: theme.primary }}
      >
        <motion.div
          className="overflow-hidden rounded-full"
          animate={{
            boxShadow: hoverLogo
              ? `0 0 30px ${theme.primary}`
              : `0 0 5px ${theme.primary}80`,
            rotateX: hoverLogo ? [0, 5, -5, 0] : 0,
            rotateY: hoverLogo ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: hoverLogo ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          <motion.img
            src="/logobg.png"
            alt="Logo"
            className="h-20 w-20 object-cover"
            animate={{
              scale: hoverLogo ? [1, 1.05, 0.95, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: hoverLogo ? Infinity : 0,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      <motion.p
        className="font-bold mt-3 text-2xl relative"
        animate={{
          textShadow: hoverLogo
            ? `0 0 15px ${theme.primary}`
            : `0 0 0px ${theme.primary}00`,
        }}
      >
        <motion.span
          className="bg-clip-text text-transparent relative inline-block"
          style={{
            backgroundImage: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          RaphNexus
        </motion.span>

        {/* Enhanced decorative elements */}
        <motion.span
          className="absolute -left-6 -top-1 text-lg opacity-70"
          style={{ color: theme.accent }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          }}
        >
          ✦
        </motion.span>
        <motion.span
          className="absolute -right-6 -bottom-1 text-lg opacity-70"
          style={{ color: theme.primary }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            },
          }}
        >
          ✦
        </motion.span>
      </motion.p>

      {/* Easter egg animation */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="absolute z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
              style={{ backgroundColor: theme.primary }}
              animate={{
                scale: [1, 5],
                opacity: [0.8, 0],
              }}
              transition={{ duration: 1.5 }}
            />
            <motion.div
              className="px-4 py-2 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: theme.accent }}
              animate={{ y: [-50, -80] }}
              transition={{ duration: 1 }}
            >
              Theme Changed!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Logo3DEffect;
