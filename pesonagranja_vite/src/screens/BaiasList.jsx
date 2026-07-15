import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'
import { baiasPorLote, pesoMedioBaia, formatData } from '../data.js'

function BaiaCard({ baia, onOpen, onMorte, onReverter }) {
  const peso = pesoMedioBaia(baia)
  const macho = baia.sexo === 'macho'
  return (
    <div className="card baia-card">
      <div className={'baia-avatar ' + baia.sexo} onClick={() => onOpen(baia)}>
        <Icon name={macho ? 'male' : 'female'} size={26} color="#fff" />
      </div>
      <div className="baia-main" onClick={() => onOpen(baia)}>
        <div className="n">Baia {baia.numero}</div>
        <div className="d">
          {macho ? 'Machos' : 'Fêmeas'} · {baia.quantidadeSuinos} animais
        </div>
        <div style={{ marginTop: 8 }} className="counter">
          <span
            style={{ fontSize: 12, color: 'var(--grey-600)', marginRight: 4 }}
          >
            Mortes:
          </span>
          <button
            className="minus"
            onClick={(e) => {
              e.stopPropagation()
              onReverter(baia.id)
            }}
          >
            −
          </button>
          <span className="num">{baia.leitoeMortos}</span>
          <button
            className="plus"
            onClick={(e) => {
              e.stopPropagation()
              onMorte(baia.id)
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="baia-peso" onClick={() => onOpen(baia)}>
        {peso != null ? (
          <>
            <div className="p">{peso.toFixed(1)}</div>
            <div className="pl">kg médio</div>
          </>
        ) : (
          <>
            <div className="p" style={{ color: 'var(--grey-400)' }}>
              --
            </div>
            <div className="pl">sem pesagem</div>
          </>
        )}
      </div>
    </div>
  )
}

export default function BaiasList({ lote, onBack, onNewBaia, onOpenBaia }) {
  const inicial = (baiasPorLote[lote.id] || []).map((b) => ({ ...b }))
  const [baias, setBaias] = useState(inicial)

  const morte = (id) =>
    setBaias((bs) =>
      bs.map((b) =>
        b.id === id && b.quantidadeSuinos > 0
          ? { ...b, leitoeMortos: b.leitoeMortos + 1, quantidadeSuinos: b.quantidadeSuinos - 1 }
          : b
      )
    )
  const reverter = (id) =>
    setBaias((bs) =>
      bs.map((b) =>
        b.id === id && b.leitoeMortos > 0
          ? { ...b, leitoeMortos: b.leitoeMortos - 1, quantidadeSuinos: b.quantidadeSuinos + 1 }
          : b
      )
    )

  return (
    <div className="app">
      <AppBar title={`Baias · Lote ${formatData(lote.dataAlojamento)}`} onBack={onBack} />
      <div className="screen-body list-pad">
        {baias.length === 0 ? (
          <div className="empty">
            <Icon name="inventory" size={70} color="var(--grey-400)" />
            <div className="big">Nenhuma baia cadastrada</div>
          </div>
        ) : (
          baias.map((b) => (
            <BaiaCard
              key={b.id}
              baia={b}
              onOpen={onOpenBaia}
              onMorte={morte}
              onReverter={reverter}
            />
          ))
        )}
        <div style={{ height: 70 }} />
      </div>
      <button className="fab" onClick={onNewBaia}>
        <Icon name="add" size={22} />
        Nova Baia
      </button>
    </div>
  )
}
