import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Home() {
	const perros = [
		{ id: 1, nombre: 'Nombre del perro' },
		{ id: 2, nombre: 'Nombre del perro' },
		{ id: 3, nombre: 'Nombre del perro' },
		{ id: 4, nombre: 'Nombre del perro' },
		{ id: 5, nombre: 'Nombre del perro' },
		{ id: 6, nombre: 'Nombre del perro' }
	]

	return (
		<>
			<nav className="navbar">
				<div className="nav-left">
					<Link to="/Home" className="logo-link">
						<img src={Logo} className="nav-logo" alt="AnimalTakeCare Logo" />
						<h1 className="nav-title">AnimalTakeCare</h1>
					</Link>
				</div>
				<div className="nav-right">
					<Link to="/auth/login"><button className="login-btn">Iniciar sesión</button></Link>
					<Link to="/admin"><button className="login-btn" style={{ marginLeft: '10px' }}>Admin</button></Link>
				</div>
			</nav>

			<main className="main-content">
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
			</main>
		</>
	)
}
