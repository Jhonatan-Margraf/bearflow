"use client";

import { useState } from "react";
import { hojeBR } from "../lib/helpers";
import OSPreview from "./OSPreview";

const NUM_LINHAS = 10;
const linhasVazias = () =>
  Array.from({ length: NUM_LINHAS }, () => ({ qtd: "", desc: "", unit: "" }));

function num(v) {
  const n = parseFloat(String(v).replace(",", "."));
  return Number.isNaN(n) ? 0 : n;
}

export default function OrdemView({ clientes }) {
  const [cab, setCab] = useState({
    veiculo: "",
    ano: "",
    placa: "",
    data: hojeBR(),
    cliente: "",
    fone: "",
  });
  const [linhas, setLinhas] = useState(linhasVazias());
  const [preview, setPreview] = useState(null);

  const total = linhas.reduce((acc, l) => acc + num(l.qtd) * num(l.unit), 0);

  function setCampo(k, v) {
    setCab((c) => ({ ...c, [k]: v }));
  }

  // Ao digitar/selecionar um cliente conhecido, preenche fone e placa (autocomplete do original).
  function onCliente(v) {
    const match = clientes.find((c) => c.nome.toLowerCase() === v.trim().toLowerCase());
    setCab((c) => ({
      ...c,
      cliente: v,
      fone: match ? match.telefone : c.fone,
      placa: match && match.placa ? match.placa : c.placa,
    }));
  }

  function setLinha(i, k, v) {
    setLinhas((ls) => ls.map((l, idx) => (idx === i ? { ...l, [k]: v } : l)));
  }

  function limpar() {
    setCab({ veiculo: "", ano: "", placa: "", data: hojeBR(), cliente: "", fone: "" });
    setLinhas(linhasVazias());
  }

  function imprimir() {
    const linhasOS = linhas
      .filter((l) => l.qtd || l.desc || l.unit)
      .map((l) => {
        const tot = num(l.qtd) * num(l.unit);
        return {
          qtd: l.qtd,
          desc: l.desc,
          unit: l.unit ? num(l.unit).toFixed(2) : "",
          tot: tot ? tot.toFixed(2) : "",
        };
      });
    setPreview({ ...cab, linhas: linhasOS, total });
  }

  return (
    <>
      <div className="pagina-topo">
        <h1 className="pagina-titulo escuro">📋 Ordem de Serviço</h1>
        <button className="btn btn-cinza" onClick={limpar}>
          🗑️ Limpar
        </button>
        <button className="btn btn-verde" onClick={imprimir}>
          🖨️ Imprimir
        </button>
      </div>

      {/* Cabeçalho */}
      <div className="os-card">
        <div className="os-cab-grid">
          <div className="campo col-span-2">
            <label>🚗 Veículo</label>
            <input value={cab.veiculo} onChange={(e) => setCampo("veiculo", e.target.value)} />
          </div>
          <div className="campo">
            <label>📅 Ano</label>
            <input
              value={cab.ano}
              onChange={(e) => setCampo("ano", e.target.value.replace(/\D/g, "").slice(0, 4))}
            />
          </div>
          <div className="campo">
            <label>🔢 Placa</label>
            <input
              value={cab.placa}
              onChange={(e) => setCampo("placa", e.target.value.toUpperCase())}
            />
          </div>
          <div className="campo">
            <label>📆 Data</label>
            <input value={cab.data} onChange={(e) => setCampo("data", e.target.value)} />
          </div>
          <div className="campo col-span-2">
            <label>👤 Cliente</label>
            <input
              list="clientes-lista"
              value={cab.cliente}
              onChange={(e) => onCliente(e.target.value)}
            />
            <datalist id="clientes-lista">
              {clientes.map((c) => (
                <option key={c.id} value={c.nome} />
              ))}
            </datalist>
          </div>
          <div className="campo">
            <label>📱 Fone</label>
            <input value={cab.fone} onChange={(e) => setCampo("fone", e.target.value)} />
          </div>
        </div>
      </div>

      {/* Itens */}
      <div className="os-card">
        <div className="os-itens-header">
          <span>Qtd</span>
          <span>Descrição / Serviço</span>
          <span>P. Unitário</span>
          <span>TOTAL</span>
        </div>

        <div className="os-itens-scroll">
          {linhas.map((l, i) => {
            const tot = num(l.qtd) * num(l.unit);
            return (
              <div className="os-item-row" key={i}>
                <input
                  className="center"
                  value={l.qtd}
                  onChange={(e) => setLinha(i, "qtd", e.target.value)}
                />
                <input value={l.desc} onChange={(e) => setLinha(i, "desc", e.target.value)} />
                <input
                  className="center"
                  value={l.unit}
                  onChange={(e) => setLinha(i, "unit", e.target.value)}
                />
                <input
                  className="center readonly"
                  readOnly
                  value={tot ? tot.toFixed(2) : ""}
                />
              </div>
            );
          })}
        </div>

        <div className="os-rodape">
          <span className="total-lbl">TOTAL R$</span>
          <span className="total-val">{total.toFixed(2)}</span>
        </div>
      </div>

      {preview && <OSPreview ordem={preview} onFechar={() => setPreview(null)} />}
    </>
  );
}
