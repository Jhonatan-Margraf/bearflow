import { motion } from "framer-motion";
import { Webhook, MonitorSmartphone, Smartphone, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Marquee from "./Marquee";
import { useEffectFlag } from "@/config/effects";
import flutterIcon from "@/assets/Flutter.png";
import pythonIcon from "@/assets/Python.png";
import figmaIcon from "@/assets/Figma.png";
import iaIcon from "@/assets/IA.png";
import visionIcon from "@/assets/Vision.png";

interface Tech {
  name: string;
  icon?: string;
  Icon?: LucideIcon;
}

const techs: Tech[] = [
  { name: "Flutter", icon: flutterIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "IA & ML", icon: iaIcon },
  { name: "Visão Comp.", icon: visionIcon },
  { name: "APIs REST", Icon: Webhook },
  { name: "Sistemas Web", Icon: MonitorSmartphone },
  { name: "Apps Mobile", Icon: Smartphone },
];

const TechCard = ({ tech }: { tech: Tech }) => (
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
      <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain mx-auto mb-3" loading="lazy" />
    ) : tech.Icon ? (
      <tech.Icon className="w-9 h-9 mx-auto mb-3" strokeWidth={1.5} style={{ color: "hsl(217, 93%, 65%)" }} />
    ) : null}
    <span className="text-sm font-semibold text-muted-foreground leading-tight">{tech.name}</span>
  </motion.div>
);

const TechnologiesSection = () => {
  const marquee = useEffectFlag("techMarquee");

  return (
    <section id="tecnologias" className="py-14 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold highlight uppercase tracking-widest mb-3">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            <span className="gradient-text">Tecnologias</span> que utilizamos
          </h2>
        </AnimatedSection>

        {marquee ? (
          <Marquee speed={30}>
            {techs.map((tech, i) => (
              <div key={i} className="w-[150px] shrink-0 px-1.5">
                <TechCard tech={tech} />
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {techs.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                <TechCard tech={tech} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologiesSection;
