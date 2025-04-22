import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import useView from "../../../../../hooks/inview";
import { SKILLS, TECHNOLOGIES } from "../../../../../constant/about";

const SkillsSection = () => {
    const { cardVariants } = useView();
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
      <Sparkles className="text-[#fca311] h-5 w-5" />
      Technical Expertise
    </h4>
    
    <div className="space-y-6 mb-10">
      {SKILLS.map((skill, index) => (
        <motion.div 
          key={skill.name} 
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-[#fca311]">{skill.level}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
              style={{ backgroundColor: skill.color }}
              className="h-full rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </div>
    
    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
      <Sparkles className="text-[#fca311] h-5 w-5" />
      Technologies I Work With
    </h4>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {TECHNOLOGIES.map((tech, index) => (
        <motion.div
          key={tech.name}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-black/20 rounded-xl p-4 flex flex-col items-center hover:bg-black/40 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img 
              src={tech.icon || "/api/placeholder/48/48"} 
              alt={tech.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/48/48";
              }}
            />
          </div>
          <span className="text-center text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.section>
  )
}

export default SkillsSection
