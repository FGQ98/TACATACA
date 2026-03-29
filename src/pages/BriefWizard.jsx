import { useParams, Link } from 'react-router-dom'

export default function BriefWizard() {
  const { projectId } = useParams()

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Link
          to="/"
          style={{
            fontSize: '13px',
            color: 'var(--tc-purple)',
            textDecoration: 'none',
          }}
        >
          ← Mis proyectos
        </Link>
      </div>

      <div className="placeholder-page">
        <div className="placeholder-title">Brief — La consulta médica</div>
        <p className="placeholder-text">
          Aquí irá el wizard de 5 pasos con el patrón A-B-C-D.
          <br />
          Se construye en el Bloque 2.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--tc-text-hint)', marginTop: '16px' }}>
          Proyecto: {projectId}
        </p>
      </div>
    </div>
  )
}
