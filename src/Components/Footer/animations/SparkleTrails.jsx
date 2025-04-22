import { motion } from "framer-motion"

const SparkleTrails = ({i, mousePosition, theme}) => {
  return (
    <motion.div
    className="absolute w-2 h-2 rounded-full pointer-events-none z-20"
    style={{
      left: mousePosition.x,
      top: mousePosition.y,
      backgroundColor: i % 2 === 0 ? theme.primary : theme.accent,
      opacity: 0.6,
      scale: 0.5 + i * 0.1,
    }}
    animate={{
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      opacity: [0.6, 0],
      scale: [0.5 + i * 0.1, 0],
    }}
    transition={{ duration: 0.8 + i * 0.2 }}
  />
  )
}

export default SparkleTrails
