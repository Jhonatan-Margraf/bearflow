import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'

function ToggleRow({ label, on }) {
  return (
    <div className="kv" style={{ alignItems: 'center' }}>
      <span className="k">{label}</span>
      <span
        style={{
          width: 40,
          height: 22,
          borderRadius: 12,
          background: on ? 'var(--green-500)' : 'var(--grey-300)',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 2,
            left: on ? 20 : 2,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            transition: 'left .15s',
          }}
        />
      </span>
    </div>
  )
}

export default function Settings({ onMenu }) {
  return (
    <div className="app">
      <AppBar title="Configurações" onMenu={onMenu} />
      <div className="screen-body list-pad">
        <h3 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--grey-600)', margin: '4px 0 10px' }}>
          Análise de peso
        </h3>
        <div className="card" style={{ padding: '4px 16px', marginBottom: 18 }}>
          <ToggleRow label="Usar IA para estimar peso" on={true} />
          <ToggleRow label="Modo simulado (demo)" on={true} />
          <div className="kv">
            <span className="k">GPD padrão</span>
            <span className="v">0.995 kg/dia</span>
          </div>
          <div className="kv">
            <span className="k">Peso alvo de abate</span>
            <span className="v">120 kg</span>
          </div>
        </div>

        <h3 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--grey-600)', margin: '4px 0 10px' }}>
          Dados
        </h3>
        <div className="card" style={{ padding: '4px 16px', marginBottom: 18 }}>
          <ToggleRow label="Salvar dados localmente" on={true} />
          <ToggleRow label="Sincronizar com nuvem" on={false} />
        </div>

        <h3 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--grey-600)', margin: '4px 0 10px' }}>
          Sobre
        </h3>
        <div className="card" style={{ padding: 16, textAlign: 'center' }}>
          <img src="./pig.png" alt="" style={{ width: 70 }} />
          <div style={{ fontWeight: 700, marginTop: 8 }}>Peso na Granja</div>
          <div style={{ fontSize: 13, color: 'var(--grey-600)' }}>
            Suinocultura com IA · versão demo
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
