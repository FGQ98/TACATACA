import { useState, useEffect, useCallback } from 'react'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export function useBrief(projectId) {
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Cargar respuestas existentes
  useEffect(() => {
    if (!projectId) return

    async function load() {
      setLoading(true)
      const ref = doc(db, 'briefs', projectId)
      const snap = await getDoc(ref)

      if (snap.exists()) {
        setAnswers(snap.data().answers || {})
      }
      setLoading(false)
    }

    load()
  }, [projectId])

  // Actualizar una respuesta en local
  function updateAnswer(stepId, questionId, value) {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [questionId]: value,
      },
    }))
  }

  // Guardar en Firestore
  const save = useCallback(
    async (currentAnswers) => {
      if (!projectId) return

      setSaving(true)
      const ref = doc(db, 'briefs', projectId)
      const data = {
        projectId,
        answers: currentAnswers || answers,
        updatedAt: serverTimestamp(),
      }

      const snap = await getDoc(ref)
      if (snap.exists()) {
        await updateDoc(ref, data)
      } else {
        await setDoc(ref, { ...data, createdAt: serverTimestamp() })
      }

      // Actualizar timestamp del proyecto también
      const projectRef = doc(db, 'projects', projectId)
      await updateDoc(projectRef, { updatedAt: serverTimestamp() })

      setSaving(false)
    },
    [projectId, answers]
  )

  // Autoguardado con debounce
  useEffect(() => {
    if (loading || Object.keys(answers).length === 0) return

    const timer = setTimeout(() => {
      save(answers)
    }, 2000)

    return () => clearTimeout(timer)
  }, [answers, loading, save])

  // Calcular score de madurez
  function getMaturityScore() {
    let filled = 0
    let total = 0

    Object.values(answers).forEach((step) => {
      Object.values(step).forEach((val) => {
        total++
        if (val && val.toString().trim().length > 10) filled++
      })
    })

    if (total === 0) return { level: 'sin datos', score: 0 }

    const ratio = filled / total
    if (ratio >= 0.8) return { level: 'alta', score: Math.round(ratio * 100) }
    if (ratio >= 0.5) return { level: 'media', score: Math.round(ratio * 100) }
    return { level: 'baja', score: Math.round(ratio * 100) }
  }

  // Verificar si un paso está completo
  function isStepComplete(stepId) {
    const stepAnswers = answers[stepId]
    if (!stepAnswers) return false

    return Object.values(stepAnswers).some(
      (val) => val && val.toString().trim().length > 0
    )
  }

  return {
    answers,
    loading,
    saving,
    updateAnswer,
    save,
    getMaturityScore,
    isStepComplete,
  }
}
