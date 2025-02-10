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

  const containerVariants={
    hidden:{opacity:1},
    visible:{
      opacity:1,
     
      transition:{
        staggerChildren:0,
        duration:0,
      }
    }
   }
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



  return { ref, controls, cardVariant3, cardVariants1, cardVariants2, containerVariants};
};

export default useView;
