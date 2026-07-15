import "./globals.css";

export const metadata = {
  title: "Oficina Pro — Demonstração",
  description:
    "Demonstração interativa (somente frontend) do sistema de gestão para oficina mecânica. Nenhum dado é salvo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
