import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const RotatingSphere = () => {
  const texture = useLoader(TextureLoader, "/Earth3.jpg"); // Load texture inside Canvas context
  const sphere = useRef();

  // Rotate the sphere
  useFrame(() => {
    if (sphere.current) {
      sphere.current.rotation.x += 0.003;
      sphere.current.rotation.y += 0.003;
    }
  });
  return (
    <mesh scale={2.7} ref={sphere}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default RotatingSphere;
