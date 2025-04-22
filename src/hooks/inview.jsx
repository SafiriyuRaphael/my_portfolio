import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";


const useView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  // Card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  const headerAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  
  const contactsItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };


  const contactsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
    success: {
      backgroundColor: ["#f97316", "#10b981"],
      transition: { duration: 0.5 },
    },
  };


    const glowVariants = {
      initial: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      animate: {
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.4, 1],
        filter: ["blur(8px)", "blur(15px)", "blur(8px)"],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };

    const logoVariants = {
      initial: { scale: 1, rotateY: 0, rotateX: 0 },
      hover: {
        scale: 1.1,
        rotateY: [0, 15, -15, 10, -10, 0],
        rotateX: [0, 10, -5, 8, -3, 0],
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      },
      tap: {
        scale: 0.95,
        rotateY: 180,
        transition: {
          scale: { duration: 0.1 },
          rotateY: { duration: 0.4 },
        },
      },
    };
  

   const cardVariants1={
    hidden:{opacity:1, y:0},
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0,
      }
    }
   }
   const cardVariants2={
    hidden:{opacity:1, x:0},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0,
      }
    }
   }
   const cardVariant3={
    hidden:{opacity:1, x:0},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0,
      }
    }
   }



  return { ref, controls, cardVariant3, cardVariants1, cardVariants2, containerVariants, itemVariants, cardVariants,headerAnimation, sectionVariants, contactsItemVariants,contactsContainerVariants, titleVariants, textVariants, formItemVariants, formVariants, buttonVariants, glowVariants, logoVariants};
};

export default useView;
