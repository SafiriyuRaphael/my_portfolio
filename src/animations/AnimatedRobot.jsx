import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import useWindowSize from "../hooks/useWindowSize";
import { Suspense } from "react";
import { PerformanceMonitor } from "@react-three/drei"; // Optional for monitoring performance

const AnimatedRobot = () => {
  const { width } = useWindowSize();
  const result = useMemo(() => useGLTF("/scene.gltf"), []); // Memoizing the GLTF load to avoid unnecessary reloads
  const robotGroup = useRef();

  const [size, setSize] = useState({
    scale: 2.6,
    position: [3, 0.2, 0],
  });

  useEffect(() => {
    // Memoizing the size calculation to optimize re-renders
    const getSize = () => {
      if (width < 480) return { scale: 0.8, position: [0.9, 0.2, -2.9] };
      if (width < 768) return { scale: 1.2, position: [0.1, 0.2, -2.9] };
      if (width < 1000) return { scale: 1.2, position: [0.1, 0.2, -3.9] };
      return { scale: 1.5, position: [3, 0.2, -2.5] };
    };
    setSize(getSize());
  }, [width]);

 useFrame(({ clock }) => {
    if (robotGroup.current) {
      if(width>900){
   
          const time = clock.elapsedTime;
          const radius = 2; // Radius of the circle
          const speed = 0.5; // Speed of rotation
    
          // Calculate new x and z positions for a full circular path
          robotGroup.current.position.x = radius * Math.cos(time * speed);
          robotGroup.current.position.z = radius * Math.sin(time * speed);
    
      }

      // Reduce the complexity of the rotation animation
      const time = clock.elapsedTime;
      robotGroup.current.rotation.y = Math.sin(time * 0.5) * 0.5;
    }
  });
 
  useEffect(() => {
    result.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [result]);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <PerformanceMonitor> {/* Optional performance monitoring */}
        <group ref={robotGroup}>
          <primitive
            object={result.scene}
            scale={size.scale}
            position={size.position}
            rotation={[0, 6, 0]}
            castShadow
          />
        </group>
      </PerformanceMonitor>
    </Suspense>
  );
};

useGLTF.preload("/scene.gltf");

export default AnimatedRobot;
