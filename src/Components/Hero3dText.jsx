import { useState, useEffect, useMemo } from "react";
import { Text3D, Text } from "@react-three/drei";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";
import useWindowSize from "../hooks/useWindowSize";

const Hero3dText = () => {
  const { width } = useWindowSize();
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const eachWord = useMemo(
    () => [
      "Responsive Design",
      "SEO Optimization",
      "E-commerce Solutions",
      "Frontend Development",
      "Backend Development",
      "JavaScript Development",
      "Mobile Optimization",
      "WordPress Development",
      "Branding & Identity",
      "Prototyping",
      "Motion Graphics",
      "Digital Marketing",
      "Custom Themes",
      "Website Maintenance",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Interactive Design",
      "Custom Animations",
      "CMS (Content Management System)",
    ],
    []
  );

  useEffect(() => {
    const changeText = setInterval(() => {
      setActiveTextIndex((prev) => (prev + 1) % eachWord.length);
    }, 2000);
    return () => clearInterval(changeText);
  }, [eachWord]);

  // 🔥 NEW: Dynamic scaling based on screen width
  const textScale = Math.max(0.1, width * 0.0002); // Scale based on width
  const textPosition = [-width * 0.002, 3, 0]; // Position adjusts with screen
  const subTextScale = Math.max(0.05, width * 0.00015); // Subtext also scales
  const subTextPosition = [-width * 0.001, 0.5, 0]; // Adjust subtext position
  const textSpacing = [0, -textScale * 2, 0]; // Spacing scales with text size
  const subTextWidth = Math.min(width * 0.02, 25); // Prevent excessive width

  const textLines = useMemo(
    () => ["Delivering Superior", eachWord[activeTextIndex]],
    [activeTextIndex, eachWord]
  );

  return (
    <>
      <group position={textPosition}>
        {textLines.map((line, index) => (
          <Text3D
            key={index}
            position={[0, textSpacing[1] * index - 1.3, 0]}
            scale={textScale}
            font={helvetiker}
            height={0.1}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.02}
            curveSegments={12}
            rotation={[-0.046, 0, 0]}
            castShadow
          >
            {line}
            <meshStandardMaterial
              color="skyblue"
              metalness={0.5}
              roughness={0}
            />
          </Text3D>
        ))}
      </group>
      <Text
        scale={subTextScale}
        maxWidth={subTextWidth}
        position={subTextPosition}
      >
        "Welcome to my digital studio! I’m Rapheal, a web designer passionate
        about creating seamless, user-friendly experiences. I craft beautiful,
        functional websites, from sleek modern designs to vibrant interactive
        platforms. With a focus on custom layouts and responsive design, I
        ensure each project reflects the unique vision behind it."
      </Text>
    </>
  );
};

export default Hero3dText;
