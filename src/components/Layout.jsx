import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout() {
  const { user, logout } = useAuth()

  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/" className="layout-brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/taca-logo.png"
            alt="Taca"
            style={{ width: '28px', height: 'auto' }}
          />
          tacataca
        </Link>
        <div className="layout-user">
          <span className="layout-email">{user?.email}</span>
          <button className="btn-logout" onClick={logout}>
            Salir
          </button>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
