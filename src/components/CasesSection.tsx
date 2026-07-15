import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";
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
  href?: string;
}

const CaseCard = ({ headline, description, features, values, imageSrc, imageAlt, delay, href }: CaseCardProps) => {
  const cardContent = (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl overflow-hidden border transition-colors duration-200 h-full flex flex-col"
      style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)", cursor: href ? "pointer" : "default" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#21262d";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
      }}
    >
      <div
        className="h-40 md:h-52 border-b overflow-hidden relative"
        style={{ borderColor: "var(--bd-2)", background: "#161b22" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {href && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
              Ver projeto <span className="text-lg">↗</span>
            </span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-7 flex flex-col flex-1">
        <h3 className="text-lg font-bold font-display gradient-text mb-3">{headline}</h3>
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

        {href && (
          <div className="px-5 md:px-7 pb-5 md:pb-7 pt-4 flex justify-center">
            <Magnetic strength={0.25}>
              <span
                className="inline-flex items-center gap-2 font-semibold text-base px-7 py-3 rounded-full border transition-colors duration-200"
                style={{ color: "#e6edf3", borderColor: "var(--bd-2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "hsl(217,93%,65%)";
                  (e.currentTarget as HTMLSpanElement).style.color = "hsl(217,93%,65%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--bd-2)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#e6edf3";
                }}
              >
                Ver projeto ↗
              </span>
            </Magnetic>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <AnimatedSection delay={delay} className="h-full">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
        className="h-full"
      >
      <TiltCard className="h-full">
        <SpotlightCard className="rounded-2xl overflow-hidden h-full">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
              {cardContent}
            </a>
          ) : (
            cardContent
          )}
        </SpotlightCard>
      </TiltCard>
      </motion.div>
    </AnimatedSection>
  );
};

const CasesSection = () => (
  <section id="cases" className="py-14 md:py-28 bg-background">
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
          href="/peso-na-granja/"
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
          href="/mecanica-demo/"
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
          href="https://dareu.vercel.app/"
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
