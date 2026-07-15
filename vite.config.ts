import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Demos estáticas embutidas em public/ e servidas em sua própria subpasta.
// O Vite não resolve index de diretório na pasta public, então requisições
// sem arquivo (terminando em "/" ou sem extensão) caem no fallback SPA e
// devolvem o index.html do site principal. Este middleware reescreve essas
// rotas para o index.html correto de cada demo.
const DEMO_ROUTES = ["/mecanica-demo", "/peso-na-granja"];

const serveDemos = (): Plugin => ({
  name: "serve-static-demos",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url?.split("?")[0] ?? "";
      const base = DEMO_ROUTES.find(
        (r) => url === r || url.startsWith(`${r}/`),
      );
      if (base && (url === base || url.endsWith("/") || !path.extname(url))) {
        req.url = `${base}/index.html`;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), serveDemos(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
