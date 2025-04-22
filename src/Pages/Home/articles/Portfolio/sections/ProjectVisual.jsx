import TvScene from "../../../../../animations/TvScene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense} from "react";

const ProjectVisual = ({currentIndex}) => {
  return (
    <section className=" h-[50vh] md:h-full relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full flex items-center justify-center p-4"
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Make the 3D canvas take full available space */}
          <div className="absolute inset-0 z-0 cursor-grab">
            <Canvas dpr={1.5} camera={{ position: [0, 0, 15], fov: 35 }}>
              <Suspense fallback={null}>
                <TvScene currentIndex={currentIndex} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectVisual;
