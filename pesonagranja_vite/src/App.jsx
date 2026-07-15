import { useState } from 'react'
import { Drawer } from './components/Shell.jsx'
import Login from './screens/Login.jsx'
import LotesList from './screens/LotesList.jsx'
import LoteDetail from './screens/LoteDetail.jsx'
import BaiasList from './screens/BaiasList.jsx'
import BaiaDetail from './screens/BaiaDetail.jsx'
import Camera from './screens/Camera.jsx'
import Statistics from './screens/Statistics.jsx'
import Settings from './screens/Settings.jsx'

const TAB_LABEL = { lotes: 'Lotes', stats: 'Estatísticas', settings: 'Config.' }

export default function App() {
  const [logged, setLogged] = useState(false)
  const [tab, setTab] = useState('lotes') // lotes | stats | settings
  const [stack, setStack] = useState([]) // {view, lote, baia}
  const [drawer, setDrawer] = useState(false)
  const [toast, setToast] = useState(null)
  // medicoes adicionadas na sessao, por baia id
  const [novasMedicoes, setNovasMedicoes] = useState({})

  const top = stack[stack.length - 1]

  const push = (v) => setStack((s) => [...s, v])
  const pop = () => setStack((s) => s.slice(0, -1))

  const goTab = (t) => {
    setTab(t)
    setStack([])
    setDrawer(false)
  }

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 1900)
  }

  const openMenu = () => setDrawer(true)

  function renderRoot() {
    if (tab === 'stats') return <Statistics onMenu={openMenu} />
    if (tab === 'settings') return <Settings onMenu={openMenu} />
    return (
      <LotesList
        onMenu={openMenu}
        onOpenLote={(lote) => push({ view: 'loteDetail', lote })}
        onNewLote={() => showToast('Cadastro de lote (demo)')}
      />
    )
  }

  function renderScreen() {
    if (!top) return renderRoot()
    switch (top.view) {
      case 'loteDetail':
        return (
          <LoteDetail
            lote={top.lote}
            onBack={pop}
            onOpenBaias={(lote) => push({ view: 'baias', lote })}
          />
        )
      case 'baias':
        return (
          <BaiasList
            lote={top.lote}
            onBack={pop}
            onNewBaia={() => showToast('Cadastro de baia (demo)')}
            onOpenBaia={(baia) => push({ view: 'baiaDetail', baia })}
          />
        )
      case 'baiaDetail':
        return (
          <BaiaDetail
            baia={top.baia}
            extraMedicoes={novasMedicoes[top.baia.id] || []}
            onBack={pop}
            onMedir={(baia) => push({ view: 'camera', baia })}
          />
        )
      case 'camera':
        return (
          <Camera
            baia={top.baia}
            onBack={pop}
            onSaved={(peso) => {
              setNovasMedicoes((m) => ({
                ...m,
                [top.baia.id]: [...(m[top.baia.id] || []), peso],
              }))
              pop()
              showToast(`Medição de ${peso.toFixed(1)} kg salva`)
            }}
          />
        )
      default:
        return renderRoot()
    }
  }

  const showDrawer = drawer && stack.length === 0

  return (
    <div className="stage">
      <div className="stage-header">
        <span className="stage-badge">Demonstração</span>
        <h1>Peso na Granja</h1>
        <p>
          Monitoramento de peso de suínos com IA. Esta é uma prévia interativa do
          aplicativo — navegue pelas telas principais.
        </p>
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          {!logged ? (
            <Login onEnter={() => setLogged(true)} />
          ) : (
            <>
              {renderScreen()}
              {showDrawer && (
                <Drawer current={tab} onClose={() => setDrawer(false)} onNavigate={goTab} />
              )}
              {toast && <div className="toast">{toast}</div>}
            </>
          )}
        </div>
      </div>

      {logged && (
        <div className="demo-nav">
          {Object.entries(TAB_LABEL).map(([k, label]) => (
            <button
              key={k}
              className={tab === k && stack.length === 0 ? 'active' : ''}
              onClick={() => goTab(k)}
            >
              {label}
            </button>
          ))}
          <button onClick={() => setLogged(false)}>Sair</button>
        </div>
      )}

      <div className="stage-foot">
        Versão demonstrativa · dados fictícios · Peso na Granja
      </div>
    </div>
  )
}
