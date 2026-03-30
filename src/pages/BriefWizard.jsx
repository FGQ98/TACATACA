import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useBrief } from '../hooks/useBrief'
import { BRIEF_STEPS } from '../data/briefContent'
import StepIndicator from '../components/StepIndicator'
import BriefStep from '../components/brief/BriefStep'

const PURPLE = '#534AB7'

export default function BriefWizard() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { answers, loading, saving, updateAnswer, isStepComplete } = useBrief(projectId)
  const [currentStep, setCurrentStep] = useState(1)
  const [projectName, setProjectName] = useState('')

  // Cargar nombre del proyecto
  useEffect(() => {
    async function loadProject() {
      const snap = await getDoc(doc(db, 'projects', projectId))
      if (snap.exists()) {
        setProjectName(snap.data().name || '')
      }
    }
    loadProject()
  }, [projectId])

  const step = BRIEF_STEPS[currentStep - 1]
  const isFirst = currentStep === 1
  const isLast = currentStep === BRIEF_STEPS.length

  function handlePrev() {
    if (!isFirst) setCurrentStep((s) => s - 1)
  }

  function handleNext() {
    if (isLast) {
      // Ir a la siguiente área (Investigación - placeholder por ahora)
      navigate(`/proyecto/${projectId}/generador`)
    } else {
      setCurrentStep((s) => s + 1)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="placeholder-page">
        <p className="placeholder-text">Cargando brief...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '13px',
            color: PURPLE,
            textDecoration: 'none',
          }}
        >
          ← Mis proyectos
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontSize: '12px',
              color: saving ? PURPLE : 'var(--tc-text-hint)',
              transition: 'color 0.3s',
            }}
          >
            {saving ? 'Guardando...' : 'Guardado automático'}
          </span>
          {projectName && (
            <span
              style={{
                fontSize: '12px',
                color: 'var(--tc-text-secondary)',
                fontWeight: '500',
              }}
            >
              {projectName}
            </span>
          )}
        </div>
      </div>

      {/* Step indicator */}
      <StepIndicator
        steps={BRIEF_STEPS}
        currentStep={currentStep}
        onStepClick={setCurrentStep}
        isStepStarted={isStepComplete}
      />

      {/* Step content - A-B-C-D */}
      <BriefStep
        step={step}
        answers={answers}
        onAnswer={updateAnswer}
      />

      {/* Maturity hint on last step */}
      {isLast && (
        <div
          style={{
            marginTop: '16px',
            padding: '14px 18px',
            background: 'var(--tc-purple-light)',
            borderRadius: 'var(--tc-radius)',
            fontSize: '13px',
            color: PURPLE,
            lineHeight: '1.6',
          }}
        >
          Has llegado al final del Brief. Al pulsar "Siguiente área" guardaremos todas tus respuestas y avanzarás a la Investigación. Podrás volver a editar el Brief en cualquier momento.
        </div>
      )}

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid var(--tc-border)',
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          style={{
            opacity: isFirst ? 0.3 : 1,
            pointerEvents: isFirst ? 'none' : 'auto',
          }}
        >
          ← Anterior
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          {isLast ? 'Siguiente área →' : 'Siguiente →'}
        </button>
      </div>
    </div>
  )
}
