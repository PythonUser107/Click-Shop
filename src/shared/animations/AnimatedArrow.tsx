import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const AnimatedArrow = () => {
  return (
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="text-[20px] flex justify-center items-center"
    >
      <ArrowRight size={15} />
    </motion.span>
  )
}