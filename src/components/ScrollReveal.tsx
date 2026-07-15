import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffectFlag } from "@/config/effects";

interface Props {
  text: string;
  /** Trecho do texto destacado com .gradient-text. */
  highlight?: string;
  className?: string;
}

const Word = ({
  progress,
  range,
  highlight,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
  children: string;
}) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? "gradient-text" : undefined}>
      {children}{" "}
    </motion.span>
  );
};

/** Revela o texto palavra por palavra conforme entra na viewport. */
const ScrollReveal = ({ text, highlight, className }: Props) => {
  const enabled = useEffectFlag("textReveal");
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const words = text.split(" ");
  const highlightSet = new Set(highlight ? highlight.split(" ") : []);

  if (!enabled) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={highlightSet.has(w) ? "gradient-text" : undefined}>
            {w}{" "}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} highlight={highlightSet.has(w)}>
            {w}
          </Word>
        );
      })}
    </span>
  );
};

export default ScrollReveal;
