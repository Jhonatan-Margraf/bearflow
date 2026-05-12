import { AlertTriangle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ProblemSolutionSection = () => (
  <section className="py-28 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Seu negócio ainda depende de{" "}
          <span className="gradient-text">processos manuais?</span>
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        {/* Left — illustration */}
        <AnimatedSection className="flex items-center justify-center" delay={0.05}>
          <img
            src="/Robotics-rafiki.svg"
            alt="Automação e robótica"
            className="w-full max-w-sm"
          />
        </AnimatedSection>

        {/* Right — cards side by side */}
        <div className="grid sm:grid-cols-2 gap-5">
          <AnimatedSection delay={0.15}>
            <div
              className="rounded-2xl p-7 border h-full"
              style={{
                background: "rgba(120, 30, 30, 0.08)",
                borderColor: "rgba(180, 60, 60, 0.18)",
              }}
            >
              <AlertTriangle className="w-7 h-7 mb-4" style={{ color: "hsl(0, 65%, 55%)" }} />
              <h3 className="text-lg font-bold font-display mb-3">O problema</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Perda de tempo com tarefas repetitivas</li>
                <li>• Erros frequentes em processos manuais</li>
                <li>• Dificuldade de organização e acesso a dados</li>
                <li>• Falta de informações para tomada de decisão</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div
              className="rounded-2xl p-7 border h-full"
              style={{
                background: "rgba(0, 31, 63, 0.22)",
                borderColor: "rgba(0, 31, 63, 0.55)",
              }}
            >
              <CheckCircle className="w-7 h-7 mb-4 highlight" />
              <h3 className="text-lg font-bold font-display mb-3">A solução</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A <strong className="text-foreground">Bear Flow</strong> cria sistemas sob
                medida, desenvolvidos especificamente para a realidade do seu negócio.
                Transformamos processos em software inteligente, rápido e confiável.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
