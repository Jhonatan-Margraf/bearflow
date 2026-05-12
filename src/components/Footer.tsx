const Footer = () => (
  <footer className="py-7 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src="/bearlogo.png" alt="Bear Flow" className="w-8 h-8 object-contain" />
        <span className="text-base font-bold font-display text-foreground">
          Bear <span className="highlight">Flow</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bear Flow. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
