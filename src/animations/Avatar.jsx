import {
  useAnimations,
  useFBX,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import LightBulb from "./LightBulb";
import { useEffect, useRef } from "react";
import Plane from "./Plane";

const Avatar = ({ anime, ...props }) => {
  const group = useRef();

  // Load avatar model
  const avatar = useGLTF("/67778fd000534b839cf6013a.glb");

  // Load multiple animations from different files
  const { animations: defaultAnimations } = useFBX(
    "/animations/Happy Idle.fbx"
  );
  const { animations: standingAnimations } = useFBX(
    "/animations/Standing Up.fbx"
  );
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

  // Play selected animation when the 'anime' prop changes
  useEffect(() => {
    if (actions && actions[anime]) {
      actions[anime].reset().fadeIn(0.5).play();
      return () => actions[anime].fadeOut(0.5);
    } else {
      console.warn(`Animation "${anime}" not found`);
    }
  }, [anime, actions]);

  return (
    <group ref={group} {...props}>
      <primitive object={avatar.scene} position={[0, -2, 0]} scale={2.1} />
      <ambientLight intensity={2} />
      <LightBulb />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <Plane />
    </group>
  );
};

export default Avatar;
