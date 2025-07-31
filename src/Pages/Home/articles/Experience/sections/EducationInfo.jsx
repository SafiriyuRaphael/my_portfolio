import { motion } from "framer-motion";
import { EDUCATION } from "../../../../../constant/experience";
import useView from "../../../../../hooks/inview";
import { GraduationCap, User } from "lucide-react";

const EducationInfo = ({ setActiveSection, setAnime }) => {
  const { headerAnimation } = useView();

  return (
    <motion.section
      className="p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm w-full relative overflow-hidden group shadow-xl border border-slate-700/40"
      onMouseEnter={() => {
        setAnime("anime2");
        setActiveSection("education");
      }}
      onMouseLeave={() => setActiveSection(null)}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Glowing accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:h-full transition-all duration-700 rounded-l" />

      <motion.h3
        className="text-2xl font-bold mb-4 text-white flex items-center relative z-10"
        {...headerAnimation}
      >
        <span className="mr-3 text-amber-400 bg-amber-400/10 p-2 rounded-lg">
          <GraduationCap />
        </span>
        Education
      </motion.h3>

      <div className="space-y-4 text-slate-200 relative z-10">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-3 rounded-lg hover:bg-slate-700/30 transition-all border-l-2 border-amber-500/50 pl-4"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.5 }}
          >
            <span className="font-semibold text-white">{edu.title}</span>
            <span className="text-sm text-slate-300 flex items-center mt-1">
              <User className="mr-2 size-4 text-amber-400" />
              {edu.institution}, {edu.year}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationInfo;
