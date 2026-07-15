// Dados ficticios para a demonstracao. Datas relativas a "hoje".
const hoje = new Date()
const diasAtras = (n) => new Date(hoje.getTime() - n * 86400000)

export const GPD_PADRAO = 0.995

export function pesoEstimado(lote) {
  const dias = Math.floor((hoje - lote.dataAlojamento) / 86400000)
  return lote.pesoMedioInicial + lote.estimativaGPD * dias
}

export function diasDesde(data) {
  return Math.floor((hoje - data) / 86400000)
}

export function gpdReal(lote) {
  if (lote.pesoMedioReal == null || !lote.dataPesagemReal) return 0
  const dias = Math.floor((lote.dataPesagemReal - lote.dataAlojamento) / 86400000)
  if (dias === 0) return 0
  return (lote.pesoMedioReal - lote.pesoMedioInicial) / dias
}

export const lotes = [
  {
    id: 'l1',
    dataAlojamento: diasAtras(58),
    origem: 'Granja São Pedro',
    quantidadeAlojada: 320,
    mortalidade: 4,
    pesoMedioInicial: 6.2,
    estimativaGPD: GPD_PADRAO,
    machosAlojados: 160,
    femeasAlojadas: 160,
    linhaGenetica: 'DanBred',
    pesoMedioReal: 63.4,
    dataPesagemReal: diasAtras(2),
  },
  {
    id: 'l2',
    dataAlojamento: diasAtras(34),
    origem: 'Granja Boa Vista',
    quantidadeAlojada: 280,
    mortalidade: 2,
    pesoMedioInicial: 6.8,
    estimativaGPD: 1.02,
    machosAlojados: 140,
    femeasAlojadas: 140,
    linhaGenetica: 'Topigs',
    pesoMedioReal: null,
    dataPesagemReal: null,
  },
  {
    id: 'l3',
    dataAlojamento: diasAtras(12),
    origem: 'Granja Santa Rita',
    quantidadeAlojada: 350,
    mortalidade: 1,
    pesoMedioInicial: 5.9,
    estimativaGPD: 0.96,
    machosAlojados: 175,
    femeasAlojadas: 175,
    linhaGenetica: 'DanBred',
    pesoMedioReal: null,
    dataPesagemReal: null,
  },
]

export const baiasPorLote = {
  l1: [
    { id: 'b1', loteId: 'l1', numero: '01', sexo: 'macho', quantidadeSuinos: 40, leitoeMortos: 1, medicoes: [{ peso: 62.8 }, { peso: 64.1 }, { peso: 63.5 }] },
    { id: 'b2', loteId: 'l1', numero: '02', sexo: 'femea', quantidadeSuinos: 39, leitoeMortos: 1, medicoes: [{ peso: 61.2 }, { peso: 62.0 }] },
    { id: 'b3', loteId: 'l1', numero: '03', sexo: 'macho', quantidadeSuinos: 40, leitoeMortos: 0, medicoes: [{ peso: 65.0 }] },
    { id: 'b4', loteId: 'l1', numero: '04', sexo: 'femea', quantidadeSuinos: 38, leitoeMortos: 2, medicoes: [] },
  ],
  l2: [
    { id: 'b5', loteId: 'l2', numero: '01', sexo: 'macho', quantidadeSuinos: 35, leitoeMortos: 1, medicoes: [{ peso: 41.5 }] },
    { id: 'b6', loteId: 'l2', numero: '02', sexo: 'femea', quantidadeSuinos: 35, leitoeMortos: 0, medicoes: [] },
  ],
  l3: [
    { id: 'b7', loteId: 'l3', numero: '01', sexo: 'macho', quantidadeSuinos: 44, leitoeMortos: 0, medicoes: [] },
  ],
}

export function pesoMedioBaia(baia) {
  if (!baia.medicoes || baia.medicoes.length === 0) return null
  const soma = baia.medicoes.reduce((s, m) => s + m.peso, 0)
  return soma / baia.medicoes.length
}

export function formatData(d) {
  return d.toLocaleDateString('pt-BR')
}
