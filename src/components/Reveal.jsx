import { motion } from "framer-motion";

/**
 * Small wrapper that fades/slides content in once, when it scrolls
 * into view. Used consistently across sections instead of bespoke
 * animation on each one.
 */
export default function Reveal({ children, delay = 0, y = 20, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
