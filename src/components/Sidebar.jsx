import './styles/sidebar.css'

function Sidebar({ currentSection, onSelect }) {
  return (
    <aside className="admin-sidebar" aria-label="Sidebar de administración">
      <div className="sidebar-header">Admin</div>
      <nav className="sidebar-nav">
        <button
          className={`sidebar-link ${currentSection === 'dashboard' ? 'active' : ''}`}
          onClick={() => onSelect('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`sidebar-link ${currentSection === 'petform' ? 'active' : ''}`}
          onClick={() => onSelect('petform')}
        >
          Registrar Mascota
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar