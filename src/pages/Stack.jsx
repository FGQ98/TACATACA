import { useParams, Link, useNavigate } from 'react-router-dom'

const PURPLE = '#534AB7'

export default function Stack() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/estructura`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Estructura
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--tc-text-hint)' }}>Área 4 de 6</span>
      </div>

      <div className="placeholder-page">
        <span style={{ fontSize: '11px', fontWeight: '500', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Área 4 · Las instalaciones del local
        </span>
        <div className="placeholder-title" style={{ marginTop: '6px' }}>Stack</div>
        <p className="placeholder-text">
          Servicios, proveedores, conexiones y costes.
          <br />Se construye en el Bloque 3.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={() => navigate(`/proyecto/${projectId}/estructura`)}>
          ← Estructura
        </button>
        <button className="btn btn-primary" onClick={() => navigate(`/proyecto/${projectId}/seguridad`)}>
          Siguiente área →
        </button>
      </div>
    </div>
  )
}
