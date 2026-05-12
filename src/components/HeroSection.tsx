import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">
    {/* Dot grid background */}
    <div className="dot-grid" />

    {/* Navy glow — top right */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-80px",
        right: "-60px",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,31,63,0.32) 0%, transparent 70%)",
      }}
    />
    {/* Navy glow — bottom left */}
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-60px",
        left: "-40px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,31,63,0.2) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.img
        src="/bearlogo.png"
        alt="Bear Flow Logo"
        className="w-28 h-28 mx-auto mb-8 object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6 font-display"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Tecnologia sob medida para negócios que querem{" "}
        <span className="gradient-text">crescer.</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Desenvolvimento de sites, sistemas e aplicativos personalizados que transformam
        processos manuais em soluções digitais eficientes e lucrativas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <WhatsAppButton size="lg" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
