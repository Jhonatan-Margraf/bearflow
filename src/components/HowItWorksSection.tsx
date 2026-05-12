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

      {/* Steps grid with connecting line on desktop */}
      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal connecting line — desktop only */}
        <div
          className="hidden lg:block absolute h-px"
          style={{
            top: "28px",
            left: "calc(12.5% + 14px)",
            right: "calc(12.5% + 14px)",
            background: "var(--bd-2)",
          }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col border transition-colors duration-200"
                style={{
                  background: "var(--bg-2)",
                  borderColor: "var(--bd-2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#21262d";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
                }}
              >
                {/* Icon box — positioned to align with the connecting line */}
                <div
                  className="navy-icon-box w-14 h-14 mb-5 relative z-10"
                  style={{ color: "var(--silver)" }}
                >
                  <step.icon className="w-6 h-6" />
                </div>

                <p
                  className="text-xs font-semibold mb-2 tracking-widest"
                  style={{ color: "var(--silver-dim)", fontFamily: "'DM Mono', monospace" }}
                >
                  0{i + 1}
                </p>

                <h3 className="text-lg font-bold font-display mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
