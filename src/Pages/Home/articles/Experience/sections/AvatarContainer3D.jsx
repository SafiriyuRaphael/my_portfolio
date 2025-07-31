import { motion } from "framer-motion";
import Avatar from "../../../../../animations/Avatar";
import AvatarlinesAndHover from "../animations/AvatarlinesAndHover";
import { CircleX } from "lucide-react";
import { Canvas } from "@react-three/fiber";

const AvatarContainer3D = ({ activeSection, anime }) => {
  return (
    <motion.section
      className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group"
      style={{ minHeight: "600px" }}
    >
      <AvatarlinesAndHover activeSection={activeSection} />

      {/* Canvas container with animated entry */}
      <motion.div
        className="w-full h-full relative z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Canvas shadows className="w-full h-full">
          <Avatar anime={anime} />
        </Canvas>

        {/* Interactive guide overlay */}
        <div className="absolute bottom-4 left-0 right-0 mx-auto text-center text-sm text-blue-300 bg-slate-900/50 backdrop-blur-sm py-2 px-4 rounded-full w-max opacity-80">
          <p className="flex items-center justify-center gap-2">
            <CircleX className="size-4 animate-pulse" />
            Hover over sections to see interactions
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AvatarContainer3D;
