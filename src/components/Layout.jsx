import { useState, useEffect } from 'react'
import { Outlet, Link, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AREAS = [
  { id: 'brief', path: 'brief', name: 'Brief', icon: '📋', taca: 'avanzando' },
  { id: 'research', path: 'research', name: 'Investigación', icon: '🏘️', taca: 'pensando' },
  { id: 'structure', path: 'structure', name: 'Estructura', icon: '🏗️', taca: 'avanzando' },
  { id: 'stack', path: 'stack', name: 'Stack', icon: '🔌', taca: 'avanzando' },
  { id: 'security', path: 'security', name: 'Seguridad', icon: '🔐', taca: 'pensando' },
  { id: 'generator', path: 'generator', name: 'Generador', icon: '🎒', taca: 'celebrando' },
]

export default function Layout() {
  const { user, logout } = useAuth()
  const params = useParams()
  const location = useLocation()
  // Get projectId from params or from URL directly (works with any route structure)
  const projectId = params.projectId || location.pathname.match(/\/proyecto\/([^/]+)/)?.[1] || null
  const [mobile, setMobile] = useState(window.innerWidth < 768)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    function handleResize() { setMobile(window.innerWidth < 768) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar on navigation (mobile)
  useEffect(() => { setSidebarOpen(false) }, [location.pathname])

  const isInsideProject = !!projectId

  function isActive(areaPath) {
    return location.pathname.includes(`/${areaPath}`)
  }

  const currentArea = AREAS.find(a => isActive(a.path))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--tc-bg-page)' }}>

      {/* Overlay (mobile) */}
      {mobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 199 }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: '240px',
        background: 'white',
        borderRight: '1px solid var(--tc-border)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0',
        position: 'fixed',
        top: 0, left: 0, bottom: 0,
        zIndex: 200,
        overflowY: 'auto',
        transform: mobile && !sidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
        transition: 'transform 0.25s ease',
      }}>
        {/* Brand */}
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '0 20px 20px', borderBottom: '1px solid var(--tc-border)',
          textDecoration: 'none', marginBottom: '16px',
        }}>
          <img src="/taca-logo.png" alt="Taca" style={{ width: '32px', height: 'auto' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--tc-purple)', letterSpacing: '-0.3px' }}>
            tacataca
          </span>
        </Link>

        {/* Navigation */}
        {isInsideProject ? (
          <nav style={{ flex: 1, padding: '0 12px' }}>
            <div style={{
              fontSize: '10px', fontWeight: '600', letterSpacing: '1.2px',
              textTransform: 'uppercase', color: 'var(--tc-text-hint)',
              padding: '0 8px 8px',
            }}>
              Áreas del proyecto
            </div>
            {AREAS.map((area) => {
              const active = isActive(area.path)
              return (
                <Link
                  key={area.id}
                  to={`/proyecto/${projectId}/${area.path}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 12px', borderRadius: '8px',
                    textDecoration: 'none', fontSize: '14px', marginBottom: '2px',
                    background: active ? 'var(--tc-purple-light)' : 'transparent',
                    color: active ? 'var(--tc-purple)' : 'var(--tc-text-secondary)',
                    fontWeight: active ? '600' : '400',
                    transition: 'background 0.15s',
                  }}
                >
                  <span style={{ fontSize: '16px', width: '20px', textAlign: 'center', flexShrink: 0 }}>
                    {area.icon}
                  </span>
                  <span style={{ flex: 1 }}>{area.name}</span>
                  {active && (
                    <img src={`/taca-${area.taca}.png`} alt="" style={{
                      width: '24px', height: '24px', objectFit: 'contain',
                    }} />
                  )}
                </Link>
              )
            })}

            <Link to="/" style={{
              display: 'block', padding: '12px 12px', fontSize: '13px',
              color: 'var(--tc-text-hint)', textDecoration: 'none',
              borderTop: '1px solid var(--tc-border)', marginTop: '12px',
            }}>
              ← Mis proyectos
            </Link>
          </nav>
        ) : (
          <nav style={{ flex: 1, padding: '0 12px' }}>
            <Link to="/" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '14px',
              background: 'var(--tc-purple-light)', color: 'var(--tc-purple)', fontWeight: '600',
            }}>
              <span style={{ fontSize: '16px' }}>📊</span>
              Mis proyectos
            </Link>
          </nav>
        )}

        {/* User info */}
        <div style={{
          padding: '16px 20px 0', borderTop: '1px solid var(--tc-border)', marginTop: 'auto',
        }}>
          <div style={{
            fontSize: '12px', color: 'var(--tc-text-hint)', marginBottom: '8px',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {user?.email}
          </div>
          <button onClick={logout} style={{
            background: 'none', border: '1px solid var(--tc-border)',
            borderRadius: '6px', padding: '6px 12px', fontSize: '12px',
            color: 'var(--tc-text-secondary)', cursor: 'pointer', width: '100%',
            fontFamily: 'inherit',
          }}>
            Salir
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{
        flex: 1, marginLeft: mobile ? 0 : '240px',
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
      }}>
        {/* Mobile top bar */}
        {mobile && (
          <header style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 16px', background: 'white',
            borderBottom: '1px solid var(--tc-border)',
          }}>
            <button onClick={() => setSidebarOpen(true)} style={{
              background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', padding: '4px',
            }}>
              ☰
            </button>
            <Link to="/" style={{
              display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
            }}>
              <img src="/taca-logo.png" alt="Taca" style={{ width: '24px', height: 'auto' }} />
              <span style={{ fontWeight: '600', color: 'var(--tc-purple)', fontSize: '15px' }}>
                tacataca
              </span>
            </Link>
            <button onClick={logout} style={{
              background: 'none', border: '1px solid var(--tc-border)',
              borderRadius: '6px', padding: '4px 10px', fontSize: '12px',
              color: 'var(--tc-text-secondary)', cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Salir
            </button>
          </header>
        )}

        {/* Mobile area tabs */}
        {mobile && isInsideProject && (
          <div style={{
            display: 'flex', overflowX: 'auto', gap: '4px',
            padding: '8px 12px', background: 'white',
            borderBottom: '1px solid var(--tc-border)',
          }}>
            {AREAS.map((area) => {
              const active = isActive(area.path)
              return (
                <Link
                  key={area.id}
                  to={`/proyecto/${projectId}/${area.path}`}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: '2px', padding: '6px 10px', borderRadius: '8px',
                    textDecoration: 'none', minWidth: '56px', flexShrink: 0,
                    background: active ? 'var(--tc-purple-light)' : 'transparent',
                    color: active ? 'var(--tc-purple)' : 'var(--tc-text-hint)',
                    fontWeight: active ? '600' : '400',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{area.icon}</span>
                  <span style={{ fontSize: '10px' }}>{area.name}</span>
                </Link>
              )
            })}
          </div>
        )}

        <main style={{
          flex: 1, padding: mobile ? '16px' : '24px 32px',
          maxWidth: '900px', width: '100%', margin: '0 auto',
        }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
