import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#cases", label: "Projetos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#contato", label: "Contato" },
  ];

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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors leading-none"
            >
              {l.label}
            </a>
          ))}
          <WhatsAppButton />
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
          <WhatsAppButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
