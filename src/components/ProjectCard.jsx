import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

const AREA_NAMES = ['Brief', 'Investigación', 'Estructura', 'Stack', 'Seguridad', 'Generador']
const TOTAL_AREAS = 6

export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  const { deleteProject } = useProjects()
  const [deleteStep, setDeleteStep] = useState(0) // 0=normal, 1=confirmar, 2=escribir nombre
  const [confirmName, setConfirmName] = useState('')
  const [deleting, setDeleting] = useState(false)

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
    if (deleteStep > 0) return // No navegar si estamos borrando
    navigate(`/proyecto/${project.id}/brief`)
  }

  function handleDeleteStart(e) {
    e.stopPropagation()
    setDeleteStep(1)
  }

  function handleDeleteConfirm(e) {
    e.stopPropagation()
    setDeleteStep(2)
    setConfirmName('')
  }

  function handleDeleteCancel(e) {
    e.stopPropagation()
    setDeleteStep(0)
    setConfirmName('')
  }

  async function handleDeleteFinal(e) {
    e.stopPropagation()
    if (confirmName.trim() !== project.name.trim()) return
    setDeleting(true)
    await deleteProject(project.id)
    // El componente desaparecerá solo porque onSnapshot actualiza la lista
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
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: deleteStep > 0 ? 'default' : 'pointer' }}
    >
      <div className="project-card-header">
        <span className="project-card-name">{project.name}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className={`project-card-badge ${badgeClass}`}>
            {statusLabel}
          </span>
          {deleteStep === 0 && (
            <button
              onClick={handleDeleteStart}
              title="Eliminar proyecto"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                color: 'var(--tc-text-hint)',
                padding: '2px 4px',
                borderRadius: '4px',
                lineHeight: '1',
                opacity: 0.5,
                transition: 'opacity 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.color = 'var(--tc-danger)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
                e.currentTarget.style.color = 'var(--tc-text-hint)'
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Estado normal */}
      {deleteStep === 0 && (
        <>
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
        </>
      )}

      {/* Paso 1: ¿Seguro? */}
      {deleteStep === 1 && (
        <div
          style={{ padding: '12px 0' }}
          onClick={(e) => e.stopPropagation()}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--tc-danger)',
              margin: '0 0 12px',
              lineHeight: '1.5',
            }}
          >
            ¿Eliminar este proyecto? Se borrarán todos los datos. Esta acción
            no se puede deshacer.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleDeleteCancel}
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '13px',
                background: 'var(--tc-bg)',
                border: '1px solid var(--tc-border)',
                borderRadius: 'var(--tc-radius)',
                cursor: 'pointer',
                color: 'var(--tc-text)',
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleDeleteConfirm}
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '13px',
                background: 'var(--tc-danger)',
                border: 'none',
                borderRadius: 'var(--tc-radius)',
                cursor: 'pointer',
                color: 'white',
                fontWeight: '500',
              }}
            >
              Sí, eliminar
            </button>
          </div>
        </div>
      )}

      {/* Paso 2: Escribe el nombre */}
      {deleteStep === 2 && (
        <div
          style={{ padding: '12px 0' }}
          onClick={(e) => e.stopPropagation()}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--tc-danger)',
              margin: '0 0 8px',
              lineHeight: '1.5',
            }}
          >
            Escribe <strong>{project.name}</strong> para confirmar:
          </p>
          <input
            type="text"
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
            placeholder={project.name}
            autoFocus
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '13px',
              border: '1px solid var(--tc-danger)',
              borderRadius: 'var(--tc-radius)',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: '10px',
            }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleDeleteCancel}
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '13px',
                background: 'var(--tc-bg)',
                border: '1px solid var(--tc-border)',
                borderRadius: 'var(--tc-radius)',
                cursor: 'pointer',
                color: 'var(--tc-text)',
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleDeleteFinal}
              disabled={
                confirmName.trim() !== project.name.trim() || deleting
              }
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '13px',
                background:
                  confirmName.trim() === project.name.trim()
                    ? 'var(--tc-danger)'
                    : '#ccc',
                border: 'none',
                borderRadius: 'var(--tc-radius)',
                cursor:
                  confirmName.trim() === project.name.trim()
                    ? 'pointer'
                    : 'not-allowed',
                color: 'white',
                fontWeight: '500',
              }}
            >
              {deleting ? 'Borrando...' : 'Eliminar definitivamente'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
