"use client";

import { useState } from "react";
import { mascaraCpf, mascaraTelefone } from "../lib/helpers";

export default function ModalCliente({ editar, onFechar, onSalvar }) {
  const [nome, setNome] = useState(editar?.nome || "");
  const [cpf, setCpf] = useState(editar?.cpf || "");
  const [telefone, setTelefone] = useState(editar?.telefone || "");
  const [placa, setPlaca] = useState(editar?.placa || "");
  const [endereco, setEndereco] = useState(editar?.endereco || "");
  const [cidade, setCidade] = useState(editar?.cidade || "");

  function salvar() {
    if (!nome.trim()) {
      alert("O nome do cliente é obrigatório!");
      return;
    }
    onSalvar({ nome: nome.trim(), cpf, telefone, placa, endereco, cidade });
  }

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cab">
          {editar ? "✏️ Editar Cliente" : "➕ Cadastrar Novo Cliente"}
        </div>

        <div className="modal-body">
          <div className="campo">
            <label>👤 Nome Completo *</label>
            <input value={nome} onChange={(e) => setNome(e.target.value)} autoFocus />
          </div>
          <div className="campo">
            <label>🪪 CPF</label>
            <input value={cpf} onChange={(e) => setCpf(mascaraCpf(e.target.value))} />
          </div>
          <div className="campo">
            <label>📱 Celular / Telefone</label>
            <input
              value={telefone}
              onChange={(e) => setTelefone(mascaraTelefone(e.target.value))}
            />
          </div>
          <div className="campo">
            <label>🚗 Placa do Veículo</label>
            <input
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
            />
          </div>
          <div className="campo">
            <label>📍 Endereço</label>
            <input value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          </div>
          <div className="campo">
            <label>🏙️ Cidade</label>
            <input value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </div>
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
