import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import appPrint from "@/assets/app.png";
import sistemaPrint from "@/assets/sistema.png";
import webPrint from "@/assets/Web.png";

interface CaseCardProps {
  headline: string;
  description: string;
  features: string[];
  values: string[];
  imageSrc: string;
  imageAlt: string;
  delay: number;
}

const CaseCard = ({ headline, description, features, values, imageSrc, imageAlt, delay }: CaseCardProps) => (
  <AnimatedSection delay={delay}>
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl overflow-hidden border transition-colors duration-200 h-full flex flex-col"
      style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#21262d";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
      }}
    >
      <div
        className="h-52 border-b overflow-hidden"
        style={{ borderColor: "var(--bd-2)", background: "#161b22" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain object-center p-3 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-lg font-bold font-display mb-3 gradient-text">{headline}</h3>
        <p className="text-muted-foreground mb-5 text-base leading-relaxed">{description}</p>

        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
            Funcionalidades
          </h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span style={{ color: "var(--silver-dim)" }}>→</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-xl p-4 border mt-auto"
          style={{
            background: "rgba(0, 31, 63, 0.22)",
            borderColor: "rgba(0, 31, 63, 0.5)",
          }}
        >
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--silver-dim)" }}>
            Valor entregue
          </h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {values.map((v, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span style={{ color: "var(--silver)" }}>✓</span> {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </AnimatedSection>
);

const CasesSection = () => (
  <section id="cases" className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Portfólio</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Cases de <span className="gradient-text">Projetos</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <CaseCard
          delay={0.1}
          headline="Inteligência artificial aplicada à suinocultura."
          description="Aplicativo mobile para gestão completa de granjas com visão computacional para estimativa de peso de suínos por imagem em tempo real."
          features={[
            "Controle de lotes e baias",
            "Registro de quantidade de animais",
            "Histórico e análise de crescimento",
            "Predição baseada em genética e idade",
            "Alertas de peso fora do esperado",
          ]}
          values={[
            "Redução de manejo manual",
            "Dados em tempo real",
            "Apoio à tomada de decisão",
          ]}
          imageSrc={appPrint}
          imageAlt="Print do app mobile"
        />
        <CaseCard
          delay={0.2}
          headline="Adeus ao papel. Bem-vindo à organização digital."
          description="Sistema web para oficinas mecânicas que precisam organizar clientes e serviços de forma eficiente."
          features={[
            "Cadastro de clientes",
            "Emissão de ordens de serviço",
            "Histórico de serviços",
            "Busca rápida de clientes",
            "Centralização de informações",
          ]}
          values={[
            "Economia de papel",
            "Maior organização",
            "Histórico acessível em segundos",
          ]}
          imageSrc={sistemaPrint}
          imageAlt="Print do sistema desktop"
        />
        <CaseCard
          delay={0.3}
          headline="Presença digital para uma startup de desafios."
          description="Desenvolvimento do site para a plataforma DareU, uma startup focada em desafios lúdicos e engajamento digital."
          features={[
            "Apresentação do produto ao mercado",
            "Transmissão de seriedade",
            "Presença digital moderna",
            "Identidade visual forte",
          ]}
          values={[
            "Posicionamento profissional",
            "Identidade digital forte",
            "Maior credibilidade no lançamento",
          ]}
          imageSrc={webPrint}
          imageAlt="Print do site desktop"
        />
      </div>
    </div>
  </section>
);

export default CasesSection;
