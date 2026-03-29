import { useState, useEffect } from 'react'
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'

export function useProjects() {
  const { user } = useAuth()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setProjects([])
      setLoading(false)
      return
    }

    const q = query(
      collection(db, 'projects'),
      where('userId', '==', user.uid)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => {
          const ta = a.updatedAt?.toMillis?.() || 0
          const tb = b.updatedAt?.toMillis?.() || 0
          return tb - ta
        })
      setProjects(data)
      setLoading(false)
    })

    return unsubscribe
  }, [user])

  async function createProject(name, type) {
    if (!user) return null

    const ref = await addDoc(collection(db, 'projects'), {
      userId: user.uid,
      name,
      type: type || '',
      status: 'nuevo',
      currentArea: 1,
      currentStep: 1,
      areas: {
        brief: { completed: false, steps: {} },
        research: { completed: false, steps: {} },
        structure: { completed: false, steps: {} },
        stack: { completed: false, steps: {} },
        security: { completed: false, steps: {} },
        generator: { completed: false },
      },
      version: 1,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })

    return ref.id
  }

  async function deleteProject(projectId) {
    await deleteDoc(doc(db, 'projects', projectId))
  }

  return { projects, loading, createProject, deleteProject }
}
