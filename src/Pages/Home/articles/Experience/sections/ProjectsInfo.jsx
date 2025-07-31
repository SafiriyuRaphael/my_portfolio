import { motion } from "framer-motion";
import { PROJECTS } from "../../../../../constant/experience";
import useView from "../../../../../hooks/inview";
import { Laptop } from "lucide-react";

const ProjectsInfo = ({ setActiveSection, setAnime }) => {
  const { headerAnimation } = useView();

  return (
    <motion.section
      className="p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm w-full relative overflow-hidden group shadow-xl border border-slate-700/40"
      onMouseEnter={() => {
        setAnime("anime3");
        setActiveSection("projects");
      }}
      onMouseLeave={() => setActiveSection(null)}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-200/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Glowing accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-400 to-slate-600 group-hover:h-full transition-all duration-700 rounded-l" />

      <motion.h3
        className="text-2xl font-bold mb-4 text-white flex items-center relative z-10"
        {...headerAnimation}
      >
        <span className="mr-3 text-slate-400 bg-slate-400/10 p-2 rounded-lg">
          <Laptop />
        </span>
        Projects
      </motion.h3>

      <div className="space-y-5 text-slate-200 relative z-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg hover:bg-slate-700/30 transition-all border border-amber-200/20 hover:border-amber-200/50"
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <h4 className="font-semibold text-lg text-slate-300">
              {project.title}
            </h4>
            <p className="text-sm text-slate-300 mt-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-900/30 text-slate-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="text-sm italic text-slate-300 text-center mt-2 py-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          More projects available in my portfolio...
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsInfo;
