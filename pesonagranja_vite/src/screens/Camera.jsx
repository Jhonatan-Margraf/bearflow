import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { AppBar } from '../components/Shell.jsx'

// Simula a medicao de peso por IA (modo demonstrativo).
export default function Camera({ baia, onBack, onSaved }) {
  const [stage, setStage] = useState('aim') // aim | analyzing | result
  const [peso, setPeso] = useState(null)

  const capturar = () => {
    setStage('analyzing')
    setTimeout(() => {
      // peso plausivel para a fase (demo)
      const p = 60 + Math.random() * 12
      setPeso(p)
      setStage('result')
    }, 1800)
  }

  const salvar = () => {
    onSaved(peso)
  }

  return (
    <div className="app">
      <AppBar title={`Medir Peso · Baia ${baia?.numero ?? ''}`} onBack={onBack} />
      <div className="camera-screen">
        <div className="camera-view">
          <div className="camera-pig">🐷</div>
          <div className="camera-guide">
            <span>Posicione o suíno dentro da área</span>
          </div>
          {stage === 'analyzing' && (
            <div className="overlay">
              <div className="dialog">
                <div className="spinner" />
                <div style={{ fontWeight: 600 }}>IA analisando peso...</div>
                <div
                  style={{ fontSize: 13, color: 'var(--grey-600)', marginTop: 6 }}
                >
                  Processando imagem do animal
                </div>
              </div>
            </div>
          )}
          {stage === 'result' && (
            <div className="overlay">
              <div className="dialog">
                <Icon name="check" size={56} color="var(--green-700)" />
                <div style={{ fontWeight: 600, marginTop: 8 }}>Peso Analisado</div>
                <div className="peso-big">{peso.toFixed(1)} kg</div>
                <div style={{ fontSize: 13, color: 'var(--grey-600)' }}>
                  Deseja salvar esta medição?
                </div>
                <div className="dialog-actions">
                  <button className="cancel" onClick={() => setStage('aim')}>
                    Repetir
                  </button>
                  <button className="save" onClick={salvar}>
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="camera-controls">
          <div className="camera-hint">
            Modo demonstração — a IA estima o peso a partir da foto
          </div>
          <button className="shutter" onClick={capturar} aria-label="Capturar">
            <Icon name="camera" size={30} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  )
}
