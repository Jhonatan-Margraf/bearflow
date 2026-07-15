import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Duração de um ciclo, em segundos. */
  speed?: number;
}

/** Faixa em loop infinito (duplica o conteúdo). Pausa no hover. */
const Marquee = ({ children, className = "", speed = 32 }: Props) => (
  <div className={`marquee-wrap ${className}`}>
    <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
      <div className="marquee-group">{children}</div>
      <div className="marquee-group" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
