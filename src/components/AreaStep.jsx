const PURPLE = '#534AB7'

export default function AreaStep({ step, answers, onAnswer }) {
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

      {/* Contexto */}
      <div
        style={{
          background: 'var(--tc-purple-light)',
          borderRadius: 'var(--tc-radius)',
          padding: '14px 18px',
          marginBottom: '16px',
          fontSize: '14px',
          color: PURPLE,
          lineHeight: '1.7',
        }}
      >
        {step.context}
      </div>

      {/* Preguntas */}
      <div className="card">
        {step.questions.map((q, i) => (
          <div key={q.id} style={{ marginBottom: i < step.questions.length - 1 ? '20px' : 0 }}>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                color: 'var(--tc-text)',
                marginBottom: '6px',
                lineHeight: '1.5',
                fontWeight: '500',
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
    </div>
  )
}
