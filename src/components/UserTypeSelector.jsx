const PURPLE = '#7E6DAD'

export default function UserTypeSelector({ onSelect }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: PURPLE,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '6px',
          }}
        >
          Antes de empezar
        </div>
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 8px',
            color: 'var(--tc-text)',
          }}
        >
          ¿Para quién vas a planificar este proyecto?
        </h2>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--tc-text-hint)',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          Esto adapta las explicaciones y ejemplos a tu perfil. Puedes cambiarlo después.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          type="button"
          onClick={() => onSelect('solo')}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            padding: '16px',
            background: 'white',
            border: '1.5px solid var(--tc-border)',
            borderRadius: 'var(--tc-radius)',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = PURPLE
            e.currentTarget.style.boxShadow = `0 0 0 3px ${PURPLE}18`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--tc-border)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span style={{ fontSize: '28px', lineHeight: '1', flexShrink: 0 }}>
            🧭
          </span>
          <div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--tc-text)',
                marginBottom: '4px',
              }}
            >
              Para mí, es mi idea
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--tc-text-hint)',
                lineHeight: '1.5',
              }}
            >
              Tengo una idea y quiero convertirla en un plan concreto.
              Explicaciones completas con analogías y ejemplos paso a paso.
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelect('pro')}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            padding: '16px',
            background: 'white',
            border: '1.5px solid var(--tc-border)',
            borderRadius: 'var(--tc-radius)',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = PURPLE
            e.currentTarget.style.boxShadow = `0 0 0 3px ${PURPLE}18`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--tc-border)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span style={{ fontSize: '28px', lineHeight: '1', flexShrink: 0 }}>
            🎯
          </span>
          <div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--tc-text)',
                marginBottom: '4px',
              }}
            >
              Para un cliente o un equipo
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--tc-text-hint)',
                lineHeight: '1.5',
              }}
            >
              Planifico proyectos para terceros y necesito eficiencia.
              Insights profesionales, errores frecuentes y benchmarks.
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
