import React, { useEffect, useState } from 'react'

const HeaderBackground = () => {
    const [mousePosition, setMousePosition] = useState ({ x: 0, y: 0 });
    
  // Mouse follow effect for enhanced interactivity
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
            {/* Ambient background glow */}
            <div 
        className="absolute inset-0 pointer-events-none opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 163, 17, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
          transition: "background 0.3s ease"
        }}
      />
    </>
  )
}

export default HeaderBackground
