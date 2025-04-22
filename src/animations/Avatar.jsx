import {
  useAnimations,
  useFBX,
  useGLTF,
  OrbitControls,
  useTexture,
  ContactShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import LightBulb from "./LightBulb";

const Plane = () => {
  const texture = useTexture("/textures/grid.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(100, 100);
  texture.anisotropy = 16;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.05, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial 
        map={texture}
        color="#111827"
        metalness={0.5}
        roughness={0.8}
      />
    </mesh>
  );
};



const Avatar = ({ anime = "default", ...props }) => {
  const group = useRef();
  const [cameraPosition] = useState(() => new Vector3(0, 0, 5));
  
  // Load avatar model
  const avatar = useGLTF("/67778fd000534b839cf6013a.glb");
  
  // Apply shadows to the avatar
  useEffect(() => {
    if (avatar?.scene) {
      avatar.scene.traverse((object) => {
        if (object.isMesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          // Enhance material quality
          if (object.material) {
            object.material.envMapIntensity = 1.5;
            object.material.needsUpdate = true;
          }
        }
      });
    }
  }, [avatar]);
  
  // Load multiple animations with improved naming
  const { animations: defaultAnimations } = useFBX("/animations/Happy Idle.fbx");
  const { animations: standingAnimations } = useFBX("/animations/Standing Up.fbx");
  const { animations: anime1Animations } = useFBX("/animations/Clapping.fbx");
  const { animations: anime2Animations } = useFBX("/animations/Salute.fbx");
  const { animations: anime3Animations } = useFBX("/animations/Victory.fbx");
  
  // Assign unique names to animations
  defaultAnimations[0].name = "default";
  standingAnimations[0].name = "standing";
  anime1Animations[0].name = "anime1";
  anime2Animations[0].name = "anime2";
  anime3Animations[0].name = "anime3";
  
  // Combine all animations into one array
  const allAnimations = [
    ...defaultAnimations,
    ...standingAnimations,
    ...anime1Animations,
    ...anime2Animations,
    ...anime3Animations,
  ];
  
  // Bind animations to group
  const { actions } = useAnimations(allAnimations, group);
  
  // Smooth camera movement
  useFrame((state) => {
    state.camera.position.lerp(cameraPosition, 0.05);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
  
  // Play selected animation when the 'anime' prop changes
  useEffect(() => {
    if (actions && actions[anime]) {
      // Fade out all other animations
      Object.values(actions).forEach((action) => {
        if (action.name !== anime) {
          action.fadeOut(0.3);
        }
      });
      
      // Play the selected animation with a smooth transition
      actions[anime].reset().fadeIn(0.5).play();
      return () => actions[anime].fadeOut(0.5);
    } else if (actions && actions.default) {
      // Fallback to default animation if requested one is not found
      actions.default.reset().fadeIn(0.5).play();
      return () => actions.default.fadeOut(0.5);
    }
  }, [anime, actions]);
  
  return (
    <group ref={group} {...props}>
      
      
      {/* Avatar model */}
      <primitive 
        object={avatar.scene} 
        position={[0, -2, 0]} 
        scale={2.1} 
        castShadow
        receiveShadow
      />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.8} color="#ffffff" />
      <LightBulb />
      
      {/* Floor and shadows */}
      <Plane />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.7}
        scale={12}
        blur={1}
        far={4}
        resolution={256}
        color="#000000"
      />
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        enablePan={false}
        dampingFactor={0.05}
        rotateSpeed={0.5}
      />
    </group>
  );
};

export default Avatar;