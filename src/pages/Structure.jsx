import { useParams, Link, useNavigate } from 'react-router-dom'

const PURPLE = '#534AB7'

export default function Structure() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/investigacion`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Investigación
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--tc-text-hint)' }}>Área 3 de 6</span>
      </div>

      <div className="placeholder-page">
        <span style={{ fontSize: '11px', fontWeight: '500', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Área 3 · El edificio
        </span>
        <div className="placeholder-title" style={{ marginTop: '6px' }}>Estructura</div>
        <p className="placeholder-text">
          Carpetas, archivos y arquitectura del proyecto.
          <br />Se construye en el Bloque 3.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={() => navigate(`/proyecto/${projectId}/investigacion`)}>
          ← Investigación
        </button>
        <button className="btn btn-primary" onClick={() => navigate(`/proyecto/${projectId}/stack`)}>
          Siguiente área →
        </button>
      </div>
    </div>
  )
}
