const PURPLE = '#7E6DAD'

export default function StepIndicator({ steps, currentStep, onStepClick, isStepStarted }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isActive = stepNum === currentStep
        const isDone = isStepStarted ? isStepStarted(step.id) : stepNum < currentStep
        const barColor = isActive || isDone ? PURPLE : 'var(--tc-border)'
        const textColor = isActive ? PURPLE : isDone ? PURPLE : 'var(--tc-text-hint)'
        const fontWeight = isActive ? '500' : '400'

        return (
          <div
            key={step.id}
            onClick={() => onStepClick(stepNum)}
            style={{
              flex: 1,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                height: '3px',
                background: barColor,
                borderRadius: '2px',
                marginBottom: '6px',
                transition: 'background 0.2s',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                color: textColor,
                fontWeight,
                transition: 'color 0.2s',
              }}
            >
              {step.title}
            </span>
          </div>
        )
      })}
    </div>
  )
}
