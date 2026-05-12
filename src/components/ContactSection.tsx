import AnimatedSection from "./AnimatedSection";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => (
  <section id="contato" className="py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left — text + CTA */}
        <AnimatedSection>
          <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-5">
            Vamos transformar sua ideia em{" "}
            <span className="gradient-text">software.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mb-10 text-base leading-relaxed">
            Se você tem um processo manual, uma ideia de sistema ou quer digitalizar seu
            negócio, podemos construir a solução ideal juntos.
          </p>
          <WhatsAppButton size="lg" />
        </AnimatedSection>

        {/* Right — Contact us illustration */}
        <AnimatedSection
          className="hidden lg:flex items-center justify-center"
          delay={0.15}
        >
          <img
            src="/Contact us-bro.svg"
            alt="Entre em contato"
            className="w-full max-w-md"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
