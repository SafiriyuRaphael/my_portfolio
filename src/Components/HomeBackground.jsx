import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const HomeBackground = () => {
  const { scene } = useThree();

  // Gradient Shader Material
  const gradientMaterial = new THREE.ShaderMaterial({
    uniforms: {
      topColor: { value: new THREE.Color("gray") }, // Top color
      bottomColor: { value: new THREE.Color("black") }, // Bottom color
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying vec3 vWorldPosition;
      void main() {
        float height = (vWorldPosition.y + 10.0) / 20.0; // Normalize height to [0, 1]
        height = clamp(height, 0.0, 1.0); // Ensure height stays within bounds
        gl_FragColor = vec4(mix(bottomColor, topColor, height), 1.0);
      }
    `,
    side: THREE.BackSide, // Render the inside of the sphere
  });

  // Background Mesh
  const backgroundMesh = new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 32), // Large sphere to enclose the scene
    gradientMaterial
  );

  // Add the background to the scene
  scene.add(backgroundMesh);

  return null;
};

export default HomeBackground;
