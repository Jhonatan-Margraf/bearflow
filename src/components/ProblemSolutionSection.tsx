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

      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-6xl mx-auto items-center">
        {/* Left — illustration */}
        <AnimatedSection className="flex items-center justify-center" delay={0.05}>
          <img
            src="/Robotics-rafiki.svg"
            alt="Automação e robótica"
            className="w-full max-w-md"
          />
        </AnimatedSection>

        {/* Right — cards glued side by side */}
        <AnimatedSection delay={0.15}>
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--bd-2)" }}
          >
            <div className="grid sm:grid-cols-2">
              {/* Problem */}
              <div
                className="p-8 border-b sm:border-b-0 sm:border-r"
                style={{
                  background: "rgba(120, 30, 30, 0.10)",
                  borderColor: "var(--bd-2)",
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

              {/* Solution */}
              <div
                className="p-8"
                style={{ background: "rgba(0, 31, 63, 0.22)" }}
              >
                <CheckCircle className="w-8 h-8 mb-5 highlight" />
                <h3 className="text-xl font-bold font-display mb-4">A solução</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  A <strong className="text-foreground">Bear Flow</strong> cria sistemas sob
                  medida, desenvolvidos especificamente para a realidade do seu negócio.
                  Transformamos processos em software inteligente, rápido e confiável.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
