import * as AccordionPrimitive from "@radix-ui/react-accordion";
import AnimatedSection from "./AnimatedSection";

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const faqs = [
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Um site institucional costuma ser entregue em 2 a 4 semanas. Sistemas web e aplicativos mobile têm prazo estimado entre 4 e 12 semanas. Após a conversa inicial, apresentamos um cronograma claro antes de qualquer contrato.",
  },
  {
    question: "Como funciona o processo do início ao fim?",
    answer:
      "Começa com uma conversa para entender o negócio e o problema. Depois criamos um protótipo visual para validar antes de codar. Em seguida o desenvolvimento acontece em ciclos curtos com feedback constante. Por fim, entregamos a solução pronta para uso com documentação e suporte inicial.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Todo projeto inclui um período de suporte pós-entrega para ajustes e correções. Para projetos contínuos ou que precisam evoluir, trabalhamos com contratos de manutenção mensal. O contato é sempre direto — sem fila de suporte, sem intermediários.",
  },
  {
    question: "Posso solicitar alterações durante o desenvolvimento?",
    answer:
      "Sim, e isso é incentivado. Trabalhamos com ciclos curtos justamente para coletar feedback frequente e ajustar a rota quando necessário. Pequenas alterações ao longo do processo são muito mais fáceis do que grandes mudanças no final.",
  },
  {
    question: "Preciso ter o design pronto para começar?",
    answer:
      "Não. O design faz parte do processo. Antes de desenvolver, criamos o protótipo visual da solução — desde wireframes até layouts finais no Figma. Você aprova antes de qualquer desenvolvimento começar. Se você já tiver um design, também podemos partir dele.",
  },
  {
    question: "A Bear Flow atende empresas de qualquer porte?",
    answer:
      "O foco da Bear Flow são pequenas e médias empresas — negócios que precisam de soluções eficientes mas não têm estrutura para manter uma equipe de TI interna. Se você está nesse perfil, a gente provavelmente é a parceria certa.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
          Perguntas <span className="gradient-text">frequentes</span>
        </h2>
        <p className="text-muted-foreground text-base">
          Tudo que você precisa saber antes de começar.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <AccordionPrimitive.Root type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionPrimitive.Item
                key={i}
                value={`item-${i}`}
                className="faq-item border-b"
                style={{ borderColor: "#21262d" }}
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="faq-trigger group flex flex-1 items-center justify-between gap-4 py-5 text-left font-display font-semibold text-base transition-colors duration-150">
                    {faq.question}
                    <span
                      className="faq-plus group-data-[state=open]:rotate-45 shrink-0 grid place-items-center rounded-md"
                      style={{
                        width: "26px",
                        height: "26px",
                        border: "1px solid #30363d",
                        background: "#21262d",
                        transition:
                          "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.15s, border-color 0.15s",
                      }}
                    >
                      <PlusIcon />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
