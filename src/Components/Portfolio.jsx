import EachPortfolio from "./EachPortfolio"
import AnimatedRobot from "../animations/AnimatedRobot"
import { useState } from "react";
import useView from "../hooks/inview";
import { motion } from "framer-motion";


const Portfolio = () => {
  const {
    controls,
    ref,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
  } = useView();

    const [currentIndex, setCurrentIndex] = useState(0);
  return (<motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} >
  <h1 className="text-3xl text-center mt-12 pb-6">My Projects</h1>
    <section className="w-screen grid md:grid-cols-2 grid-cols-1">
      <motion.div>
      <EachPortfolio
      setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/></motion.div>
      <div>
      <AnimatedRobot currentIndex={currentIndex}/></div>
    </section> </motion.div>
  )
}

export default Portfolio
