import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const EasterEggAndMicrointeractions = ({
  currentTheme,
  showEasterEgg,
  interactionCount,
  theme,
  isFooterHovered,
  mousePosition,
}) => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={`floating-${index}`}
            className="absolute rounded-full"
            style={{
              width: 10 + index * 15,
              height: 10 + index * 15,
              backgroundColor: `${theme.primary}${20 - index * 5}`,
              left: `${10 + index * 20}%`,
              top: `${20 + index * 15}%`,
              filter: `blur(${index + 2}px)`,
            }}
            animate={{
              x: [0, index % 2 ? 20 : -20, 0],
              y: [0, index % 3 ? 30 : -30, 0],
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + index * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}
      </div>

      {/* Interactive Easter Egg - Secret Message */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 12 }}
            className="absolute bottom-16 left-0 right-0 flex justify-center z-50"
          >
            <motion.div
              className="px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              style={{
                backgroundColor: theme.accent + "ee",
                color: theme.secondary,
              }}
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  `0 0 0px ${theme.primary}00`,
                  `0 0 15px ${theme.primary}80`,
                  `0 0 0px ${theme.primary}00`,
                ],
              }}
              transition={{ duration: 2, repeat: 1 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
              <span>
                Theme changed to{" "}
                {currentTheme === 0
                  ? "Blue"
                  : currentTheme === 1
                  ? "Gold"
                  : currentTheme === 2
                  ? "Purple"
                  : "Teal"}
                !
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio feedback (not actual sound but visual indicator) */}
      <AnimatePresence>
        {isFooterHovered &&
          interactionCount % 30 === 0 &&
          interactionCount > 0 && (
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                x: "-50%",
                y: "-50%",
                zIndex: 40,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full"
                style={{ backgroundColor: theme.accent + "20" }}
                animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggAndMicrointeractions;
