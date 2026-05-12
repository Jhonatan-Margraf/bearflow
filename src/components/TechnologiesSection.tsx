import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import flutterIcon from "@/assets/Flutter.png";
import pythonIcon from "@/assets/Python.png";
import figmaIcon from "@/assets/Figma.png";
import iaIcon from "@/assets/IA.png";
import visionIcon from "@/assets/Vision.png";

const techs = [
  { name: "Flutter", icon: flutterIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "IA & ML", icon: iaIcon },
  { name: "Visão Comp.", icon: visionIcon },
  { name: "APIs REST", emoji: "🔗" },
  { name: "Sistemas Web", emoji: "💻" },
  { name: "Apps Mobile", emoji: "📲" },
];

const TechnologiesSection = () => (
  <section id="tecnologias" className="py-28 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          <span className="gradient-text">Tecnologias</span> que utilizamos
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {techs.map((tech, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className="h-full">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="rounded-xl p-5 text-center border transition-colors duration-200 cursor-default h-full flex flex-col items-center justify-center min-h-[110px]"
              style={{ background: "var(--bg-2)", borderColor: "var(--bd-2)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#21262d";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#30363d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd-2)";
              }}
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-9 h-9 object-contain mx-auto mb-3"
                  loading="lazy"
                />
              ) : (
                <span className="text-3xl block mb-3">{tech.emoji}</span>
              )}
              <span className="text-sm font-semibold text-muted-foreground leading-tight">{tech.name}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
