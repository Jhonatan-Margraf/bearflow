import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'
import { pesoEstimado, gpdReal, diasDesde, formatData } from '../data.js'

export default function LoteDetail({ lote, onBack, onOpenBaias }) {
  const dias = diasDesde(lote.dataAlojamento)
  const atuais = lote.quantidadeAlojada - lote.mortalidade
  const est = pesoEstimado(lote)
  const ganho = est - lote.pesoMedioInicial

  return (
    <div className="app">
      <AppBar
        title="Detalhes do Lote"
        onBack={onBack}
        actions={
          <div style={{ display: 'flex' }}>
            <button className="iconbtn" aria-label="Editar">
              <Icon name="edit" size={20} />
            </button>
            <button className="iconbtn" aria-label="Excluir">
              <Icon name="delete" size={20} />
            </button>
          </div>
        }
      />
      <div className="screen-body">
        <div className="detail-header">
          <h2>Lote - {formatData(lote.dataAlojamento)}</h2>
          <div className="chip-light">{dias} dias de alojamento</div>
        </div>

        <div className="section">
          <h3>Informações</h3>
          <div className="card" style={{ padding: '4px 16px' }}>
            <div className="kv">
              <span className="k">Origem</span>
              <span className="v">{lote.origem}</span>
            </div>
            <div className="kv">
              <span className="k">Linha genética</span>
              <span className="v">{lote.linhaGenetica}</span>
            </div>
            <div className="kv">
              <span className="k">Data de alojamento</span>
              <span className="v">{formatData(lote.dataAlojamento)}</span>
            </div>
            <div className="kv">
              <span className="k">Machos / Fêmeas</span>
              <span className="v">
                {lote.machosAlojados} / {lote.femeasAlojadas}
              </span>
            </div>
            <div className="kv">
              <span className="k">Estimativa GPD</span>
              <span className="v">{lote.estimativaGPD.toFixed(3)} kg/dia</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Rebanho</h3>
          <div className="stat-cards">
            <div className="stat-box">
              <Icon name="groups" size={22} color="var(--green-700)" />
              <div className="big">{lote.quantidadeAlojada}</div>
              <div className="cap">Alojados</div>
            </div>
            <div className="stat-box">
              <Icon name="pets" size={22} color="var(--green-700)" />
              <div className="big">{atuais}</div>
              <div className="cap">Atuais</div>
            </div>
            <div className="stat-box">
              <Icon name="warning" size={22} color="var(--red)" />
              <div className="big" style={{ color: 'var(--red)' }}>
                {lote.mortalidade}
              </div>
              <div className="cap">Mortalidade</div>
            </div>
            <div className="stat-box">
              <Icon name="speed" size={22} color="var(--green-700)" />
              <div className="big">
                {((lote.mortalidade / lote.quantidadeAlojada) * 100).toFixed(1)}%
              </div>
              <div className="cap">Taxa mortalidade</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Peso e ganho</h3>
          <div className="stat-cards">
            <div className="stat-box">
              <Icon name="scale" size={22} color="var(--green-700)" />
              <div className="big">{lote.pesoMedioInicial.toFixed(1)} kg</div>
              <div className="cap">Peso inicial</div>
            </div>
            <div className="stat-box">
              <Icon name="trending" size={22} color="var(--green-700)" />
              <div className="big">{est.toFixed(1)} kg</div>
              <div className="cap">Peso atual (est.)</div>
            </div>
            <div className="stat-box">
              <Icon name="trending" size={22} color="var(--green-700)" />
              <div className="big">+{ganho.toFixed(1)} kg</div>
              <div className="cap">Ganho estimado</div>
            </div>
            {lote.pesoMedioReal != null ? (
              <div className="stat-box">
                <Icon name="check" size={22} color="var(--blue)" />
                <div className="big" style={{ color: 'var(--blue)' }}>
                  {lote.pesoMedioReal.toFixed(1)} kg
                </div>
                <div className="cap">Peso real (IA)</div>
              </div>
            ) : (
              <div className="stat-box">
                <Icon name="camera" size={22} color="var(--grey-500)" />
                <div className="big" style={{ color: 'var(--grey-500)' }}>
                  --
                </div>
                <div className="cap">Sem medição</div>
              </div>
            )}
          </div>
          {lote.pesoMedioReal != null && (
            <div
              style={{
                marginTop: 12,
                fontSize: 13,
                color: 'var(--blue)',
                textAlign: 'center',
              }}
            >
              GPD real medido pela IA: {gpdReal(lote).toFixed(3)} kg/dia
            </div>
          )}
        </div>

        <div className="section">
          <button className="btn-block" onClick={() => onOpenBaias(lote)}>
            <Icon name="inventory" size={20} color="#fff" />
            Gerenciar Baias
          </button>
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
