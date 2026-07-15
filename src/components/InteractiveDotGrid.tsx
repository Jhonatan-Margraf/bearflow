import { useEffect, useRef } from "react";
import { useEffectFlag } from "@/config/effects";

interface Props {
  spacing?: number;
  radius?: number;
  dotColor?: string;
}

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MASK = "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)";

/**
 * Grid de bolinhas em canvas que são repelidas pelo cursor (efeito "cratera"),
 * voltando suavemente à origem. Substitui o .dot-grid estático.
 * Quando o efeito está desligado (ou reduced-motion), desenha o grid estático.
 */
const InteractiveDotGrid = ({
  spacing = 28,
  radius = 120,
  dotColor = "rgba(48,54,61,0.9)",
}: Props) => {
  const enabled = useEffectFlag("dotGrid");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const animate = enabled && !reduced();
    let width = 0;
    let height = 0;
    let dots: { ox: number; oy: number; x: number; y: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let rafId = 0;

    const build = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = i * spacing;
          const oy = j * spacing;
          dots.push({ ox, oy, x: ox, y: oy });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.ox, d.oy, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;
      const r2 = radius * radius;
      for (const d of dots) {
        const dx = d.ox - mouse.x;
        const dy = d.oy - mouse.y;
        const dist2 = dx * dx + dy * dy;
        let tx = d.ox;
        let ty = d.oy;
        let r = 1;
        if (dist2 < r2) {
          const dist = Math.sqrt(dist2) || 1;
          const force = 1 - dist / radius;
          const push = force * 26;
          tx = d.ox + (dx / dist) * push;
          ty = d.oy + (dy / dist) * push;
          r = 1 + force * 1.1;
        }
        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();

    const ro = new ResizeObserver(() => {
      build();
      if (!animate) drawStatic();
    });
    ro.observe(parent);

    if (animate) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      rafId = requestAnimationFrame(render);
    } else {
      drawStatic();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, [enabled, spacing, radius, dotColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ maskImage: MASK, WebkitMaskImage: MASK }}
    />
  );
};

export default InteractiveDotGrid;
