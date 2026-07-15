"use client";

import { useState } from "react";
import { hojeBR } from "../lib/helpers";

export default function ModalServico({ editar, onFechar, onSalvar }) {
  const [placa, setPlaca] = useState(editar?.placa || "");
  const [veiculo, setVeiculo] = useState(editar?.veiculo || "");
  const [ano, setAno] = useState(editar?.ano || "");
  const [servico, setServico] = useState(editar?.servico || "");
  const [saldo, setSaldo] = useState(editar ? String(editar.saldo) : "");
  const [pago, setPago] = useState(editar ? String(editar.pago) : "");
  const [comentario, setComentario] = useState(editar?.comentario || "");
  const [data, setData] = useState(editar?.data || hojeBR());

  function salvar() {
    if (!placa.trim() || !servico.trim()) {
      alert("Placa e Serviço são obrigatórios!");
      return;
    }
    const vs = parseFloat((saldo || "0").replace(",", "."));
    const vp = parseFloat((pago || "0").replace(",", "."));
    if (Number.isNaN(vs) || Number.isNaN(vp)) {
      alert("Os valores financeiros devem ser numéricos.");
      return;
    }
    onSalvar({
      placa,
      veiculo: veiculo.trim(),
      ano: ano.trim(),
      servico,
      saldo: vs,
      pago: vp,
      comentario,
      data,
    });
  }

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cab">
          {editar ? "✏️ Editar Serviço" : "🔧 Adicionar Serviço"}
        </div>

        <div className="modal-body">
          <div className="campo">
            <label>🚗 Placa do Veículo (Obrigatório)</label>
            <input value={placa} onChange={(e) => setPlaca(e.target.value.toUpperCase())} autoFocus />
          </div>
          <div className="campo">
            <label>🚙 Veículo / Modelo</label>
            <input value={veiculo} onChange={(e) => setVeiculo(e.target.value)} />
          </div>
          <div className="campo">
            <label>📅 Ano do Veículo</label>
            <input value={ano} onChange={(e) => setAno(e.target.value.replace(/\D/g, "").slice(0, 4))} />
          </div>
          <div className="campo">
            <label>🔧 Serviço Prestado (Obrigatório)</label>
            <input value={servico} onChange={(e) => setServico(e.target.value)} />
          </div>
          <div className="campo">
            <label>💰 Valor Total (R$)</label>
            <input value={saldo} onChange={(e) => setSaldo(e.target.value)} />
          </div>
          <div className="campo">
            <label>💵 Valor Pago (R$)</label>
            <input value={pago} onChange={(e) => setPago(e.target.value)} />
          </div>
          <div className="campo">
            <label>📝 Comentário / Observação</label>
            <input value={comentario} onChange={(e) => setComentario(e.target.value)} />
          </div>
          {editar && (
            <div className="campo">
              <label>🗓️ Data</label>
              <input value={data} onChange={(e) => setData(e.target.value)} />
            </div>
          )}
        </div>

        <div className="modal-acoes">
          <button className="btn btn-cinza" onClick={onFechar}>
            Cancelar
          </button>
          <button className="btn btn-verde" onClick={salvar}>
            💾 Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
