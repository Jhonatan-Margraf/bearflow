import Icon from './Icon.jsx'

export function AppBar({ title, onMenu, onBack, actions }) {
  return (
    <div className="appbar">
      {onBack ? (
        <button className="iconbtn" onClick={onBack} aria-label="Voltar">
          <Icon name="back" size={22} />
        </button>
      ) : (
        <button className="iconbtn" onClick={onMenu} aria-label="Menu">
          <Icon name="menu" size={22} />
        </button>
      )}
      <div className="title">{title}</div>
      {actions ? actions : <div style={{ width: 40 }} />}
    </div>
  )
}

export function Drawer({ current, onClose, onNavigate }) {
  const items = [
    { key: 'lotes', label: 'Gerenciar Lotes', icon: 'inventory' },
    { key: 'stats', label: 'Estatísticas', icon: 'analytics' },
    { key: 'settings', label: 'Configurações', icon: 'settings' },
  ]
  return (
    <>
      <div className="drawer-scrim" onClick={onClose} />
      <div className="drawer">
        <div className="drawer-header">
          <div className="app-name">Peso na Granja</div>
          <div className="app-sub">Suinocultura com IA</div>
        </div>
        {items.map((it) => (
          <div
            key={it.key}
            className={'drawer-item' + (current === it.key ? ' active' : '')}
            onClick={() => onNavigate(it.key)}
          >
            <Icon name={it.icon} size={22} />
            {it.label}
          </div>
        ))}
      </div>
    </>
  )
}
