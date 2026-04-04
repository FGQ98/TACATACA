import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAreaData } from '../hooks/useAreaData'
import { SECURITY_STEPS } from '../data/securityContent'
import StepIndicator from '../components/StepIndicator'
import AreaStep from '../components/AreaStep'

const PURPLE = '#7E6DAD'

export default function Security() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { answers, loading, saving, updateAnswer, isStepStarted } = useAreaData('security', projectId)
  const [currentStep, setCurrentStep] = useState(1)
  const [projectName, setProjectName] = useState('')

  useEffect(() => {
    async function loadProject() {
      const snap = await getDoc(doc(db, 'projects', projectId))
      if (snap.exists()) setProjectName(snap.data().name || '')
    }
    loadProject()
  }, [projectId])

  const step = SECURITY_STEPS[currentStep - 1]
  const isFirst = currentStep === 1
  const isLast = currentStep === SECURITY_STEPS.length

  function handlePrev() {
    if (!isFirst) setCurrentStep((s) => s - 1)
    else navigate(`/proyecto/${projectId}/stack`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNext() {
    if (isLast) navigate(`/proyecto/${projectId}/generador`)
    else setCurrentStep((s) => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return <div className="placeholder-page"><p className="placeholder-text">Cargando seguridad...</p></div>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/stack`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Stack
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: saving ? PURPLE : 'var(--tc-text-hint)', transition: 'color 0.3s' }}>
            {saving ? 'Guardando...' : 'Guardado automático'}
          </span>
          {projectName && <span style={{ fontSize: '12px', color: 'var(--tc-text-secondary)', fontWeight: '500' }}>{projectName}</span>}
        </div>
      </div>

      <StepIndicator steps={SECURITY_STEPS} currentStep={currentStep} onStepClick={setCurrentStep} isStepStarted={isStepStarted} />
      <AreaStep step={step} answers={answers} onAnswer={updateAnswer} />

      {isLast && (
        <div
          style={{
            marginTop: '16px',
            padding: '14px 18px',
            background: 'var(--tc-success-light)',
            borderRadius: 'var(--tc-radius)',
            fontSize: '13px',
            color: 'var(--tc-success)',
            lineHeight: '1.6',
          }}
        >
          Has completado las 5 áreas de planificación. Al pulsar "Ir al Generador" podrás generar tu Prompt Pack y Blueprint con toda la información recogida.
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={handlePrev}>
          ← {isFirst ? 'Stack' : 'Anterior'}
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          {isLast ? 'Ir al Generador →' : 'Siguiente →'}
        </button>
      </div>
    </div>
  )
}
