import { useEffect } from "react";
import Lenis from "lenis";
import { useEffectFlag } from "@/config/effects";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scroll suave com inércia (Lenis) + navegação suave nas âncoras #. */
const SmoothScroll = () => {
  const enabled = useEffectFlag("lenis");

  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -64 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [enabled]);

  return null;
};

export default SmoothScroll;
