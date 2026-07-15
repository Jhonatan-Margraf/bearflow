"use client";

export default function Sidebar({ view, onClientes, onOrdem }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Mecânica SP</div>

      <button
        className={`nav-btn ${view === "clientes" || view === "detalhes" ? "ativo" : ""}`}
        onClick={onClientes}
      >
        👥 <span className="rotulo">&nbsp;Clientes</span>
      </button>
      <button
        className={`nav-btn ${view === "ordem" ? "ativo" : ""}`}
        onClick={onOrdem}
      >
        📋 <span className="rotulo">&nbsp;Ordem</span>
      </button>

      <div className="drive-card">
        <div className="titulo">Google Drive</div>
        <div className="status">☁️ Sincronizado</div>
        <button
          onClick={() =>
            alert("Demonstração: o backup no Google Drive não está ativo nesta amostra.")
          }
        >
          ⬆️ Salvar Agora
        </button>
      </div>

      <div className="sidebar-versao">v3.0 · Oficina Pro</div>
    </aside>
  );
}
