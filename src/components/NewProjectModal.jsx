import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import UserTypeSelector from './UserTypeSelector'

export default function NewProjectModal({ onClose }) {
  const { createProject } = useProjects()
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1 = triaje, 2 = nombre
  const [userType, setUserType] = useState(null) // 'solo' | 'pro'
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  function handleTypeSelect(type) {
    setUserType(type)
    setStep(2)
  }

  function handleBack() {
    setStep(1)
    setUserType(null)
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!name.trim() || !userType) return

    setLoading(true)
    const projectId = await createProject(name.trim(), '', userType)
    setLoading(false)

    if (projectId) {
      navigate(`/proyecto/${projectId}/brief`)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: step === 1 ? '440px' : '400px' }}
      >
        {/* Paso 1: Triaje */}
        {step === 1 && <UserTypeSelector onSelect={handleTypeSelect} />}

        {/* Paso 2: Nombre del proyecto */}
        {step === 2 && (
          <form onSubmit={handleCreate}>
            <div className="modal-title">Nuevo proyecto</div>

            {/* Indicador de modo */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: userType === 'solo' ? '#F3F0FF' : '#E8F5E9',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500',
                color: userType === 'solo' ? '#7E6DAD' : '#2E7D32',
                marginBottom: '16px',
                cursor: 'pointer',
              }}
              onClick={handleBack}
              title="Cambiar perfil"
            >
              <span>{userType === 'solo' ? '🧭' : '🎯'}</span>
              <span>
                {userType === 'solo'
                  ? 'Modo: mi proyecto'
                  : 'Modo: cliente / equipo'}
              </span>
              <span style={{ fontSize: '10px', opacity: 0.6 }}>✎</span>
            </div>

            <div className="modal-field">
              <label className="modal-label">
                ¿Cómo se llama tu proyecto?
              </label>
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
        )}
      </div>
    </div>
  )
}
