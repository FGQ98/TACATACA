import { useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import ProjectCard from '../components/ProjectCard'
import NewProjectModal from '../components/NewProjectModal'

export default function Dashboard() {
  const { projects, loading } = useProjects()
  const [showModal, setShowModal] = useState(false)

  if (loading) {
    return (
      <div className="placeholder-page">
        <p className="placeholder-text">Cargando proyectos...</p>
      </div>
    )
  }

  const activeCount = projects.filter(
    (p) => !Object.values(p.areas || {}).every((a) => a.completed)
  ).length

  return (
    <>
      <div className="dash-header">
        <div>
          <h1 className="dash-title">Mis proyectos</h1>
          <p className="dash-subtitle">
            {projects.length === 0
              ? 'Todavía no tienes proyectos'
              : `${projects.length} proyecto${projects.length !== 1 ? 's' : ''}${
                  activeCount > 0 ? ` · ${activeCount} activo${activeCount !== 1 ? 's' : ''}` : ''
                }`}
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Nuevo proyecto
        </button>
      </div>

      <div className="dash-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div className="new-project-card" onClick={() => setShowModal(true)}>
          <div className="new-project-card-icon">+</div>
          <span className="new-project-card-text">Nuevo proyecto</span>
        </div>
      </div>

      {showModal && <NewProjectModal onClose={() => setShowModal(false)} />}
    </>
  )
}
