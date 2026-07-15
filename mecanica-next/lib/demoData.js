// Dados fictícios de demonstração — equivalentes ao scripts/seed.py do sistema real.
// Nada aqui é persistido: são apenas o estado inicial em memória da demo.

export const clientesIniciais = [
  { id: 1,  nome: "João Silva",     cpf: "123.456.789-00", telefone: "(45) 99999-1111", placa: "ABC1234", endereco: "Rua das Flores, 10",       cidade: "Toledo" },
  { id: 2,  nome: "Maria Oliveira", cpf: "987.654.321-11", telefone: "(45) 98888-2222", placa: "XYZ5678", endereco: "Av. Brasil, 500",           cidade: "Toledo" },
  { id: 3,  nome: "Carlos Souza",   cpf: "444.555.666-77", telefone: "(45) 97777-3333", placa: "KML9090", endereco: "Rua Santos Dumont, 123",    cidade: "Cascavel" },
  { id: 4,  nome: "Ana Beatriz",    cpf: "111.222.333-44", telefone: "(45) 99111-4444", placa: "BRA2E19", endereco: "Rua Paraná, 88",            cidade: "Toledo" },
  { id: 5,  nome: "Marcos Pontes",  cpf: "555.444.333-22", telefone: "(45) 99222-5555", placa: "JHT4455", endereco: "Rua XV de Novembro, 202",   cidade: "Ouro Verde" },
  { id: 6,  nome: "Fernanda Lima",  cpf: "666.777.888-99", telefone: "(45) 99333-6666", placa: "OWP1020", endereco: "Av. Parigot, 1500",         cidade: "Toledo" },
  { id: 7,  nome: "Ricardo Alves",  cpf: "222.333.444-55", telefone: "(45) 99444-7777", placa: "QWE9988", endereco: "Rua General Estilac, 45",   cidade: "Toledo" },
  { id: 8,  nome: "Patrícia Meira", cpf: "333.444.555-66", telefone: "(45) 99555-8888", placa: "MKP3321", endereco: "Rua Almirante Barroso, 90", cidade: "Cascavel" },
  { id: 9,  nome: "Lucas Gabriel",  cpf: "777.888.999-00", telefone: "(45) 99666-9999", placa: "LUI0011", endereco: "Rua Sete de Setembro, 300", cidade: "São Pedro" },
  { id: 10, nome: "Sonia Abrão",    cpf: "888.999.000-11", telefone: "(45) 99777-0000", placa: "BIO2024", endereco: "Loteamento Biopark",        cidade: "Toledo" },
];

// Monta uma ordem de serviço (linhas + total) a partir de itens simples.
function os(cliente, fone, veiculo, ano, placa, data, itens) {
  let total = 0;
  const linhas = itens.map(([qtd, desc, unit]) => {
    const tot = Math.round(qtd * unit * 100) / 100;
    total += tot;
    return { qtd: String(qtd), desc, unit: unit.toFixed(2), tot: tot.toFixed(2) };
  });
  return { cliente, fone, veiculo, ano, placa, data, linhas, total };
}

export const servicosIniciais = [
  // Serviços simples (sem OS impressa)
  { id: 1,  clienteId: 3,  data: "10/03/2026", placa: "KML9090", veiculo: "Fiat Strada",   ano: "2019", servico: "Freios Traseiros",          saldo: 450,  pago: 0,    comentario: "Aguardando PIX." },
  { id: 2,  clienteId: 4,  data: "05/03/2026", placa: "BRA2E19", veiculo: "VW Polo",       ano: "2021", servico: "Revisão 50k km",            saldo: 850,  pago: 425,  comentario: "Metade paga." },
  { id: 3,  clienteId: 5,  data: "06/03/2026", placa: "JHT4455", veiculo: "Chevrolet S10", ano: "2018", servico: "Bateria Nova",              saldo: 380,  pago: 380,  comentario: "Garantia 1 ano." },
  { id: 4,  clienteId: 6,  data: "08/03/2026", placa: "OWP1020", veiculo: "Honda HR-V",    ano: "2022", servico: "Alinhamento e Balanceam.",  saldo: 150,  pago: 150,  comentario: "Sem observações." },
  { id: 5,  clienteId: 7,  data: "10/03/2026", placa: "QWE9988", veiculo: "Toyota Corolla",ano: "2020", servico: "Lâmpada Farol",             saldo: 45,   pago: 45,   comentario: "Substituição rápida." },
  { id: 6,  clienteId: 8,  data: "11/03/2026", placa: "MKP3321", veiculo: "Ford Ka",       ano: "2017", servico: "Embreagem",                 saldo: 1800, pago: 1000, comentario: "Saldo para o dia 20." },
  { id: 7,  clienteId: 9,  data: "12/03/2026", placa: "LUI0011", veiculo: "Renault Kwid",  ano: "2023", servico: "Limpeza Radiador",          saldo: 220,  pago: 220,  comentario: "Ok." },
  { id: 8,  clienteId: 10, data: "13/03/2026", placa: "BIO2024", veiculo: "Jeep Renegade", ano: "2024", servico: "Filtro Ar Condicionado",   saldo: 110,  pago: 0,    comentario: "Pendente." },

  // Serviços com Ordem de Serviço completa
  {
    id: 9, clienteId: 1, data: "01/03/2026", placa: "ABC1234", veiculo: "Fiat Palio", ano: "2015",
    servico: "Ordem de Serviço", saldo: 250, pago: 250, comentario: "Pago à vista.",
    ordem: os("João Silva", "(45) 99999-1111", "Fiat Palio", "2015", "ABC1234", "01/03/2026", [
      [1, "Troca de Óleo 5W30", 120.0],
      [1, "Filtro de Óleo", 35.0],
      [1, "Mão de Obra", 95.0],
    ]),
  },
  {
    id: 10, clienteId: 1, data: "13/03/2026", placa: "ABC1234", veiculo: "Fiat Palio", ano: "2015",
    servico: "Ordem de Serviço", saldo: 350, pago: 350, comentario: "Segunda visita do mês.",
    ordem: os("João Silva", "(45) 99999-1111", "Fiat Palio", "2015", "ABC1234", "13/03/2026", [
      [1, "Troca Escapamento Traseiro", 180.0],
      [1, "Junta do Escapamento", 45.0],
      [1, "Mão de Obra", 125.0],
    ]),
  },
  {
    id: 11, clienteId: 2, data: "02/03/2026", placa: "XYZ5678", veiculo: "Hyundai HB20", ano: "2020",
    servico: "Ordem de Serviço", saldo: 1380, pago: 1380, comentario: "Pago à vista.",
    ordem: os("Maria Oliveira", "(45) 98888-2222", "Hyundai HB20", "2020", "XYZ5678", "02/03/2026", [
      [4, "Pneu Aro 15 Michelin", 300.0],
      [1, "Balanceamento (4 rodas)", 80.0],
      [1, "Mão de Obra", 100.0],
    ]),
  },
];
