import { useParams, Link } from 'react-router-dom'

const PURPLE = '#534AB7'

export default function Generator() {
  const { projectId } = useParams()

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/seguridad`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Seguridad
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--tc-text-hint)' }}>Área 6 de 6</span>
      </div>

      <div className="placeholder-page">
        <span style={{ fontSize: '11px', fontWeight: '500', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Área 6 · La mochila
        </span>
        <div className="placeholder-title" style={{ marginTop: '6px' }}>Generador</div>
        <p className="placeholder-text">
          Aquí se generarán el Prompt Pack y el Blueprint.
          <br />Se construye en el Bloque 4.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--tc-text-hint)', marginTop: '24px' }}>
          De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={() => window.history.back()}>
          ← Seguridad
        </button>
        <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Volver al Dashboard
        </Link>
      </div>
    </div>
  )
}
