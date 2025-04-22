import React, { useEffect, useRef } from "react";

const BackGround = () => {
  const canvasRef = useRef(null);
  // Advanced particle animation background with interactive elements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth * 0.07), 150);
    const connectionDistance = 150;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    // Create particles with improved properties
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: size,
        originalRadius: size,
        color: `rgba(255, 176, 59, ${Math.random() * 0.3 + 0.1})`,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3,
        lastMouse: { x: 0, y: 0 },
        active: false,
      });
    }

    function drawConnections(p1, p2, distance) {
      const opacity = 1 - distance / connectionDistance;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255, 176, 59, ${opacity * 0.2})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Interact with mouse
        if (isMouseMoving) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const angle = Math.atan2(dy, dx);
            const force = (120 - distance) * 0.02;
            p.speedX -= Math.cos(angle) * force;
            p.speedY -= Math.sin(angle) * force;
            p.radius = p.originalRadius * 1.5;
            p.active = true;
            p.color = `rgba(255, 196, 79, ${Math.random() * 0.5 + 0.3})`;
          } else if (p.active) {
            p.radius = p.originalRadius;
            p.active = false;
            p.color = `rgba(255, 176, 59, ${Math.random() * 0.3 + 0.1})`;
          }
        }

        // Apply some drag
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off edges
        if (p.x < 0) {
          p.x = 0;
          p.speedX *= -1;
        }
        if (p.x > canvas.width) {
          p.x = canvas.width;
          p.speedX *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.speedY *= -1;
        }
        if (p.y > canvas.height) {
          p.y = canvas.height;
          p.speedY *= -1;
        }

        // Draw the particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            drawConnections(p, p2, distance);
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;

      // Reset mouse movement timer
      clearTimeout(window.mouseTimer);
      window.mouseTimer = setTimeout(() => {
        isMouseMoving = false;
      }, 3000);
    };

    const animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", setCanvasSize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(window.mouseTimer);
    };
  }, []);

  return (
    <>
      {/* Advanced particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[70] opacity-80" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70 z-0"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid/grid.svg')] bg-repeat opacity-5 z-0"></div>
    </>
  );
};

export default BackGround;
