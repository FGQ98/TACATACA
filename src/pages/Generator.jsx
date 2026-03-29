import { useParams, Link } from 'react-router-dom'

export default function Generator() {
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
        <div className="placeholder-title">Generador — La mochila</div>
        <p className="placeholder-text">
          Aquí se generarán el Prompt Pack y el Blueprint.
          <br />
          Se construye en el Bloque 4.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--tc-text-hint)', marginTop: '16px' }}>
          De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS
        </p>
      </div>
    </div>
  )
}
