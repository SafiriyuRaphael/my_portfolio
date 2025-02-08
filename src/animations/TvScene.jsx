import { useVideoTexture, useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TvScene = ({ currentIndex }) => {
  const [video, setVideo] = useState("/fashionsistar.mp4");
  const [flip, setFlip] = useState(0); // Store animation progress
  const result = useGLTF("/animations/computer.glb"); // Load the GLTF model
  const videoTexture = useVideoTexture(video); // Load the video texture
  const robotGroup = useRef();

  useEffect(() => {
    if (currentIndex === 0) {
        setVideo("/cosmic3d.mp4");
    } else if (currentIndex === 1) {
        setVideo("/edafekioja.mp4");
    } else if (currentIndex===2) {
        setVideo("/fashionsistar.mp4")
    }

    // Trigger flip animation
    setFlip(Math.PI); // Flip to 180 degrees
    setTimeout(() => setFlip(0), 500); // Flip back after 0.5s
  }, [currentIndex]);

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = false; // Fix upside-down issue
      videoTexture.wrapT = THREE.ClampToEdgeWrapping;
    }

    // Assign the video texture to the "monitor-screen" material
    result.scene.traverse((child) => {
      if (child.isMesh && child.name === "monitor-screen") {
        child.material = new THREE.MeshBasicMaterial({ map: videoTexture });
      }
    });
  }, [result, videoTexture]);

  useFrame(() => {
    if (robotGroup.current) {
      robotGroup.current.rotation.y = THREE.MathUtils.lerp(
        robotGroup.current.rotation.y,
        flip,
        0.1
      ); // Smooth flip animation
    }
  });

  return (
    <group ref={robotGroup} scale={1.3} position={[0, -1.5, 0]}>
      <primitive object={result.scene} />
    </group>
  );
};

export default TvScene;
