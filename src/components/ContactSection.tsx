import AnimatedSection from "./AnimatedSection";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => (
  <section id="contato" className="py-28 bg-card">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Contato</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-5">
          Vamos transformar sua ideia em{" "}
          <span className="gradient-text">software.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed">
          Se você tem um processo manual, uma ideia de sistema ou quer digitalizar seu
          negócio, podemos construir a solução ideal juntos.
        </p>
        <WhatsAppButton size="lg" />
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
