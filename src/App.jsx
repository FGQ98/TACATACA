import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import BriefWizard from './pages/BriefWizard'
import Generator from './pages/Generator'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">tacataca</div>
        <p className="loading-text">Preparando el camino...</p>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/proyecto/:projectId/brief" element={<BriefWizard />} />
          <Route path="/proyecto/:projectId/generador" element={<Generator />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
