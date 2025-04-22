import { motion } from "framer-motion";
import { EXPERIENCETIMELINE } from "../../../../../constant/about";
import useView from "../../../../../hooks/inview";

const ExperienceInfo = () => {
  const { cardVariants } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-gradient-to-b from-[#fca311] to-transparent"></div>

      {EXPERIENCETIMELINE.map((exp, index) => (
        <motion.div
          key={exp.title}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="ml-10 mb-10 relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#14213d] border-2 border-[#fca311] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#fca311]"></div>
          </div>

          <div className="bg-black/20 rounded-xl p-6 border border-gray-800">
            <span className="inline-block text-sm font-medium text-[#fca311] mb-2">
              {exp.year}
            </span>
            <h5 className="text-xl font-bold">{exp.title}</h5>
            <p className="text-gray-400 mb-3">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceInfo;
