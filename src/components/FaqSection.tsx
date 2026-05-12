import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b"
                style={{ borderColor: "#21262d" }}
              >
                <AccordionTrigger
                  className="font-display font-semibold text-base text-left hover:no-underline py-5"
                  style={{ color: "#e6edf3" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
