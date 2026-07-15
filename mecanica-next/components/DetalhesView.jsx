"use client";

import { useMemo, useState } from "react";
import { fmtMoeda, statusPagamento, STATUS_COLORS } from "../lib/helpers";
import ModalServico from "./ModalServico";
import OSPreview from "./OSPreview";

const STATUS_FILTRO = { Pago: "✅ Pago", Parcial: "⚠️ Parcial", "Não Pago": "❌ Não Pago" };

export default function DetalhesView({
  cliente,
  servicos,
  onVoltar,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [busca, setBusca] = useState("");
  const [statusSel, setStatusSel] = useState("Todos");
  const [selId, setSelId] = useState(null);
  const [modal, setModal] = useState(null); // null | "novo" | servico(editar)
  const [osPreview, setOsPreview] = useState(null);

  const lista = useMemo(() => {
    const t = busca.trim().toLowerCase();
    return servicos
      .filter((s) => {
        if (t && !(`${s.placa} ${s.servico}`.toLowerCase().includes(t))) return false;
        if (statusSel !== "Todos") {
          const { label } = statusPagamento(s.saldo, s.pago);
          if (label !== STATUS_FILTRO[statusSel]) return false;
        }
        return true;
      })
      .sort((a, b) => b.id - a.id);
  }, [servicos, busca, statusSel]);

  const selecionado = servicos.find((s) => s.id === selId) || null;

  function exigirSelecao() {
    if (!selecionado) {
      alert("Clique em uma linha para selecionar o serviço.");
      return false;
    }
    return true;
  }

  function verOS() {
    if (!exigirSelecao()) return;
    if (!selecionado.ordem) {
      alert(
        "Este serviço não possui Ordem de Serviço vinculada.\n\nApenas serviços criados pela aba Ordem de Serviço têm esse vínculo."
      );
      return;
    }
    setOsPreview(selecionado.ordem);
  }

  function excluir() {
    if (!exigirSelecao()) return;
    if (confirm(`Excluir o serviço "${selecionado.servico}"?`)) {
      onDelete(selecionado.id);
      setSelId(null);
    }
  }

  return (
    <>
      <div className="pagina-topo">
        <button className="btn btn-cinza" onClick={onVoltar}>
          ⬅ Voltar
        </button>
        <h1 className="pagina-titulo">Histórico — {cliente.nome}</h1>
        <button className="btn btn-verde" onClick={() => setModal("novo")}>
          + Novo Serviço
        </button>
        <button className="btn btn-azul" disabled={!selecionado} onClick={verOS}>
          📄 Ver OS
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

      <div className="filtro-bar">
        <span className="lupa">🔍</span>
        <input
          type="text"
          placeholder="Buscar por Placa ou Serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <span className="filtro-label">Status:</span>
        <select value={statusSel} onChange={(e) => setStatusSel(e.target.value)}>
          <option>Todos</option>
          <option>Pago</option>
          <option>Parcial</option>
          <option>Não Pago</option>
        </select>
      </div>

      <div className="tabela-wrap">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Placa</th>
              <th>Veículo</th>
              <th>Ano</th>
              <th>Total (R$)</th>
              <th>Pago (R$)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((s) => {
              const { label, tag } = statusPagamento(s.saldo, s.pago);
              const selecionada = s.id === selId;
              return (
                <tr
                  key={s.id}
                  className={selecionada ? "selecionada" : ""}
                  onClick={() => setSelId(s.id)}
                  onDoubleClick={() => s.ordem && setOsPreview(s.ordem)}
                >
                  <td>{s.id}</td>
                  <td>{s.data}</td>
                  <td>{s.placa}</td>
                  <td>{s.veiculo}</td>
                  <td>{s.ano}</td>
                  <td>{fmtMoeda(s.saldo)}</td>
                  <td>{fmtMoeda(s.pago)}</td>
                  <td style={{ color: selecionada ? "#166534" : STATUS_COLORS[tag] }}>
                    {label}
                  </td>
                </tr>
              );
            })}
            {lista.length === 0 && (
              <tr>
                <td className="tabela-vazia" colSpan={8}>
                  Nenhum serviço encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modal && (
        <ModalServico
          editar={modal === "novo" ? null : modal}
          onFechar={() => setModal(null)}
          onSalvar={(dados) => {
            if (modal === "novo") onAdd(dados);
            else onUpdate(modal.id, dados);
            setModal(null);
          }}
        />
      )}

      {osPreview && <OSPreview ordem={osPreview} onFechar={() => setOsPreview(null)} />}
    </>
  );
}
