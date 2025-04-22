import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    setCanvasSize();

    // Create subtle gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(249, 115, 22, 0.05)");
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.03)");
      gradient.addColorStop(1, "rgba(219, 39, 119, 0.05)");
      return gradient;
    };

    // Draw flowing lines
    const lines = [];
    const lineCount = Math.floor(canvas.width / 10);

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 100,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() * 0.2 - 0.1) * 0.01,
        speed: Math.random() * 0.5 + 0.2,
        width: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.07 + 0.03,
        color:
          Math.random() < 0.33
            ? "rgba(249, 115, 22, $opacity)"
            : Math.random() < 0.66
            ? "rgba(16, 185, 129, $opacity)"
            : "rgba(219, 39, 119, $opacity)",
      });
    }

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill with gradient
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each line
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        const endX = line.x + Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;
        ctx.lineTo(endX, endY);

        ctx.strokeStyle = line.color.replace("$opacity", line.opacity);
        ctx.lineWidth = line.width;
        ctx.stroke();

        // Update for next frame
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;
        line.angle += line.angleSpeed;

        // Reset if out of bounds
        if (
          line.x < -line.length ||
          line.x > canvas.width + line.length ||
          line.y < -line.length ||
          line.y > canvas.height + line.length
        ) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.angle = Math.random() * Math.PI * 2;
        }
      });
    };

    const animation = () => {
      drawLines();
      animationId = requestAnimationFrame(animation);
    };

    let animationId = requestAnimationFrame(animation);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-0"></div>
    </>
  );
};

export default AnimatedBackground;
