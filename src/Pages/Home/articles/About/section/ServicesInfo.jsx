import React from "react";
import useView from "../../../../../hooks/inview";
import { motion } from "framer-motion";
import { SERVICES } from "../../../../../constant/about";

const ServicesInfo = () => {
  const { cardVariants } = useView();
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {SERVICES.map((service, index) => (
        <motion.div
          key={service.title}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-black/20 rounded-xl p-6 border border-gray-800 hover:border-[#fca31150] transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-[#fca31115] flex items-center justify-center mb-4 text-[#fca311]">
            {service.icon}
          </div>
          <h5 className="text-xl font-bold mb-3">{service.title}</h5>
          <p className="text-gray-300">{service.description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ServicesInfo;
