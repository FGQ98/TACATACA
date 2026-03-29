import { useNavigate } from 'react-router-dom'

const AREA_NAMES = ['Brief', 'Investigación', 'Estructura', 'Stack', 'Seguridad', 'Generador']
const TOTAL_AREAS = 6

export default function ProjectCard({ project }) {
  const navigate = useNavigate()

  const completedAreas = Object.values(project.areas || {}).filter(
    (a) => a.completed
  ).length

  const statusLabel =
    completedAreas === TOTAL_AREAS
      ? 'Completo'
      : completedAreas === 0
      ? 'Nuevo'
      : 'En curso'

  const badgeClass =
    statusLabel === 'Completo'
      ? 'badge-completo'
      : statusLabel === 'Nuevo'
      ? 'badge-nuevo'
      : 'badge-en-curso'

  function handleClick() {
    navigate(`/proyecto/${project.id}/brief`)
  }

  // Calcular tiempo relativo
  const updatedAt = project.updatedAt?.toDate?.()
  let timeAgo = ''
  if (updatedAt) {
    const diff = Date.now() - updatedAt.getTime()
    const mins = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    if (mins < 60) timeAgo = `hace ${mins}min`
    else if (hours < 24) timeAgo = `hace ${hours}h`
    else timeAgo = `hace ${days}d`
  }

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-card-header">
        <span className="project-card-name">{project.name}</span>
        <span className={`project-card-badge ${badgeClass}`}>{statusLabel}</span>
      </div>

      {project.type && (
        <p className="project-card-desc">{project.type}</p>
      )}

      <div className="project-card-progress">
        {Array.from({ length: TOTAL_AREAS }).map((_, i) => (
          <div
            key={i}
            className={`progress-segment ${i < completedAreas ? 'done' : ''}`}
          />
        ))}
      </div>

      <p className="project-card-meta">
        {completedAreas}/{TOTAL_AREAS} áreas
        {project.version > 1 ? ` · v${project.version}` : ''}
        {timeAgo ? ` · ${timeAgo}` : ''}
      </p>
    </div>
  )
}
