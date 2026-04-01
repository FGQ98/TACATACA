import { useState, useEffect, useCallback } from 'react'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

export function useAreaData(areaName, projectId) {
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!projectId || !areaName) return

    async function load() {
      setLoading(true)
      const ref = doc(db, `areas_${areaName}`, projectId)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        setAnswers(snap.data().answers || {})
      }
      setLoading(false)
    }

    load()
  }, [projectId, areaName])

  function updateAnswer(stepId, questionId, value) {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [questionId]: value,
      },
    }))
  }

  const save = useCallback(
    async (currentAnswers) => {
      if (!projectId || !areaName) return
      setSaving(true)

      const ref = doc(db, `areas_${areaName}`, projectId)
      const data = {
        projectId,
        areaName,
        answers: currentAnswers || answers,
        updatedAt: serverTimestamp(),
      }

      const snap = await getDoc(ref)
      if (snap.exists()) {
        await updateDoc(ref, data)
      } else {
        await setDoc(ref, { ...data, createdAt: serverTimestamp() })
      }

      const projectRef = doc(db, 'projects', projectId)
      await updateDoc(projectRef, { updatedAt: serverTimestamp() })

      setSaving(false)
    },
    [projectId, areaName, answers]
  )

  useEffect(() => {
    if (loading || Object.keys(answers).length === 0) return

    const timer = setTimeout(() => {
      save(answers)
    }, 2000)

    return () => clearTimeout(timer)
  }, [answers, loading, save])

  function isStepStarted(stepId) {
    const stepAnswers = answers[stepId]
    if (!stepAnswers) return false
    return Object.values(stepAnswers).some(
      (val) => val && val.toString().trim().length > 0
    )
  }

  return { answers, loading, saving, updateAnswer, save, isStepStarted }
}
