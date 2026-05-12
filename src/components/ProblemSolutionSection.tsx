import { AlertTriangle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ProblemSolutionSection = () => (
  <section className="py-28 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
          Seu negócio ainda depende de{" "}
          <span className="gradient-text">processos manuais?</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        <AnimatedSection delay={0.1}>
          <div
            className="rounded-2xl p-8 border h-full"
            style={{
              background: "rgba(120, 30, 30, 0.08)",
              borderColor: "rgba(180, 60, 60, 0.18)",
            }}
          >
            <AlertTriangle className="w-8 h-8 mb-5" style={{ color: "hsl(0, 65%, 55%)" }} />
            <h3 className="text-xl font-bold font-display mb-4">O problema</h3>
            <ul className="space-y-3 text-muted-foreground text-base">
              <li>• Perda de tempo com tarefas repetitivas</li>
              <li>• Erros frequentes em processos manuais</li>
              <li>• Dificuldade de organização e acesso a dados</li>
              <li>• Falta de informações para tomada de decisão</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            className="rounded-2xl p-8 border h-full"
            style={{
              background: "rgba(0, 31, 63, 0.22)",
              borderColor: "rgba(0, 31, 63, 0.55)",
            }}
          >
            <CheckCircle className="w-8 h-8 mb-5 highlight" />
            <h3 className="text-xl font-bold font-display mb-4">A solução</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              A <strong className="text-foreground">Bear Flow</strong> cria sistemas sob
              medida, desenvolvidos especificamente para a realidade do seu negócio.
              Transformamos processos em software inteligente, rápido e confiável.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
