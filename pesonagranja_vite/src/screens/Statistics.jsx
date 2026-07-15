import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'
import { lotes, pesoEstimado, diasDesde, formatData } from '../data.js'

const PESO_ABATE = 120

export default function Statistics({ onMenu }) {
  const totalAlojados = lotes.reduce((s, l) => s + l.quantidadeAlojada, 0)
  const totalMortos = lotes.reduce((s, l) => s + l.mortalidade, 0)
  const taxaMort = ((totalMortos / totalAlojados) * 100).toFixed(1)

  return (
    <div className="app">
      <AppBar title="Estatísticas" onMenu={onMenu} />
      <div className="screen-body list-pad">
        <div className="stat-cards" style={{ marginBottom: 16 }}>
          <div className="stat-box">
            <Icon name="groups" size={22} color="var(--green-700)" />
            <div className="big">{totalAlojados}</div>
            <div className="cap">Total alojados</div>
          </div>
          <div className="stat-box">
            <Icon name="inventory" size={22} color="var(--green-700)" />
            <div className="big">{lotes.length}</div>
            <div className="cap">Lotes ativos</div>
          </div>
          <div className="stat-box">
            <Icon name="warning" size={22} color="var(--red)" />
            <div className="big" style={{ color: 'var(--red)' }}>
              {totalMortos}
            </div>
            <div className="cap">Mortalidade</div>
          </div>
          <div className="stat-box">
            <Icon name="speed" size={22} color="var(--green-700)" />
            <div className="big">{taxaMort}%</div>
            <div className="cap">Taxa média</div>
          </div>
        </div>

        <h3 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--grey-600)', margin: '4px 0 10px' }}>
          Progresso para abate ({PESO_ABATE} kg)
        </h3>

        {lotes.map((l) => {
          const est = pesoEstimado(l)
          const pct = Math.min(100, (est / PESO_ABATE) * 100)
          const pctReal = l.pesoMedioReal != null ? Math.min(100, (l.pesoMedioReal / PESO_ABATE) * 100) : null
          return (
            <div className="card stat-card" key={l.id}>
              <div className="head">
                <div className="t">Lote - {formatData(l.dataAlojamento)}</div>
                <div className="chip">{diasDesde(l.dataAlojamento)} dias</div>
              </div>

              <div className="bar-row">
                <div className="bl">
                  <span className="name">Peso estimado</span>
                  <span className="num">{est.toFixed(1)} kg</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>

              {pctReal != null && (
                <div className="bar-row">
                  <div className="bl">
                    <span className="name" style={{ color: 'var(--blue)' }}>
                      Peso real (IA)
                    </span>
                    <span className="num" style={{ color: 'var(--blue)' }}>
                      {l.pesoMedioReal.toFixed(1)} kg
                    </span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill blue" style={{ width: `${pctReal}%` }} />
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--grey-600)' }}>
                <span>Origem: {l.origem}</span>
                <span>{l.linhaGenetica}</span>
              </div>
            </div>
          )
        })}
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
