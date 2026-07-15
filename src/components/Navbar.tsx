import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffectFlag } from "@/config/effects";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#cases", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Perguntas" },
];

const sectionIds = links.map((l) => l.href.slice(1));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollSpy = useEffectFlag("scrollSpy");
  const active = useActiveSection(sectionIds, scrollSpy);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/bearlogo.png" alt="Bear Flow" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold font-display text-foreground">
            Bear <span className="highlight">Flow</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = scrollSpy && active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-base font-medium transition-colors leading-none ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "hsl(217, 93%, 60%)" }}
                  />
                )}
              </a>
            );
          })}
          <WhatsAppButton label="Entre em contato" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-5 space-y-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-muted-foreground hover:text-foreground py-1"
            >
              {l.label}
            </a>
          ))}
          <WhatsAppButton label="Entre em contato" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
