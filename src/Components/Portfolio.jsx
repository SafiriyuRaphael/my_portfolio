import EachPortfolio from "./EachPortfolio"
import AnimatedRobot from "../animations/AnimatedRobot"
import { useState } from "react";


const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (<>
  <h1 className="text-3xl text-center mt-12 pb-6">My Projects</h1>
    <section className="w-screen grid md:grid-cols-2 grid-cols-1">
      <EachPortfolio
      setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
      <AnimatedRobot currentIndex={currentIndex}/>
    </section> </>
  )
}

export default Portfolio
