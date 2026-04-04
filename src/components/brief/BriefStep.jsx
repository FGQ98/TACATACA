const PURPLE = '#7E6DAD'

export default function BriefStep({ step, answers, onAnswer }) {
  const stepAnswers = answers[step.id] || {}

  function handleChange(questionId, value) {
    onAnswer(step.id, questionId, value)
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: PURPLE,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {step.subtitle}
        </span>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>
          {step.title}
        </h2>
      </div>

      {/* Alerta de decisión irreversible */}
      {step.irreversible && (
        <div
          style={{
            background: 'var(--tc-warning-light)',
            color: 'var(--tc-warning)',
            fontSize: '13px',
            padding: '12px 16px',
            borderRadius: 'var(--tc-radius)',
            marginBottom: '16px',
            lineHeight: '1.5',
          }}
        >
          <strong>Decisión importante:</strong> {step.irreversibleNote}
        </div>
      )}

      {/* A — Contexto */}
      <div className="card" style={{ marginBottom: '12px' }}>
        <div style={sectionLabel}>A · Contexto</div>
        <p style={{ fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
          {step.context.text}
        </p>
      </div>

      {/* B — Ejemplo */}
      <div className="card" style={{ marginBottom: '12px' }}>
        <div style={sectionLabel}>B · Ejemplo</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div
            style={{
              padding: '10px 12px',
              background: 'var(--tc-danger-light)',
              borderRadius: 'var(--tc-radius)',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--tc-danger)' }}>
              Así no
            </span>
            <p style={{ fontSize: '13px', color: 'var(--tc-danger)', margin: '4px 0 0', lineHeight: '1.5' }}>
              {step.example.bad}
            </p>
          </div>
          <div
            style={{
              padding: '10px 12px',
              background: 'var(--tc-success-light)',
              borderRadius: 'var(--tc-radius)',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--tc-success)' }}>
              Así sí
            </span>
            <p style={{ fontSize: '13px', color: 'var(--tc-success)', margin: '4px 0 0', lineHeight: '1.5' }}>
              {step.example.good}
            </p>
          </div>
        </div>
      </div>

      {/* C — Tu turno */}
      <div className="card" style={{ marginBottom: '12px' }}>
        <div style={sectionLabel}>C · Tu turno</div>
        {step.questions.map((q) => (
          <div key={q.id} style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                color: 'var(--tc-text)',
                marginBottom: '6px',
                lineHeight: '1.5',
              }}
            >
              {q.label}
            </label>

            {q.type === 'textarea' && (
              <textarea
                value={stepAnswers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--tc-border)',
                  borderRadius: 'var(--tc-radius)',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  lineHeight: '1.5',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = PURPLE)}
                onBlur={(e) => (e.target.style.borderColor = 'var(--tc-border)')}
              />
            )}

            {q.type === 'select' && (
              <select
                value={stepAnswers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--tc-border)',
                  borderRadius: 'var(--tc-radius)',
                  background: 'white',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = PURPLE)}
                onBlur={(e) => (e.target.style.borderColor = 'var(--tc-border)')}
              >
                <option value="">Selecciona una opción...</option>
                {q.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {/* D — Validación */}
      <div className="card">
        <div style={sectionLabel}>D · Validación</div>
        <label
          style={{
            display: 'block',
            fontSize: '14px',
            color: 'var(--tc-text)',
            marginBottom: '6px',
            lineHeight: '1.5',
          }}
        >
          {step.validation.label}
        </label>
        <textarea
          value={stepAnswers['validacion'] || ''}
          onChange={(e) => handleChange('validacion', e.target.value)}
          placeholder={step.validation.placeholder}
          style={{
            width: '100%',
            minHeight: '70px',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid var(--tc-border)',
            borderRadius: 'var(--tc-radius)',
            resize: 'vertical',
            fontFamily: 'inherit',
            lineHeight: '1.5',
            outline: 'none',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = PURPLE)}
          onBlur={(e) => (e.target.style.borderColor = 'var(--tc-border)')}
        />
      </div>
    </div>
  )
}

const sectionLabel = {
  fontSize: '11px',
  fontWeight: '500',
  color: 'var(--tc-text-hint)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '8px',
}
