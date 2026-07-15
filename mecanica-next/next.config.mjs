/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — nenhum backend. Gera HTML/JS puro em `out/`,
  // pronto para embutir no site de portfólio ou hospedar em qualquer lugar.
  output: "export",
  images: { unoptimized: true },
  // Servido embutido no site de portfólio sob /mecanica-demo/
  basePath: "/mecanica-demo",

};

export default nextConfig;
