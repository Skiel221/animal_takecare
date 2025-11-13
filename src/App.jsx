import { useState } from 'react'
import Logo from './assets/logo.png'
import './global.css'
import AdminLayout from './layouts/AdminLayout.jsx'

function App() {
  const [view, setView] = useState('home')
  // Datos de ejemplo para las cards de perros
  const perros = [
    { id: 1, nombre: "Nombre del perro" },
    { id: 2, nombre: "Nombre del perro" },
    { id: 3, nombre: "Nombre del perro" },
    { id: 4, nombre: "Nombre del perro" },
    { id: 5, nombre: "Nombre del perro" },
    { id: 6, nombre: "Nombre del perro" }
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="/" className="logo-link">
            <img src={Logo} className="nav-logo" alt="AnimalTakeCare Logo" />
            <h1 className="nav-title">AnimalTakeCare</h1>
          </a>
        </div>
        <div className="nav-right">
          <button className="login-btn">Iniciar sesión</button>
          <button className="login-btn" style={{ marginLeft: '10px' }} onClick={() => setView('admin')}>Admin</button>
        </div>
      </nav>

      {/* Main content */}
      <main className="main-content">
        {view === 'admin' ? (
          <AdminLayout />
        ) : (
          <div className="perros-grid">
            {perros.map(perro => (
              <div key={perro.id} className="perro-card">
                <div className="perro-image-placeholder">
                  <span>Imagen del perro</span>
                </div>
                <h3 className="perro-nombre">{perro.nombre}</h3>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default App
