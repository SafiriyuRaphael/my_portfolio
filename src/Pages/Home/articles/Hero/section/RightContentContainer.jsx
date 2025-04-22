import { motion } from "framer-motion";
import { METRICS } from "../../../../../constant/home";
import RightBackground from "../animations/RightBackground";

const RightContentContainer = () => {
  return (
    <motion.section
      className="w-full lg:w-1/2 lg:h-screen relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="h-[50vh] lg:h-full w-full relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl shadow-amber-500/10">
        {/* Advanced image effects */}
        <RightBackground />

        {/* Enhanced image with hero effect */}
        <img
          src="/mypcportfolio.webp"
          alt="Rapheal - Web Designer & Developer"
          className="h-full w-full object-cover object-center scale-105 hero-image transition-transform duration-700 ease-out"
        />

        {/* Enhanced glass card overlay */}
        <motion.div
          className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-black/30 border border-white/10 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Experience Highlights
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-transparent rounded-full mt-1"></div>
            </div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-500/30 shadow-inner"
            >
              2+ Years
            </motion.span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {METRICS.map((metric) => (
              <motion.div
                key={metric.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-inner`}
                >
                  <metric.icon className={`size-5 ${metric.className}`} />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">{metric.value}</p>
                  <p className="text-sm text-gray-300">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RightContentContainer;
