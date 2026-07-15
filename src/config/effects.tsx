import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Sistema de "features candidatas".
 * Cada efeito visual do site é uma flag ligável/desligável.
 * O usuário liga/desliga pelo painel (EffectsPanel) e decide o que fica.
 * Depois de decidido, as flags dos efeitos descartados podem ser removidas.
 */

export type EffectName =
  | "dotGrid"
  | "heroSpotlight"
  | "magnetic"
  | "titleShimmer"
  | "lenis"
  | "scrollSpy"
  | "tracingBeam"
  | "textReveal"
  | "blurStagger"
  | "techMarquee"
  | "cardSpotlight"
  | "tilt3d"
  | "aurora";

export interface EffectMeta {
  name: EffectName;
  label: string;
  description: string;
}

export const EFFECTS: EffectMeta[] = [
  { name: "dotGrid", label: "Bolinhas interativas", description: "Hero — bolinhas repelidas pelo cursor (cratera)" },
  { name: "heroSpotlight", label: "Spotlight do cursor", description: "Hero — brilho navy que segue o mouse" },
  { name: "magnetic", label: "Botões magnéticos", description: "Hero — CTAs atraídos pelo cursor" },
  { name: "titleShimmer", label: "Shimmer no título", description: "Hero — brilho cruzando 'processo.'" },
  { name: "lenis", label: "Scroll suave (Lenis)", description: "Site — rolagem com inércia" },
  { name: "scrollSpy", label: "Navbar scrollspy", description: "Navbar — destaca a seção ativa" },
  { name: "tracingBeam", label: "Tracing beam (Processo)", description: "Processo — linha que se desenha + passos em sequência" },
  { name: "textReveal", label: "Text reveal", description: "Frases de impacto acendem palavra por palavra" },
  { name: "blurStagger", label: "Blur-in + stagger", description: "Seções entram com leve desfoque/escalonamento" },
  { name: "techMarquee", label: "Marquee de tecnologias", description: "Stack — logos em loop contínuo" },
  { name: "cardSpotlight", label: "Spotlight nos cards", description: "Projetos — brilho seguindo o cursor" },
  { name: "tilt3d", label: "Tilt 3D nos cards", description: "Projetos — inclinação 3D sutil" },
  { name: "aurora", label: "Aurora de fundo", description: "Sobre — gradiente navy sutil ao fundo" },
];

export type EffectFlags = Record<EffectName, boolean>;

const STORAGE_KEY = "bf-effects";

const buildDefaults = (value: boolean): EffectFlags =>
  EFFECTS.reduce((acc, e) => {
    acc[e.name] = value;
    return acc;
  }, {} as EffectFlags);

// O painel de seleção foi removido: todos os efeitos ficam sempre ativos.
// Mantemos o hook useEffectFlag para não alterar os componentes que o usam.
const loadFlags = (): EffectFlags => buildDefaults(true);

interface EffectsContextValue {
  flags: EffectFlags;
  toggle: (name: EffectName) => void;
  setAll: (value: boolean) => void;
}

const EffectsContext = createContext<EffectsContextValue | null>(null);

export const EffectsProvider = ({ children }: { children: ReactNode }) => {
  const [flags, setFlags] = useState<EffectFlags>(loadFlags);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(flags));
    } catch {
      /* ignore */
    }
  }, [flags]);

  const toggle = useCallback((name: EffectName) => {
    setFlags((prev) => ({ ...prev, [name]: !prev[name] }));
  }, []);

  const setAll = useCallback((value: boolean) => {
    setFlags(buildDefaults(value));
  }, []);

  const value = useMemo(() => ({ flags, toggle, setAll }), [flags, toggle, setAll]);

  return <EffectsContext.Provider value={value}>{children}</EffectsContext.Provider>;
};

export const useEffects = (): EffectsContextValue => {
  const ctx = useContext(EffectsContext);
  if (!ctx) {
    // Fallback seguro: sem provider, todos os efeitos ligados.
    return { flags: buildDefaults(true), toggle: () => {}, setAll: () => {} };
  }
  return ctx;
};

/** Retorna true/false para um efeito específico. */
export const useEffectFlag = (name: EffectName): boolean => useEffects().flags[name];
