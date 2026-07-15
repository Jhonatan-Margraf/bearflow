"use client";

import { useMemo, useState } from "react";
import StatCard from "./StatCard";
import DemoBanner from "./DemoBanner";
import ModalCliente from "./ModalCliente";

export default function ClientesView({
  clientes,
  servicos,
  onAbrir,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [busca, setBusca] = useState("");
  const [selId, setSelId] = useState(null);
  const [modal, setModal] = useState(null); // null | "novo" | cliente(editar)

  const filtrados = useMemo(() => {
    const t = busca.trim().toLowerCase();
    if (!t) return clientes;
    return clientes.filter(
      (c) =>
        c.nome.toLowerCase().includes(t) ||
        (c.placa || "").toLowerCase().includes(t)
    );
  }, [clientes, busca]);

  // Estatísticas — igual ao contar_servicos_status() do backend.
  const pagos = servicos.filter((s) => s.pago >= s.saldo).length;
  const abertos = servicos.filter((s) => s.pago < s.saldo).length;

  const selecionado = clientes.find((c) => c.id === selId) || null;

  function exigirSelecao() {
    if (!selecionado) {
      alert("Clique em uma linha da tabela para selecionar um cliente.");
      return false;
    }
    return true;
  }

  function excluir() {
    if (!exigirSelecao()) return;
    if (
      confirm(
        `Excluir o cliente "${selecionado.nome}"?\n\nTodos os serviços vinculados também serão excluídos.`
      )
    ) {
      onDelete(selecionado.id);
      setSelId(null);
    }
  }

  return (
    <>
      <DemoBanner />

      <div className="pagina-topo">
        <h1 className="pagina-titulo">Meus Clientes</h1>
        <button className="btn btn-verde" onClick={() => setModal("novo")}>
          + Novo Cliente
        </button>
        <button
          className="btn btn-cinza"
          disabled={!selecionado}
          onClick={() => exigirSelecao() && onAbrir(selecionado)}
        >
          📂 Abrir
        </button>
        <button
          className="btn btn-cinza"
          disabled={!selecionado}
          onClick={() => exigirSelecao() && setModal(selecionado)}
        >
          ✏️ Editar
        </button>
        <button className="btn btn-vermelho" disabled={!selecionado} onClick={excluir}>
          🗑️ Excluir
        </button>
      </div>

      <div className="cards-row">
        <StatCard icone="👥" label="Total Clientes" valor={filtrados.length} cor="var(--cor-verde-card)" />
        <StatCard icone="✅" label="Serviços Pagos" valor={pagos} cor="var(--cor-azul-card)" />
        <StatCard icone="⏳" label="Em Aberto" valor={abertos} cor="var(--cor-laranja-card)" />
      </div>

      <div className="filtro-bar">
        <span className="lupa">🔍</span>
        <input
          type="text"
          placeholder="Buscar cliente por nome ou placa..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="tabela-wrap">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Placa</th>
              <th>Endereço</th>
              <th>Cidade</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((c) => (
              <tr
                key={c.id}
                className={c.id === selId ? "selecionada" : ""}
                onClick={() => setSelId(c.id)}
                onDoubleClick={() => onAbrir(c)}
              >
                <td>{c.id}</td>
                <td>{c.nome}</td>
                <td>{c.cpf}</td>
                <td>{c.placa}</td>
                <td>{c.endereco}</td>
                <td>{c.cidade}</td>
                <td>{c.telefone}</td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td className="tabela-vazia" colSpan={7}>
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modal && (
        <ModalCliente
          editar={modal === "novo" ? null : modal}
          onFechar={() => setModal(null)}
          onSalvar={(dados) => {
            if (modal === "novo") onAdd(dados);
            else onUpdate(modal.id, dados);
            setModal(null);
          }}
        />
      )}
    </>
  );
}
