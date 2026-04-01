import TacaRecommendation from './TacaRecommendation'

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

      {/* Taca recommendation if present */}
      {step.tacaRecommendation && (
        <TacaRecommendation
          text={step.tacaRecommendation}
          type={step.tacaType || 'info'}
        />
      )}

      {/* Context block if present (for non-recommendation steps) */}
      {step.context && !step.tacaRecommendation && (
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
      )}

      {/* Recommendation cards if present */}
      {step.recommendations && (
        <div className="card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px' }}>
            {step.recommendationTitle || 'Análisis de Taca'}
          </div>
          {step.recommendations.map((rec, i) => (
            <div
              key={i}
              style={{
                padding: '10px 14px',
                background: rec.highlight
                  ? 'var(--tc-purple-light)'
                  : 'var(--tc-bg-surface)',
                borderRadius: 'var(--tc-radius)',
                marginBottom: i < step.recommendations.length - 1 ? '8px' : 0,
                border: rec.highlight
                  ? `1.5px solid ${PURPLE}`
                  : '1px solid var(--tc-border)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: rec.highlight ? PURPLE : 'var(--tc-text)' }}>
                  {rec.label}
                </span>
                {rec.badge && (
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '2px 8px',
                      borderRadius: 'var(--tc-radius)',
                      background: rec.highlight ? PURPLE : 'var(--tc-bg-surface)',
                      color: rec.highlight ? 'white' : 'var(--tc-text-hint)',
                      fontWeight: '500',
                    }}
                  >
                    {rec.badge}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--tc-text-secondary)', margin: '4px 0 0', lineHeight: '1.5' }}>
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Questions - user confirms or adjusts */}
      <div className="card">
        {step.questionsTitle && (
          <div
            style={{
              fontSize: '13px',
              fontWeight: '500',
              marginBottom: '16px',
              color: 'var(--tc-text)',
            }}
          >
            {step.questionsTitle}
          </div>
        )}

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

            {q.hint && (
              <p style={{ fontSize: '12px', color: 'var(--tc-text-hint)', margin: '-2px 0 8px', lineHeight: '1.4' }}>
                {q.hint}
              </p>
            )}

            {q.type === 'textarea' && (
              <textarea
                value={stepAnswers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                style={{
                  width: '100%',
                  minHeight: q.small ? '50px' : '80px',
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

            {q.type === 'confirm' && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleChange(q.id, opt.value)}
                    style={{
                      padding: '8px 16px',
                      fontSize: '13px',
                      border: stepAnswers[q.id] === opt.value
                        ? `2px solid ${PURPLE}`
                        : '1px solid var(--tc-border)',
                      borderRadius: 'var(--tc-radius)',
                      background: stepAnswers[q.id] === opt.value
                        ? 'var(--tc-purple-light)'
                        : 'white',
                      color: stepAnswers[q.id] === opt.value
                        ? PURPLE
                        : 'var(--tc-text-secondary)',
                      cursor: 'pointer',
                      fontWeight: stepAnswers[q.id] === opt.value ? '500' : '400',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
