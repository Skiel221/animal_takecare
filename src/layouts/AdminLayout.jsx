import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import PetForm from '../pages/admin/PetForm.jsx'

function AdminLayout() {
  const [section, setSection] = useState('dashboard')

  const containerStyle = {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    padding: '1rem 0',
  }

  const contentStyle = {
    flex: 1,
  }

  return (
    <div style={containerStyle}>
      <Sidebar currentSection={section} onSelect={setSection} />
      <div style={contentStyle}>
        {section === 'dashboard' ? (
          <div>
            <h2 style={{ color: '#2d5a27', fontSize: '1.6rem', marginBottom: '8px' }}>Dashboard</h2>
            <p style={{ color: '#555' }}>
              Resumen general del administrador. Aquí verás métricas y accesos rápidos.
            </p>
          </div>
        ) : (
          <PetForm />
        )}
      </div>
    </div>
  )
}

export default AdminLayout