import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'
import { pesoMedioBaia } from '../data.js'

export default function BaiaDetail({ baia, extraMedicoes = [], onBack, onMedir }) {
  const macho = baia.sexo === 'macho'
  const medicoes = [
    ...(baia.medicoes || []),
    ...extraMedicoes.map((p) => ({ peso: p, nova: true })),
  ]
  const media =
    medicoes.length > 0
      ? medicoes.reduce((s, m) => s + m.peso, 0) / medicoes.length
      : null

  return (
    <div className="app">
      <AppBar title={`Baia ${baia.numero}`} onBack={onBack} />
      <div className="screen-body">
        <div className="detail-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              className={'baia-avatar ' + baia.sexo}
              style={{ background: 'rgba(255,255,255,0.25)' }}
            >
              <Icon name={macho ? 'male' : 'female'} size={26} color="#fff" />
            </div>
            <div>
              <h2 style={{ fontSize: 20 }}>Baia {baia.numero}</h2>
              <div className="chip-light" style={{ marginTop: 6 }}>
                {macho ? 'Machos' : 'Fêmeas'} · {baia.quantidadeSuinos} animais
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Resumo</h3>
          <div className="stat-cards">
            <div className="stat-box">
              <Icon name="pets" size={22} color="var(--green-700)" />
              <div className="big">{baia.quantidadeSuinos}</div>
              <div className="cap">Animais</div>
            </div>
            <div className="stat-box">
              <Icon name="warning" size={22} color="var(--red)" />
              <div className="big" style={{ color: 'var(--red)' }}>
                {baia.leitoeMortos}
              </div>
              <div className="cap">Mortos</div>
            </div>
            <div className="stat-box">
              <Icon name="scale" size={22} color="var(--green-700)" />
              <div className="big">{media != null ? `${media.toFixed(1)}` : '--'}</div>
              <div className="cap">Peso médio (kg)</div>
            </div>
            <div className="stat-box">
              <Icon name="photo" size={22} color="var(--green-700)" />
              <div className="big">{medicoes.length}</div>
              <div className="cap">Medições</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Histórico de medições</h3>
          <div className="card" style={{ padding: '4px 16px' }}>
            {medicoes.length === 0 ? (
              <div style={{ padding: '18px 0', color: 'var(--grey-500)', textAlign: 'center' }}>
                Nenhuma medição registrada
              </div>
            ) : (
              medicoes.map((m, i) => (
                <div className="kv" key={i}>
                  <span className="k">
                    <Icon
                      name="photo"
                      size={16}
                      color="var(--grey-500)"
                      style={{ verticalAlign: 'middle', marginRight: 6 }}
                    />
                    Medição {i + 1}
                    {m.nova && (
                      <span style={{ color: 'var(--green-700)', fontSize: 11, marginLeft: 6 }}>
                        novo
                      </span>
                    )}
                  </span>
                  <span className="v">{m.peso.toFixed(1)} kg</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="section">
          <button className="btn-block" onClick={() => onMedir(baia)}>
            <Icon name="camera" size={20} color="#fff" />
            Medir Peso com IA
          </button>
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
