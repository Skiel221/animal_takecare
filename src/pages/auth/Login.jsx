import { Link } from 'react-router-dom'
import './auth.css'

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Iniciar sesión</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Email
            <input type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="Contraseña" required />
          </label>
          <button type="submit" className="primary-btn">Entrar</button>
        </form>
        <div className='bottom-text'>
          <p>¿No te registraste aún?</p>
          <p>
            <Link to="/auth/register">Registrarse</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
