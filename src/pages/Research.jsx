import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAreaData } from '../hooks/useAreaData'
import { RESEARCH_STEPS } from '../data/researchContent'
import StepIndicator from '../components/StepIndicator'
import AreaStep from '../components/AreaStep'

const PURPLE = '#7E6DAD'

export default function Research() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { answers, loading, saving, updateAnswer, isStepStarted } = useAreaData('research', projectId)
  const [currentStep, setCurrentStep] = useState(1)
  const [projectName, setProjectName] = useState('')

  useEffect(() => {
    async function loadProject() {
      const snap = await getDoc(doc(db, 'projects', projectId))
      if (snap.exists()) setProjectName(snap.data().name || '')
    }
    loadProject()
  }, [projectId])

  const step = RESEARCH_STEPS[currentStep - 1]
  const isFirst = currentStep === 1
  const isLast = currentStep === RESEARCH_STEPS.length

  function handlePrev() {
    if (!isFirst) setCurrentStep((s) => s - 1)
    else navigate(`/proyecto/${projectId}/brief`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNext() {
    if (isLast) navigate(`/proyecto/${projectId}/estructura`)
    else setCurrentStep((s) => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return <div className="placeholder-page"><p className="placeholder-text">Cargando investigación...</p></div>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/brief`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Brief
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: saving ? PURPLE : 'var(--tc-text-hint)', transition: 'color 0.3s' }}>
            {saving ? 'Guardando...' : 'Guardado automático'}
          </span>
          {projectName && <span style={{ fontSize: '12px', color: 'var(--tc-text-secondary)', fontWeight: '500' }}>{projectName}</span>}
        </div>
      </div>

      <StepIndicator steps={RESEARCH_STEPS} currentStep={currentStep} onStepClick={setCurrentStep} isStepStarted={isStepStarted} />
      <AreaStep step={step} answers={answers} onAnswer={updateAnswer} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={handlePrev}>
          ← {isFirst ? 'Brief' : 'Anterior'}
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          {isLast ? 'Siguiente área →' : 'Siguiente →'}
        </button>
      </div>
    </div>
  )
}
