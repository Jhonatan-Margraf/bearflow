import { Globe, Database, Smartphone, Cpu } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: Globe,
    title: "Sites que fortalecem sua presença digital",
    description:
      "Um site bem desenvolvido aumenta o engajamento, transmite profissionalismo e gera mais confiança no seu produto ou serviço.",
  },
  {
    icon: Database,
    title: "Sistemas que organizam processos",
    description:
      "Sistemas personalizados ajudam a organizar informações, centralizar dados de clientes e melhorar a gestão do negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos que aproximam clientes",
    description:
      "Aplicativos mobile criam novas formas de interação com clientes, com acesso rápido e soluções mais práticas.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aplicada a problemas reais",
    description:
      "Soluções que realmente fazem sentido para o negócio, trazendo mais organização, presença digital e eficiência.",
  },
];

const ProblemsSection = () => (
  <section id="solucoes" className="py-14 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Soluções</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Problemas que a Bear Flow <span className="gradient-text">resolve</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Muitos negócios possuem boas ideias e bons produtos, mas enfrentam dificuldades
          quando o assunto é tecnologia.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div
              className="rounded-2xl p-5 md:p-7 border transition-colors duration-200 h-full"
              style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#30363d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd-2)";
              }}
            >
              <div className="navy-icon-box w-12 h-12 mb-5" style={{ color: "hsl(217, 93%, 65%)" }}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
