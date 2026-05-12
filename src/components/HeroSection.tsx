import { motion } from "framer-motion";
import { Shield, Zap, Code2, Users } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const features = [
  {
    icon: Shield,
    title: "Seguro",
    description: "Segurança por design, integrada a cada solução.",
  },
  {
    icon: Zap,
    title: "Eficiente",
    description: "Desempenho otimizado para escala no mundo real.",
  },
  {
    icon: Code2,
    title: "Escalável",
    description: "Arquitetura flexível que cresce com você.",
  },
  {
    icon: Users,
    title: "Confiável",
    description: "Qualidade consistente e suporte de longo prazo.",
  },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden pt-16">
    {/* Dot grid */}
    <div className="dot-grid" />

    {/* Glow top-right */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-80px",
        right: "-60px",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,31,63,0.32) 0%, transparent 70%)",
      }}
    />

    {/* 2-column split */}
    <div className="relative z-10 w-full max-w-[1160px] mx-auto px-8 py-20 flex-1 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Left — text */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] flex items-center gap-2"
            style={{ color: "var(--silver)" }}
          >
            <span
              className="inline-block w-6 h-px opacity-50"
              style={{ background: "var(--silver)" }}
            />
            Desenvolvimento de Software
          </span>

          <h1
            className="font-display font-bold leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 4.8vw, 4rem)", color: "#e6edf3" }}
          >
            Força na entrega.<br />
            Fluidez no{" "}
            <span className="gradient-text">processo.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Desenvolvemos sites, sistemas e aplicativos personalizados para pequenas e médias
            empresas — sem burocracia, com proximidade real e resultado concreto.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <WhatsAppButton size="default" />
            <a
              href="#cases"
              className="inline-flex items-center gap-1.5 font-medium text-base px-6 py-3 rounded-full border transition-colors duration-200"
              style={{
                color: "#e6edf3",
                borderColor: "var(--bd-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--silver-dim)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--silver)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bd-2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#e6edf3";
              }}
            >
              Ver projetos →
            </a>
          </div>
        </motion.div>

        {/* Right — Devices illustration */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="/Devices-pana.svg"
            alt="Devices"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>

    {/* Feature strip */}
    <div
      className="relative z-10 w-full border-t"
      style={{ borderColor: "var(--bd-1, #21262d)" }}
    >
      <div className="max-w-[1160px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 px-8 py-7 transition-colors duration-150"
            style={{
              borderRight: i < features.length - 1 ? "1px solid #21262d" : "none",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            whileHover={{ backgroundColor: "#161b22" }}
          >
            <div
              className="navy-icon-box w-11 h-11 shrink-0 mt-0.5"
              style={{ color: "var(--silver)" }}
            >
              <f.icon className="w-5 h-5" />
            </div>
            <div>
              <h4
                className="font-display font-semibold text-base mb-1"
                style={{ color: "#e6edf3" }}
              >
                {f.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-snug">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
