import { Shield, Waves, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Shield,
    title: "Bear — Força",
    description: "Robustez e confiabilidade nas soluções entregues. Código que sustenta o negócio.",
    iconColor: "hsl(217, 93%, 65%)",
  },
  {
    icon: Waves,
    title: "Flow — Fluidez",
    description: "Processos que funcionam com eficiência e naturalidade, sem burocracia.",
    iconColor: "hsl(217, 93%, 65%)",
  },
  {
    icon: Handshake,
    title: "Proximidade real",
    description: "Sem intermediários. Você fala diretamente com quem está desenvolvendo seu projeto.",
    iconColor: "hsl(217, 93%, 65%)",
  },
];

const AboutSection = () => (
  <section id="sobre" className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Sobre</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Conheça a <span className="gradient-text">Bear Flow</span>
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-5xl mx-auto items-center">
        {/* Left — Live collaboration illustration */}
        <AnimatedSection className="hidden lg:flex items-center justify-center" delay={0.05}>
          <img
            src="/Live collaboration-rafiki.svg"
            alt="Colaboração em tempo real"
            className="w-full max-w-xs"
          />
        </AnimatedSection>

        {/* Right — about card + pillars */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* About card */}
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-2xl p-7 border h-full"
              style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)" }}
            >
              <div className="navy-icon-box w-12 h-12 mb-5">
                <img src="/bearlogo.png" alt="Bear Flow" className="w-8 h-8 object-contain" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                A Bear Flow nasceu com um objetivo simples:{" "}
                <strong className="text-foreground">
                  usar tecnologia para resolver problemas reais de empresas.
                </strong>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                O diferencial está na{" "}
                <strong className="text-foreground">proximidade com o cliente.</strong> Cada
                projeto é desenvolvido de forma personalizada, entendendo as necessidades reais
                antes de escrever uma linha de código.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm">
                O fundador possui formação técnica em Informática e cursa Bacharelado em
                Inteligência Artificial — também fundador da startup{" "}
                <strong className="text-foreground">Peso na Granja.</strong>
              </p>
            </div>
          </AnimatedSection>

          {/* Pillars */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start rounded-xl p-4 border transition-colors duration-200"
                  style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#30363d";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd-2)";
                  }}
                >
                  <div
                    className="navy-icon-box w-9 h-9 shrink-0"
                    style={{ color: pillar.iconColor }}
                  >
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold font-display text-sm mb-1"
                      style={{ color: "var(--silver)" }}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
