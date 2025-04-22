import React from 'react'

const AnimatedStarParticles = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
    {Array.from({ length: 80 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() * 3 + 1 + "px",
          height: Math.random() * 3 + 1 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          opacity: Math.random() * 0.5 + 0.2,
          animation: `floatParticle ${
            Math.random() * 10 + 20
          }s linear infinite`,
          animationDelay: `-${Math.random() * 20}s`,
        }}
      />
    ))}
  </div>
  )
}

export default AnimatedStarParticles
