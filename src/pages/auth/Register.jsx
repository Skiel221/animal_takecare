import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Registrarse</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Email
            <input type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="Contraseña" required />
          </label>
          <label>
            Confirmar Contraseña
            <input type="password" name="confirm" placeholder="Repite la contraseña" required />
          </label>
          <label>
            Nombre
            <input type="text" name="nombre" placeholder="Nombre" required />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" placeholder="Apellido" required />
          </label>
          <button type="submit" className="primary-btn">Crear cuenta</button>
        </form>

        <div className='bottom-text'>
          <p>¿Ya estás registrado?</p>
          <p>
            <Link to="/auth/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
