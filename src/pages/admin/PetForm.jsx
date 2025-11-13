function PetForm() {
  const containerStyle = {
    width: '380px',
    backgroundColor: '#ffffff',
    boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
    borderRadius: '14px',
    padding: '20px',
    zIndex: 200,
  }

  const titleStyle = {
    marginBottom: '12px',
    color: '#2d5a27',
    fontSize: '1.5rem',
    fontWeight: 700,
  }

  const descriptionStyle = {
    marginTop: '16px',
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '8px',
  }

  const inputStyle = {
    padding: '12px 14px',
    borderRadius: '10px',
    border: '2px solid #2d5a27',
    outline: 'none',
    fontSize: '1rem',
  }

  const buttonStyle = {
    marginTop: '6px',
    backgroundColor: '#4a7c59',
    color: '#fff',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  }

  return (
    <aside style={containerStyle} aria-label="Formulario de registro de mascotas">
      <h2 style={titleStyle}>Registro de mascotas</h2>

      <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la mascota"
          style={inputStyle}
        />
        <input
          type="text"
          name="raza"
          placeholder="Raza de la mascota"
          style={inputStyle}
        />
        <input
          type="number"
          name="edad"
          min="0"
          placeholder="Edad en años"
          style={inputStyle}
        />
        <button type="button" style={buttonStyle}>Enviar</button>
      </form>

      <p style={descriptionStyle}>
        En esta sección del administrador puedes registrar nuevas mascotas para su
        seguimiento. Completa los campos con la información básica y luego podrás
        gestionar sus fichas, controles y servicios asociados desde el panel.
      </p>
    </aside>
  )
}

export default PetForm