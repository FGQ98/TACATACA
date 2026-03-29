import { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

export function useProject() {
  return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState(null)

  const value = { currentProject, setCurrentProject }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}
