import React, { useState } from "react";
import Earth from "../../../../../animations/Earth";
import { Check, MapPin, Globe, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LocationInfo = ({ isInView }) => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 1, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 100 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#14213d] to-[#0c1525] rounded-3xl shadow-2xl overflow-hidden relative"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#fca311] opacity-5 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fca311]">
                Available Worldwide
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-[#fca311] to-transparent rounded-full mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Based in Nigeria but delivering excellence globally. My remote
              collaboration approach ensures exceptional results regardless of
              geographic boundaries. I combine local insights with international
              standards to create solutions that resonate across cultures and
              markets.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "Clear communication",
                "Regular updates",
                "Flexible scheduling",
                "Seamless collaboration",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 1, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }
                  }
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoverItem(item)}
                  onMouseLeave={() => setHoverItem(null)}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className={`transition-all duration-300 ${
                      hoverItem === item ? "bg-[#fca311]" : "bg-[#fca31130]"
                    } rounded-full p-1`}
                  >
                    <Check
                      className={`${
                        hoverItem === item ? "text-[#14213d]" : "text-[#fca311]"
                      } h-4 w-4`}
                    />
                  </div>
                  <span
                    className={`transition-all duration-300 ${
                      hoverItem === item ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mt-8"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#fca311] to-[#e85d04] hover:from-[#e85d04] hover:to-[#fca311] text-[#14213d] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span>Start a Global Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Right content - Earth animation with enhancements */}
          <div className="relative h-80 lg:h-full w-full flex items-center justify-center">
            {/* Earth visualization section - Takes 5 columns */}
            <motion.div
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { duration: 1.2 } },
              }}
              className="lg:col-span-5 relative h-80 lg:h-96 xl:h-[500px] w-full flex items-center justify-center"
            >
              {/* Scenic backdrop */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glowing backdrop for Earth */}
                <div className="absolute w-4/5 h-4/5 rounded-full bg-[#fca311] opacity-10 blur-3xl"></div>

                {/* Orbiting elements */}
                {[1, 2, 3].map((ring, idx) => (
                  <motion.div
                    key={`ring-${idx}`}
                    className="absolute rounded-full border opacity-20"
                    style={{
                      width: `${85 - idx * 15}%`,
                      height: `${85 - idx * 15}%`,
                      borderColor:
                        idx === 0
                          ? "#fca311"
                          : idx === 1
                          ? "#2A9D8F"
                          : "#E76F51",
                      borderWidth: 1,
                    }}
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 20 + idx * 10,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                    }}
                  />
                ))}

                {/* Satellite dots */}
                {[0, 1, 2].map((dot, idx) => (
                  <motion.div
                    key={`dot-${idx}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        dot === 0
                          ? "#fca311"
                          : dot === 1
                          ? "#2A9D8F"
                          : "#E76F51",
                      boxShadow: `0 0 10px ${
                        dot === 0
                          ? "#fca311"
                          : dot === 1
                          ? "#2A9D8F"
                          : "#E76F51"
                      }`,
                    }}
                    animate={{
                      pathOffset: [0, 1],
                      transition: {
                        duration: 8 + dot * 4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                    }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor:
                          dot === 0
                            ? "#fca311"
                            : dot === 1
                            ? "#2A9D8F"
                            : "#E76F51",
                      }}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 0.2, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  </motion.div>
                ))}

                {/* Earth component container with enhanced interactivity */}
                <motion.div
                  className="relative z-10 w-4/5 h-4/5 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.03, 1],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                  <Earth />

                  {/* Connection points to key global regions */}
                  {[
                    { x: -20, y: -30, label: "Americas" },
                    { x: 20, y: -10, label: "Europe" },
                    { x: 30, y: 20, label: "Asia" },
                    { x: 0, y: 40, label: "Africa" },
                  ].map((point, idx) => (
                    <motion.div
                      key={`point-${idx}`}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `${point.x + 50}%`,
                        top: `${point.y + 50}%`,
                      }}
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: [0, 1, 0],
                        transition: {
                          delay: idx * 1.5,
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4,
                        },
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#fca311]"></div>
                      <div className="h-8 w-px bg-gradient-to-b from-[#fca311] to-transparent"></div>
                      <div className="text-xs text-[#fca311] whitespace-nowrap">
                        {point.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationInfo;
