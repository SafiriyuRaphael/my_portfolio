import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingSphere from "./RotatingSphere";

// A separate component for the 3D sphere

const Earth = () => {
  return (
    <div className="w-full h-64">
      <Canvas className="">
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, 5]} intensity={2} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth;
