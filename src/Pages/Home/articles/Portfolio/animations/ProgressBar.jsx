import { motion } from "framer-motion"

const ProgressBar = ({ current, total, onSelect }) => {
  return (
    <div className="flex gap-3 items-center">
      {Array.from({ length: total }).map((_, idx) => (
        <motion.div
          key={idx}
          className="relative h-1 rounded-full overflow-hidden cursor-pointer group"
          style={{ width: idx === current ? "3rem" : "1.5rem" }}
          onClick={() => onSelect(idx)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-white/30 group-hover:bg-white/50" />
          {idx === current && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default ProgressBar
