import { useRef, type ReactNode } from "react";
import { useEffectFlag } from "@/config/effects";

interface Props {
  children: ReactNode;
  className?: string;
}

/** Card com brilho radial navy seguindo o cursor. */
const SpotlightCard = ({ children, className = "" }: Props) => {
  const enabled = useEffectFlag("cardSpotlight");
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={enabled ? onMove : undefined}
      className={`spotlight-card ${enabled ? "spotlight-on" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
