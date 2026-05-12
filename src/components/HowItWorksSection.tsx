import { MessageSquare, Layout, Code2, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    description:
      "Entendemos como funciona seu negócio, quais processos precisam melhorar e qual tipo de solução faz mais sentido.",
  },
  {
    icon: Layout,
    title: "Planejamento e protótipo",
    description:
      "Criamos um protótipo que mostra como o sistema vai funcionar, permitindo visualizar o projeto antes do desenvolvimento.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Com foco em simplicidade, eficiência e boa experiência do usuário, desenvolvemos sua solução com tecnologia moderna.",
  },
  {
    icon: Rocket,
    title: "Entrega e evolução",
    description:
      "A solução é entregue pronta para uso e pode evoluir conforme seu negócio cresce, com novas funcionalidades ao longo do tempo.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-28 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Processo</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Como funciona o <span className="gradient-text">desenvolvimento</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          Criar um sistema, aplicativo ou site não precisa ser complicado. O processo é
          simples, transparente e focado nas necessidades do seu negócio.
        </p>
      </AnimatedSection>

      {/* Steps + illustration side by side on large screens */}
      <div className="grid xl:grid-cols-[1fr_320px] gap-12 items-center max-w-6xl mx-auto">

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line — only on xl (4-column layout) */}
          <div
            className="hidden xl:block absolute h-px z-0"
            style={{
              top: "20px",
              left: "calc(12.5% + 10px)",
              right: "calc(12.5% + 10px)",
              background: "var(--bd-2)",
            }}
          />

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group text-center">
                  {/* Icon box */}
                  <div
                    className="relative z-10 w-10 h-10 mx-auto mb-3 rounded-lg grid place-items-center transition-colors duration-200"
                    style={{
                      background: "var(--bg-2)",
                      border: "1px solid var(--bd-2)",
                      color: "var(--silver)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "var(--navy-t)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,31,63,0.8)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd-2)";
                    }}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>

                  {/* Número */}
                  <p
                    className="text-[0.65rem] font-medium mb-4 tracking-widest"
                    style={{
                      color: "var(--silver-dim)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    0{i + 1}
                  </p>

                  <h3 className="font-display font-semibold text-[0.93rem] mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-[0.82rem] text-muted-foreground leading-[1.55]">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Illustration — right side, hidden on smaller screens */}
        <AnimatedSection
          className="hidden xl:flex items-center justify-center"
          delay={0.2}
        >
          <img
            src="/Completed steps-pana.svg"
            alt="Etapas concluídas"
            className="w-full max-w-xs"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
