import Icon from '../components/Icon.jsx'

export default function Login({ onEnter }) {
  return (
    <div className="login">
      <div className="login-inner">
        <img src="./pig.png" alt="Peso na Granja" />
        <h1>Peso na Granja</h1>
        <p className="sub">Acesso demonstrativo</p>
        <div className="login-card">
          <div className="field">
            <Icon name="person" size={20} />
            <input placeholder="Login" defaultValue="demo" />
          </div>
          <div className="field">
            <Icon name="lock" size={20} />
            <input placeholder="Senha" type="password" defaultValue="123456" />
          </div>
          <button className="btn-primary" onClick={onEnter}>
            Entrar
          </button>
          <div className="login-hint">Toque em Entrar para explorar a demo</div>
        </div>
      </div>
    </div>
  )
}
