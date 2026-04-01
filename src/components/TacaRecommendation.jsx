const PURPLE = '#534AB7'
const GREEN = '#1D9E75'

export default function TacaRecommendation({ text, type = 'info' }) {
  const bg = type === 'warning' ? 'var(--tc-warning-light)' : 'var(--tc-purple-light)'
  const color = type === 'warning' ? 'var(--tc-warning)' : PURPLE

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '14px 18px',
        background: bg,
        borderRadius: 'var(--tc-radius-lg)',
        marginBottom: '16px',
        alignItems: 'flex-start',
      }}
    >
      {/* Taca mini icon */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: PURPLE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
          <circle cx="12" cy="14" r="3.5" fill="white" />
          <circle cx="21" cy="14" r="3.5" fill="white" />
          <circle cx="13" cy="13.5" r="2" fill="#26215C" />
          <circle cx="22" cy="13.5" r="2" fill="#26215C" />
          <path d="M12 22 Q16 25.5 21 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="8" y1="7" x2="5" y2="2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="4.5" cy="1.5" r="1.5" fill={GREEN} />
          <line x1="24" y1="7" x2="27" y2="2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="27.5" cy="1.5" r="1.5" fill={GREEN} />
        </svg>
      </div>

      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: color,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Taca recomienda
        </span>
        <p
          style={{
            fontSize: '14px',
            color: color,
            margin: '4px 0 0',
            lineHeight: '1.7',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
