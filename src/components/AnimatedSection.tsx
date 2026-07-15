import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useEffectFlag } from "@/config/effects";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const blur = useEffectFlag("blurStagger");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: blur ? 0.6 : 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
