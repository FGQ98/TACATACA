import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGenerator } from '../hooks/useGenerator'
import { downloadAsMarkdown, copyToClipboard } from '../utils/exportUtils'

const PURPLE = '#7E6DAD'
const GREEN = '#1D9E75'

export default function Generator() {
  const { projectId } = useParams()
  const {
    project,
    loading,
    getCompletionStatus,
    generatePromptPack,
    generateBlueprint,
  } = useGenerator(projectId)

  const [activeVersion, setActiveVersion] = useState('estandar')
  const [preview, setPreview] = useState('')
  const [previewType, setPreviewType] = useState('')
  const [copied, setCopied] = useState(false)

  if (loading) {
    return (
      <div className="placeholder-page">
        <p className="placeholder-text">Cargando generador...</p>
      </div>
    )
  }

  const status = getCompletionStatus()
  const totalFilled = status.reduce((acc, s) => acc + s.filled, 0)
  const totalSteps = status.reduce((acc, s) => acc + s.total, 0)
  const completionPct = Math.round((totalFilled / totalSteps) * 100)

  function handleGenerate(type, version) {
    if (type === 'prompt') {
      const content = generatePromptPack(version || activeVersion)
      setPreview(content)
      setPreviewType('prompt')
    } else {
      const content = generateBlueprint()
      setPreview(content)
      setPreviewType('blueprint')
    }
    setCopied(false)
  }

  function handleCopy() {
    copyToClipboard(preview).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleDownload() {
    const name = project?.name?.replace(/\s+/g, '_') || 'proyecto'
    const filename = previewType === 'prompt'
      ? `${name}_PromptPack_${activeVersion}.md`
      : `${name}_Blueprint.md`
    downloadAsMarkdown(preview, filename)
  }

  const versions = [
    { id: 'compacta', label: 'Compacta', desc: '~15 líneas', lines: '15' },
    { id: 'estandar', label: 'Estándar', desc: '~50 líneas', lines: '50' },
    { id: 'completa', label: 'Completa', desc: '~120 líneas', lines: '120' },
  ]

  return (
    <div>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link to={`/proyecto/${projectId}/seguridad`} style={{ fontSize: '13px', color: PURPLE, textDecoration: 'none' }}>
          ← Seguridad
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--tc-text-hint)' }}>Área 6 de 6</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <span style={{ fontSize: '11px', fontWeight: '500', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Área 6 · La mochila
        </span>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>
          Generador
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--tc-text-secondary)', marginTop: '4px' }}>
          Todo lo que necesitas para empezar a construir {project?.name || 'tu proyecto'}.
        </p>
      </div>

      {/* Completion status */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '500' }}>Resumen del proyecto</span>
          <span style={{
            fontSize: '12px',
            fontWeight: '500',
            color: completionPct >= 80 ? GREEN : completionPct >= 50 ? 'var(--tc-warning)' : 'var(--tc-danger)',
          }}>
            {completionPct}% completado
          </span>
        </div>

        <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
          {status.map((s, i) => (
            <div key={i} style={{
              flex: 1, height: '3px', borderRadius: '2px',
              background: s.complete ? PURPLE : s.filled > 0 ? 'var(--tc-purple-mid)' : 'var(--tc-border)',
            }} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
          {status.map((s, i) => (
            <div key={i} style={{
              padding: '8px 10px',
              background: s.complete ? 'var(--tc-success-light)' : s.filled > 0 ? 'var(--tc-warning-light)' : 'var(--tc-bg-surface)',
              borderRadius: 'var(--tc-radius)',
            }}>
              <span style={{
                fontSize: '10px',
                color: s.complete ? GREEN : s.filled > 0 ? 'var(--tc-warning)' : 'var(--tc-text-hint)',
              }}>
                {s.name}
              </span>
              <div style={{
                fontSize: '12px',
                fontWeight: '500',
                marginTop: '2px',
                color: s.complete ? GREEN : s.filled > 0 ? 'var(--tc-warning)' : 'var(--tc-text-hint)',
              }}>
                {s.filled}/{s.total} pasos
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prompt Pack section */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{
            width: '10px', height: '10px', borderRadius: '50%', background: PURPLE, flexShrink: 0,
          }} />
          <div>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Prompt Pack</span>
            <p style={{ fontSize: '12px', color: 'var(--tc-text-secondary)', margin: '2px 0 0' }}>
              Bloque de texto para copiar al inicio de cada sesión con IA
            </p>
          </div>
        </div>

        {/* Version selector */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          {versions.map((v) => (
            <button
              key={v.id}
              onClick={() => { setActiveVersion(v.id); if (previewType === 'prompt') handleGenerate('prompt', v.id) }}
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '12px',
                border: activeVersion === v.id ? `2px solid ${PURPLE}` : '1px solid var(--tc-border)',
                borderRadius: 'var(--tc-radius)',
                background: activeVersion === v.id ? 'var(--tc-purple-light)' : 'white',
                color: activeVersion === v.id ? PURPLE : 'var(--tc-text-secondary)',
                cursor: 'pointer',
                fontWeight: activeVersion === v.id ? '500' : '400',
                textAlign: 'center',
              }}
            >
              <div>{v.label}</div>
              <div style={{ fontSize: '10px', marginTop: '2px', opacity: 0.7 }}>{v.desc}</div>
            </button>
          ))}
        </div>

        <button
          onClick={() => handleGenerate('prompt')}
          style={{
            width: '100%',
            padding: '10px',
            background: PURPLE,
            color: 'white',
            border: 'none',
            borderRadius: 'var(--tc-radius)',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Generar Prompt Pack ({versions.find((v) => v.id === activeVersion)?.label})
        </button>
      </div>

      {/* Blueprint section */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{
            width: '10px', height: '10px', borderRadius: '50%', background: GREEN, flexShrink: 0,
          }} />
          <div>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Blueprint</span>
            <p style={{ fontSize: '12px', color: 'var(--tc-text-secondary)', margin: '2px 0 0' }}>
              Documento consolidado de todo el proyecto
            </p>
          </div>
        </div>

        <button
          onClick={() => handleGenerate('blueprint')}
          style={{
            width: '100%',
            padding: '10px',
            background: GREEN,
            color: 'white',
            border: 'none',
            borderRadius: 'var(--tc-radius)',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Generar Blueprint
        </button>
      </div>

      {/* Preview */}
      {preview && (
        <div className="card" style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: '500' }}>
              Vista previa — {previewType === 'prompt' ? `Prompt Pack (${versions.find((v) => v.id === activeVersion)?.label})` : 'Blueprint'}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleCopy}
                style={{
                  padding: '5px 12px',
                  fontSize: '12px',
                  border: '1px solid var(--tc-border)',
                  borderRadius: 'var(--tc-radius)',
                  background: copied ? 'var(--tc-success-light)' : 'white',
                  color: copied ? GREEN : 'var(--tc-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                {copied ? 'Copiado' : 'Copiar'}
              </button>
              <button
                onClick={handleDownload}
                style={{
                  padding: '5px 12px',
                  fontSize: '12px',
                  border: `1px solid ${PURPLE}`,
                  borderRadius: 'var(--tc-radius)',
                  background: 'white',
                  color: PURPLE,
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Descargar .md
              </button>
            </div>
          </div>

          <div style={{
            background: 'var(--tc-bg-surface)',
            borderRadius: 'var(--tc-radius)',
            padding: '14px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '12px',
            color: 'var(--tc-text-secondary)',
            lineHeight: '1.7',
            maxHeight: '400px',
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {preview}
          </div>

          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--tc-text-hint)',
            marginTop: '12px',
          }}>
            De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS
          </p>
        </div>
      )}

      {/* Back to dashboard */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--tc-border)' }}>
        <button className="btn btn-secondary" onClick={() => window.history.back()}>
          ← Seguridad
        </button>
        <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Volver al Dashboard
        </Link>
      </div>
    </div>
  )
}
