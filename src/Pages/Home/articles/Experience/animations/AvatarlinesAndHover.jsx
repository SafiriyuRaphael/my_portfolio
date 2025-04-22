import { motion } from "framer-motion";

const AvatarlinesAndHover = ({activeSection}) => {
  return (
    <>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r opacity-70 group-hover:opacity-100 transition-opacity duration-700 glow-effect" />

      <motion.div
        className="absolute inset-0 opacity-30 z-1"
        style={{
          background:
            activeSection === "skills"
              ? "radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 70%)"
              : activeSection === "education"
              ? "radial-gradient(circle at center right, rgba(245,158,11,0.15), transparent 70%)"
              : activeSection === "projects"
              ? "radial-gradient(circle at bottom center, rgba(99,102,241,0.15), transparent 70%)"
              : "none",
        }}
        animate={{
          opacity: activeSection ? 0.6 : 0.3,
        }}
        transition={{ duration: 1 }}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-amber-300/20 via-slate-100/20 to-blue-300/20 opacity-40 group-hover:opacity-80 transition-opacity duration-700" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-500/20 rounded-lg transform rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-blue-500/20 rounded-full animate-pulse" />
    </>
  );
};

export default AvatarlinesAndHover;
