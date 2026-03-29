import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

export default function NewProjectModal({ onClose }) {
  const { createProject } = useProjects()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleCreate(e) {
    e.preventDefault()
    if (!name.trim()) return

    setLoading(true)
    const projectId = await createProject(name.trim())
    setLoading(false)

    if (projectId) {
      navigate(`/proyecto/${projectId}/brief`)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleCreate}
      >
        <div className="modal-title">Nuevo proyecto</div>

        <div className="modal-field">
          <label className="modal-label">¿Cómo se llama tu proyecto?</label>
          <input
            className="modal-input"
            type="text"
            placeholder="Mi próximo proyecto..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!name.trim() || loading}
          >
            {loading ? 'Creando...' : 'Crear proyecto'}
          </button>
        </div>
      </form>
    </div>
  )
}
