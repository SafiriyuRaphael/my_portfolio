import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedBackground from "./animations/AnimatedBackground";
import ContactInfo from "./section/ContactInfo";
import useView from "../../../../hooks/inview";
import ContactForm from "./section/ContactForm";

const Contacts = () => {
  const { contactsContainerVariants, titleVariants, textVariants } = useView();
  const controls = useAnimation();
  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });


 

  useEffect(() => {
    if (mainInView) {
      controls.start("visible");
    }
  }, [controls, mainInView]);

  

  const gradientAnimation = {
    initial: { backgroundPosition: "0% center" },
    animate: {
      backgroundPosition: "200% center",
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "linear",
        repeatType: "mirror",
      },
    },
  };

  return (
    <article
      className="relative py-32 overflow-hidden bg-gray-950"
      id="contact"
    >
      {/* Animated background with canvas */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated gradient */}
        <motion.div
          ref={mainRef}
          initial="hidden"
          animate={controls}
          variants={contactsContainerVariants}
          className="text-center mb-20"
        >
          <motion.p
            variants={textVariants}
            className="inline-block px-6 py-2 rounded-full text-sm font-medium text-orange-300 bg-orange-900/20 border border-orange-500/20 mb-6"
          >
            GET IN TOUCH
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <motion.span
              className="bg-gradient-to-r from-orange-500 via-green-300 to-black bg-clip-text text-transparent bg-[length:200%_auto]"
              initial="initial"
              animate="animate"
              variants={gradientAnimation}
            >
              Let's Bring Your Vision to Life
            </motion.span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to explore possibilities? I'm ready
            to transform your ideas into exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Contact content section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          <ContactInfo mainRef={mainRef} controls={controls} />

          <ContactForm />
        </div>

        {/* Bottom decoration element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-radial from-orange-500/5 to-transparent blur-3xl"
        ></motion.div>
      </div>
    </article>
  );
};

export default Contacts;
