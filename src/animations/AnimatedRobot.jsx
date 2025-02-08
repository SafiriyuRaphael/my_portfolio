import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { Suspense} from "react";
import TvScene from "./TvScene";
import useView from "../hooks/inview";
import { motion } from "framer-motion";






const AnimatedRobot = ({currentIndex}) => {

  const {
    cardVariants2,
  } = useView();

  return (
    <motion.div className="bg-gradient-to-b from-black to-gray-900 hover:cursor-grab md:w-full w-screen md:h-full  h-[60vh]" variants={cardVariants2}>
    
        <Canvas shadows>
          <PerformanceMonitor>
            <TvScene currentIndex={currentIndex} />
            <ambientLight intensity={3} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          </PerformanceMonitor>
        </Canvas>
    
    </motion.div>
  );
};

useGLTF.preload("/animations/computer.glb");

export default AnimatedRobot;
