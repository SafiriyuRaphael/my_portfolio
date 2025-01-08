import { useState, useEffect, useMemo } from "react";
import { Text3D, Text } from "@react-three/drei";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";
import useWindowSize from "../../hooks/useWindowSize";

const breakpoints = [
  {
    width: 480,
    textScale: 0.12,
    textPosition: [-1.3, 3.3, 0],
    subTextScale: 0.116,
    subTextPosition: [-0.4, 0.75, 0],
    textSpacing: [0, -0.2, 0],
    subTextWidth: 15,
  },
  {
    width: 500,
    textScale: 0.17,
    textPosition: [-1.65, 3.3, 0],
    subTextScale: 0.15,
    subTextPosition: [-0.5, 0.2, 0],
    textSpacing: [0, -0.4, 0],
    subTextWidth: 15,
  },
  {
    width: 925,
    textScale: 0.2,
    textPosition: [-2.4, 3.5, 0],
    subTextScale: 0.16,
    subTextPosition: [-1, 0.3, 0],
    textSpacing: [0, -0.5, 0],
    subTextWidth: 17,
  },
  {
    width: 1030,
    textScale: 0.25,
    textPosition: [-2.7, 3.5, 0],
    subTextScale: 0.124,
    subTextPosition: [-0.8, 1, 0],
    textSpacing: [0, -0.5, 0],
    subTextWidth: 30,
  },
  {
    width: 1300,
    textScale: 0.4,
    textPosition: [-5, 3.5, 0],
    subTextScale: 0.16,
    subTextPosition: [-2.6, 0.8, 0],
    textSpacing: [0, -0.5, 0],
    subTextWidth: 30,
  },
  {
    width: 1900,
    textScale: 0.5,
    textPosition: [-7, 3.2, 0],
    subTextScale: 0.25,
    subTextPosition: [-3.3, -0.35, 0],
    textSpacing: [0, -1, 0],
    subTextWidth: 30,
  },
];

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

  const activeBreakpoint =
    breakpoints.find((bp) => width < bp.width) ||
    breakpoints[breakpoints.length - 1];

  const {
    textScale,
    textPosition,
    subTextScale,
    subTextPosition,
    textSpacing,
    subTextWidth,
  } = activeBreakpoint;

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
