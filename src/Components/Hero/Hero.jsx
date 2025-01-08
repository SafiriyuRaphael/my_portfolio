import { Canvas } from "@react-three/fiber";
import HomeBackground from "./HomeBackground";
import Hero3dText from "./Hero3dText";
import AnimatedRobot from "../../animations/AnimatedRobot";
import LightBulb from "../../animations/LightBulb";
import Plane from "../../animations/Plane";
import AboutMe from "../About/AboutMe";
import Blog from "../Blog/Blog";
import Contacts from "../Contact/Contacts";
import Reviews from "../Portfolio/Reviews";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <Canvas
          className="absolute inset-0"
          shadows
          gl={{ antialias: false, powerPreference: "high-performance" }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          frameloop="demand"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
          <AnimatedRobot />
          <Hero3dText />
          <Plane />
          <HomeBackground />
          <LightBulb />
        </Canvas>

    
      </div>

      {/* Other sections */}
      <AboutMe />
      <Blog />
      <Reviews />
      <Contacts />
    </>
  );
};

export default Hero;
