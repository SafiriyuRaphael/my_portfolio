import React from 'react'

const Plane = () => {
  return (
    <mesh
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -5, 0]}
  >
    <planeGeometry args={[50, 50]} />
    <meshStandardMaterial color="gray" />
  </mesh>
  )
}

export default Plane