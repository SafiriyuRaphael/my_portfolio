import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { SKILLS } from "../../../../../constant/experience";
import useView from "../../../../../hooks/inview";

const SkillsInfo = ({ setActiveSection, setAnime }) => {
  const { headerAnimation } = useView();
  return (
    <motion.section
      className="p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm w-full relative overflow-hidden group shadow-xl border border-slate-700/40"
      onMouseEnter={() => {
        setAnime("anime1");
        setActiveSection("skills");
      }}
      onMouseLeave={() => setActiveSection(null)}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Glowing accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 group-hover:h-full transition-all duration-700 rounded-l" />

      <motion.h3
        className="text-2xl font-bold mb-4 text-white flex items-center relative z-10"
        {...headerAnimation}
      >
        <span className="mr-3 text-blue-400 bg-blue-400/10 p-2 rounded-lg">
          <DollarSign />
        </span>
        Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200 relative z-10">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-slate-700/30 transition-colors"
            initial={{ opacity: 1, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsInfo;
