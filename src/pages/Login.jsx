import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, register } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isRegister) {
        await register(email, password, name)
      } else {
        await login(email, password)
      }
    } catch (err) {
      const messages = {
        'auth/invalid-credential': 'Email o contraseña incorrectos',
        'auth/email-already-in-use': 'Este email ya está registrado',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
        'auth/invalid-email': 'El email no es válido',
      }
      setError(messages[err.code] || 'Algo ha fallado. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="/taca-logo.png"
          alt="Taca — el ciempiés"
          style={{
            width: '180px',
            height: 'auto',
            marginBottom: '8px',
          }}
        />
        <div className="login-logo">tacataca</div>
        <p className="login-claim">De la idea al plan. Del plan a la acción.</p>

        <form className="login-card" onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}

          {isRegister && (
            <div className="login-field">
              <label className="login-label">Nombre</label>
              <input
                className="login-input"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="login-field">
            <label className="login-label">Email</label>
            <input
              className="login-input"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label className="login-label">Contraseña</label>
            <input
              className="login-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button className="login-submit" type="submit" disabled={loading}>
            {loading ? 'Un momento...' : isRegister ? 'Crear cuenta' : 'Entrar'}
          </button>

          <div className="login-toggle">
            {isRegister ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
            <span onClick={() => { setIsRegister(!isRegister); setError('') }}>
              {isRegister ? 'Entrar' : 'Crear una'}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
