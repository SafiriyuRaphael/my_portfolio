import { motion } from "framer-motion";
import { CONTACTITEMS, CONTACTLINKS } from "../../../../../constant/contacts";
import useView from "../../../../../hooks/inview";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactInfo = ({mainRef, controls}) => {
  const {sectionVariants, contactsItemVariants, contactsContainerVariants, titleVariants, textVariants} = useView()


  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      ref={mainRef}
      initial="hidden"
      animate={controls}
      variants={contactsContainerVariants}
      className="w-full lg:w-2/5 space-y-12"
    >
      <motion.div variants={sectionVariants} className="space-y-6">
        <motion.h3 variants={titleVariants} className="text-3xl font-bold">
          Let's work <span className="text-orange-500">together!</span>
        </motion.h3>

        <motion.p variants={textVariants} className="text-lg text-gray-300">
          I'm currently available for new projects and collaborations. Feel free
          to reach out anytime to discuss your ideas, opportunities, or just to
          say hello.
        </motion.p>

        {/* Availability indicator */}
        <motion.div
          variants={contactsItemVariants}
          className="flex items-center gap-3 bg-gradient-to-r from-green-900/20 to-green-800/10 rounded-lg px-5 py-3 border border-green-500/20"
        >
          <div className="relative flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <p className="text-green-300 h-full pt-3.5 font-medium">
            Available for new projects
          </p>
        </motion.div>
      </motion.div>

      {/* Contact methods */}
      <motion.div variants={contactsContainerVariants} className="space-y-6">
        <motion.h4
          variants={textVariants}
          className="text-xl font-semibold text-white/80"
        >
          Connect With Me
        </motion.h4>

        {CONTACTITEMS.map((item) => (
          <motion.div
            key={item.id}
            custom={item.index}
            variants={contactsItemVariants}
            whileHover="hover"
            onHoverStart={() => setHovered(item.id)}
            onHoverEnd={() => setHovered(null)}
            className="group"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-white/10 shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                {item.icon}
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target={item.id === "whatsapp" ? "_blank" : undefined}
                  rel={
                    item.id === "whatsapp" ? "noopener noreferrer" : undefined
                  }
                  className="text-lg text-gray-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  {item.text}
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{
                      opacity: hovered === item.id ? 1 : 0,
                      x: hovered === item.id ? 0 : -5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} className="text-orange-400" />
                  </motion.span>
                </a>
              ) : (
                <p className="text-lg text-gray-200">{item.text}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div variants={sectionVariants} className="space-y-6">
        <motion.h4
          variants={textVariants}
          className="text-xl font-semibold text-white/80"
        >
          Follow Me
        </motion.h4>

        <motion.div variants={textVariants} className="flex gap-4">
          {CONTACTLINKS.map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-white/10"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
