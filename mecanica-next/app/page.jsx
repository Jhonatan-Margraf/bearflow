"use client";

import { useState } from "react";
import { clientesIniciais, servicosIniciais } from "../lib/demoData";
import { novoId, normalizarPlaca } from "../lib/helpers";
import Sidebar from "../components/Sidebar";
import ClientesView from "../components/ClientesView";
import DetalhesView from "../components/DetalhesView";
import OrdemView from "../components/OrdemView";

export default function Page() {
  const [view, setView] = useState("clientes"); // clientes | detalhes | ordem
  const [clientes, setClientes] = useState(clientesIniciais);
  const [servicos, setServicos] = useState(servicosIniciais);
  const [clienteAtual, setClienteAtual] = useState(null);

  // --- Navegação -----------------------------------------------------
  function abrirDetalhes(cliente) {
    setClienteAtual(cliente);
    setView("detalhes");
  }

  // --- Mutações em memória (nada é persistido) -----------------------
  function addCliente(dados) {
    setClientes((prev) => [
      ...prev,
      { id: novoId(), ...dados, placa: normalizarPlaca(dados.placa) },
    ]);
  }

  function updateCliente(id, dados) {
    setClientes((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, ...dados, placa: normalizarPlaca(dados.placa) } : c
      )
    );
    setClienteAtual((c) => (c && c.id === id ? { ...c, ...dados } : c));
  }

  function deleteCliente(id) {
    setClientes((prev) => prev.filter((c) => c.id !== id));
    setServicos((prev) => prev.filter((s) => s.clienteId !== id));
  }

  function addServico(clienteId, dados) {
    setServicos((prev) => [
      ...prev,
      { id: novoId(), clienteId, ...dados, placa: normalizarPlaca(dados.placa) },
    ]);
  }

  function updateServico(id, dados) {
    setServicos((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, ...dados, placa: normalizarPlaca(dados.placa) } : s
      )
    );
  }

  function deleteServico(id) {
    setServicos((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="app">
      <Sidebar
        view={view}
        onClientes={() => setView("clientes")}
        onOrdem={() => setView("ordem")}
      />

      <main className="area">
        {view === "clientes" && (
          <ClientesView
            clientes={clientes}
            servicos={servicos}
            onAbrir={abrirDetalhes}
            onAdd={addCliente}
            onUpdate={updateCliente}
            onDelete={deleteCliente}
          />
        )}

        {view === "detalhes" && clienteAtual && (
          <DetalhesView
            cliente={clienteAtual}
            servicos={servicos.filter((s) => s.clienteId === clienteAtual.id)}
            onVoltar={() => setView("clientes")}
            onAdd={(dados) => addServico(clienteAtual.id, dados)}
            onUpdate={updateServico}
            onDelete={deleteServico}
          />
        )}

        {view === "ordem" && <OrdemView clientes={clientes} />}
      </main>
    </div>
  );
}
