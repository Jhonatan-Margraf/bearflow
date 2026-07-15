import { useEffectFlag } from "@/config/effects";

/** Gradiente navy suave e lento ao fundo de uma seção. Bem discreto. */
const AuroraBackground = () => {
  const enabled = useEffectFlag("aurora");
  if (!enabled) return null;

  return (
    <div className="aurora-bg pointer-events-none" aria-hidden="true">
      <span className="aurora-blob aurora-blob-1" />
      <span className="aurora-blob aurora-blob-2" />
    </div>
  );
};

export default AuroraBackground;
