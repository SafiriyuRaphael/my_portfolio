import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

const LightBulb = () => {
  const result = useRef();
  const { scene } = useGLTF("/lightbulb/scene.gltf");
  const [bulb, setBulb] = useState(true);
  const lightRef = useRef();

  // Flicker intensity state
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    if (bulb) {
      // Start flickering when the bulb is on
      const flickerInterval = setInterval(() => {
      // Randomize intensity to simulate flickering
        setIntensity(10 + Math.random() * 40);
      }, 100); // Flicker every 100ms

      return () => clearInterval(flickerInterval); // Cleanup on unmount or when bulb turns off
    } else {
      setIntensity(0); // Reset intensity when the bulb is off
    }
  }, [bulb]);

  return (
    <group
      ref={result}
      scale={8}
      rotation={[Math.PI, 0, 0]}
      position={[0, 3.8, 0]}
      className="cursor-pointer"
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
      onClick={() => setBulb((prev) => !prev)} // Toggle light on click
    >
      {/* 3D Model */}
      <primitive object={scene} />

      {/* PointLight with flicker effect */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 0]} // Position inside the lightbulb
        intensity={intensity} // Dynamically updated intensity
        color='yellow' // Light color
        distance={30} // Light reach
        decay={2} // Light decay
      />
    </group>
  );
};

export default LightBulb;
