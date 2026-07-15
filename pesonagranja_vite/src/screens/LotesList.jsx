import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'
import { lotes, pesoEstimado, gpdReal, diasDesde, formatData } from '../data.js'

function InfoItem({ label, value, icon, color }) {
  return (
    <div className="info-item">
      <Icon name={icon} size={20} color={color || 'var(--grey-600)'} />
      <div className="val" style={color ? { color } : undefined}>
        {value}
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

function LoteCard({ lote, onOpen }) {
  const dias = diasDesde(lote.dataAlojamento)
  const nome = formatData(lote.dataAlojamento)
  const atuais = lote.quantidadeAlojada - lote.mortalidade
  return (
    <div className="card lote-card" onClick={() => onOpen(lote)}>
      <div className="row-top">
        <div>
          <div className="lote-title">Lote - {nome}</div>
          <div className="lote-sub">Origem: {lote.origem}</div>
        </div>
        <div className="chip">{dias} dias</div>
      </div>
      <div className="divider" />
      <div className="info-grid">
        <InfoItem label="Alojados" value={lote.quantidadeAlojada} icon="groups" />
        <InfoItem label="Atuais" value={atuais} icon="pets" />
        <InfoItem
          label="Mortalidade"
          value={lote.mortalidade}
          icon="warning"
          color={lote.mortalidade > 0 ? 'var(--red)' : undefined}
        />
      </div>
      <div style={{ height: 12 }} />
      <div className="info-grid">
        <InfoItem
          label="Peso Inicial"
          value={`${lote.pesoMedioInicial.toFixed(1)} kg`}
          icon="scale"
        />
        <InfoItem
          label="Peso Atual (Est.)"
          value={`${pesoEstimado(lote).toFixed(1)} kg`}
          icon="trending"
        />
      </div>
      {lote.pesoMedioReal != null && (
        <>
          <div style={{ height: 12 }} />
          <div className="info-grid">
            <InfoItem
              label="Peso Atual (Real)"
              value={`${lote.pesoMedioReal.toFixed(1)} kg`}
              icon="check"
              color="var(--blue)"
            />
            <InfoItem
              label="GPD Real"
              value={gpdReal(lote).toFixed(3)}
              icon="speed"
              color="var(--blue)"
            />
          </div>
        </>
      )}
      <div className="lote-foot">Alojado em: {formatData(lote.dataAlojamento)}</div>
    </div>
  )
}

export default function LotesList({ onMenu, onOpenLote, onNewLote }) {
  return (
    <div className="app">
      <AppBar title="Gerenciar Lotes" onMenu={onMenu} />
      <div className="screen-body list-pad">
        {lotes.map((l) => (
          <LoteCard key={l.id} lote={l} onOpen={onOpenLote} />
        ))}
        <div style={{ height: 70 }} />
      </div>
      <button className="fab" onClick={onNewLote}>
        <Icon name="add" size={22} />
        Novo Lote
      </button>
    </div>
  )
}
