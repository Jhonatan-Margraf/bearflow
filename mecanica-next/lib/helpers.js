// Regras de formatação e status — espelham domain/formatters.py e domain/pagamento.py.

export function fmtMoeda(valor) {
  return `R$ ${Number(valor).toFixed(2)}`;
}

export function normalizarPlaca(placa) {
  return (placa || "").trim().toUpperCase();
}

// Retorna { label, tag } com base nos valores, igual ao status_pagamento() do Python.
export function statusPagamento(saldo, pago) {
  if (pago >= saldo) return { label: "✅ Pago", tag: "pago" };
  if (pago > 0) return { label: "⚠️ Parcial", tag: "parcial" };
  return { label: "❌ Não Pago", tag: "naopago" };
}

export const STATUS_COLORS = {
  pago: "#1A7A3C",
  naopago: "#C0392B",
  parcial: "#B45309",
};

// Máscara de CPF: 000.000.000-00
export function mascaraCpf(valor) {
  const d = (valor || "").replace(/\D/g, "").slice(0, 11);
  let out = d;
  if (d.length > 9) out = `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
  else if (d.length > 6) out = `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  else if (d.length > 3) out = `${d.slice(0, 3)}.${d.slice(3)}`;
  return out;
}

// Máscara de telefone: (00) 00000-0000
export function mascaraTelefone(valor) {
  const d = (valor || "").replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

// Data de hoje no formato dd/mm/aaaa
export function hojeBR() {
  const n = new Date();
  const p = (x) => String(x).padStart(2, "0");
  return `${p(n.getDate())}/${p(n.getMonth() + 1)}/${n.getFullYear()}`;
}

let _seq = 1000;
export function novoId() {
  return ++_seq;
}
