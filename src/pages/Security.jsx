import { useParams, Link, useNavigate } from 'react-router-dom'

const PURPLE = '#534AB7'

export default function Security() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/stack`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Stack
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--tc-text-hint)' }}>Área 5 de 6</span>
      </div>

      <div className="placeholder-page">
        <span style={{ fontSize: '11px', fontWeight: '500', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Área 5 · Las llaves del negocio
        </span>
        <div className="placeholder-title" style={{ marginTop: '6px' }}>Seguridad</div>
        <p className="placeholder-text">
          Roles, permisos, capas de seguridad y checklist legal.
          <br />Se construye en el Bloque 3.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={() => navigate(`/proyecto/${projectId}/stack`)}>
          ← Stack
        </button>
        <button className="btn btn-primary" onClick={() => navigate(`/proyecto/${projectId}/generador`)}>
          Siguiente área →
        </button>
      </div>
    </div>
  )
}
