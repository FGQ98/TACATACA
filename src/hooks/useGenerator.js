import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function useGenerator(projectId) {
  const [project, setProject] = useState(null)
  const [brief, setBrief] = useState(null)
  const [research, setResearch] = useState(null)
  const [structure, setStructure] = useState(null)
  const [stack, setStack] = useState(null)
  const [security, setSecurity] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!projectId) return

    async function loadAll() {
      setLoading(true)

      const [projSnap, briefSnap, resSnap, strSnap, stackSnap, secSnap] = await Promise.all([
        getDoc(doc(db, 'projects', projectId)),
        getDoc(doc(db, 'briefs', projectId)),
        getDoc(doc(db, 'areas_research', projectId)),
        getDoc(doc(db, 'areas_structure', projectId)),
        getDoc(doc(db, 'areas_stack', projectId)),
        getDoc(doc(db, 'areas_security', projectId)),
      ])

      if (projSnap.exists()) setProject(projSnap.data())
      if (briefSnap.exists()) setBrief(briefSnap.data().answers || {})
      if (resSnap.exists()) setResearch(resSnap.data().answers || {})
      if (strSnap.exists()) setStructure(strSnap.data().answers || {})
      if (stackSnap.exists()) setStack(stackSnap.data().answers || {})
      if (secSnap.exists()) setSecurity(secSnap.data().answers || {})

      setLoading(false)
    }

    loadAll()
  }, [projectId])

  function getCompletionStatus() {
    const areas = [
      { name: 'Brief', data: brief, steps: ['dolor', 'modelo', 'alcance', 'usuario', 'riesgo'] },
      { name: 'Investigación', data: research, steps: ['vecinos', 'escaparates', 'viento', 'precios'] },
      { name: 'Estructura', data: structure, steps: ['terreno', 'cimientos', 'plantas', 'mapa'] },
      { name: 'Stack', data: stack, steps: ['acometidas', 'contadores', 'instalacion', 'recibo'] },
      { name: 'Seguridad', data: security, steps: ['llavero', 'cerraduras', 'alarma', 'seguro'] },
    ]

    return areas.map((area) => {
      const filled = area.steps.filter((s) => {
        const stepData = area.data?.[s]
        if (!stepData) return false
        return Object.values(stepData).some((v) => v && v.toString().trim().length > 0)
      }).length
      return { name: area.name, filled, total: area.steps.length, complete: filled === area.steps.length }
    })
  }

  function getVal(obj, stepId, fieldId) {
    return obj?.[stepId]?.[fieldId] || ''
  }

  function label(value, options) {
    if (!value || !options) return value || ''
    const opt = options.find((o) => o.value === value)
    return opt ? opt.label : value
  }

  const TIPO_OPTIONS = [
    { value: 'saas', label: 'SaaS' },
    { value: 'marketplace', label: 'Marketplace' },
    { value: 'herramienta', label: 'Herramienta' },
    { value: 'web', label: 'Web / Landing' },
    { value: 'app', label: 'App móvil' },
    { value: 'no_se', label: 'Por determinar' },
  ]

  const PUBLICO_OPTIONS = [
    { value: 'b2b', label: 'B2B' },
    { value: 'b2c', label: 'B2C' },
    { value: 'b2b2c', label: 'B2B2C' },
  ]

  const ARCH_OPTIONS = [
    { value: 'html_puro', label: 'HTML puro + localStorage' },
    { value: 'html_sqlite', label: 'HTML + SQLite' },
    { value: 'html_json', label: 'HTML + JSON estático' },
    { value: 'html_firebase', label: 'HTML + Firebase' },
    { value: 'saas_ligero', label: 'SaaS ligero (Vite + React)' },
    { value: 'saas_completo', label: 'SaaS completo (Next.js / SSR)' },
    { value: 'hibrido', label: 'Híbrido (Landing + App)' },
    { value: 'pwa_nativa', label: 'PWA / App nativa' },
    { value: 'no_se', label: 'Por determinar' },
  ]

  function generatePromptPack(version) {
    const name = project?.name || 'Mi Proyecto'
    const tipo = label(getVal(brief, 'modelo', 'tipo_proyecto'), TIPO_OPTIONS)
    const publico = label(getVal(brief, 'modelo', 'publico'), PUBLICO_OPTIONS)
    const queHace = getVal(brief, 'modelo', 'que_hace')
    const modeloDesc = getVal(brief, 'modelo', 'modelo_descripcion')
    const problema = getVal(brief, 'dolor', 'problema_actual')
    const coste = getVal(brief, 'dolor', 'coste_problema')
    const funcionalidades = getVal(brief, 'alcance', 'funcionalidades')
    const mvpPantalla = getVal(brief, 'alcance', 'verguenza_quitar')
    const roles = getVal(brief, 'usuario', 'roles')
    const caminos = getVal(brief, 'usuario', 'caminos')
    const dispositivo = getVal(brief, 'usuario', 'dispositivo')
    const competidor = getVal(research, 'vecinos', 'conoces_competidor')
    const hueco = getVal(research, 'escaparates', 'tu_hueco')
    const aFavor = getVal(research, 'viento', 'a_favor')
    const precioIntuicion = getVal(research, 'precios', 'intuicion_precio')
    const modeloCobro = getVal(research, 'precios', 'modelo_cobro')
    const arquitectura = label(getVal(structure, 'terreno', 'tipo_tech') || getVal(structure, 'terreno', 'acepta_arquitectura'), ARCH_OPTIONS)
    const pantallas = getVal(structure, 'cimientos', 'pantallas')
    const datosCriticos = getVal(structure, 'plantas', 'datos_criticos')
    const integraciones = getVal(structure, 'plantas', 'integraciones')
    const crecimiento = getVal(structure, 'mapa', 'crecimiento')
    const presupuesto = getVal(stack, 'contadores', 'presupuesto_tech')
    const prioridad = getVal(stack, 'contadores', 'prioridad_tech')
    const flujoUsuario = getVal(stack, 'instalacion', 'flujo_usuario')
    const usuariosEsperados = getVal(stack, 'recibo', 'usuarios_esperados')
    const datoSensible = getVal(stack, 'recibo', 'dato_sensible')
    const rolesSeguridad = getVal(security, 'llavero', 'roles_confirmados')
    const registro = getVal(security, 'llavero', 'registro_abierto')
    const publicas = getVal(security, 'cerraduras', 'pantallas_publicas')
    const privadas = getVal(security, 'cerraduras', 'pantallas_privadas')
    const admin = getVal(security, 'cerraduras', 'pantallas_admin')
    const datosPersonales = getVal(security, 'alarma', 'datos_personales')
    const paisUsuarios = getVal(security, 'alarma', 'pais_usuarios')
    const perdidaDatos = getVal(security, 'seguro', 'perdida_datos')
    const dependencias = getVal(brief, 'riesgo', 'dependencias')
    const regulacion = getVal(brief, 'riesgo', 'regulacion')

    if (version === 'compacta') {
      return `# ${name}
## Tipo: ${tipo} · ${publico}
## Qué hace: ${queHace || modeloDesc}
## Problema: ${problema}
## Roles: ${roles}
## Arquitectura: ${arquitectura}
## Pantallas: ${pantallas}
## Datos críticos: ${datosCriticos}
## Seguridad: ${datosPersonales ? 'Datos ' + datosPersonales : 'Básica'}
## Competencia: ${competidor || 'No identificada'}
## Precio estimado: ${precioIntuicion || 'Por definir'}
## Riesgos: ${dependencias || 'No identificados'}
// Copia este bloque al inicio de cada sesión con IA`
    }

    if (version === 'completa') {
      return `# Proyecto: ${name}
# Generado por Tacataca · ${new Date().toLocaleDateString('es-ES')}

## 1. DEFINICIÓN
- Nombre: ${name}
- Tipo: ${tipo}
- Público: ${publico}
- Qué hace: ${queHace}
- Modelo: ${modeloDesc}
- Problema que resuelve: ${problema}
- Coste del problema: ${coste}

## 2. MERCADO
- Competencia identificada: ${competidor || 'No identificada — requiere investigación'}
- Hueco de mercado: ${hueco || 'Por definir'}
- Vientos a favor: ${aFavor || 'No identificados'}
- Precio estimado: ${precioIntuicion || 'Por definir'}
- Modelo de cobro: ${modeloCobro || 'Por definir'}

## 3. USUARIOS
- Roles: ${roles}
- Caminos críticos: ${caminos}
- Dispositivos: ${dispositivo}
- Registro: ${registro || 'Abierto'}

## 4. ARQUITECTURA
- Tipo: ${arquitectura}
- Pantallas: ${pantallas}
- Datos críticos: ${datosCriticos}
- Integraciones: ${integraciones || 'Ninguna por ahora'}
- Crecimiento previsto: ${crecimiento || 'No definido'}

## 5. STACK
- Presupuesto: ${presupuesto || 'Por definir'}
- Prioridad: ${prioridad || 'No definida'}
- Usuarios esperados (3 meses): ${usuariosEsperados || 'No estimado'}
- Datos sensibles: ${datoSensible || 'No'}
- Llegada del usuario: ${flujoUsuario || 'URL directa'}

## 6. SEGURIDAD
- Roles confirmados: ${rolesSeguridad || roles}
- Pantallas públicas: ${publicas || 'Ninguna'}
- Pantallas privadas: ${privadas || 'Todas'}
- Pantallas admin: ${admin || 'Panel admin'}
- Nivel de datos: ${datosPersonales || 'Mínimo'}
- Regulación: ${paisUsuarios || 'Por definir'}
- Tolerancia a pérdida: ${perdidaDatos || 'No evaluada'}

## 7. RIESGOS
- Dependencias externas: ${dependencias || 'No identificadas'}
- Regulación: ${regulacion || 'No identificada'}

## 8. PRINCIPIOS
- Principio Cero: plataforma ciega al contenido del usuario
- Seguridad proporcional: más cerradura donde hay más que proteger
- Modularidad: crecer por adición, no por refactorización
- Estanqueidad: cada archivo una cosa, errores no encadenados

// Copia este bloque al inicio de cada sesión con IA
// Generado por Tacataca — De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS`
    }

    // Versión estándar (por defecto)
    return `# Proyecto: ${name}
## Tipo: ${tipo} · ${publico}
## Qué hace: ${queHace || modeloDesc}

## PROBLEMA
${problema}
Coste: ${coste}

## USUARIOS
Roles: ${roles}
Caminos: ${caminos}
Dispositivos: ${dispositivo}

## ARQUITECTURA
Tipo: ${arquitectura}
Pantallas: ${pantallas}
Datos críticos: ${datosCriticos}
Integraciones: ${integraciones || 'Ninguna'}

## COMPETENCIA
${competidor || 'No identificada'}
Hueco: ${hueco || 'Por definir'}
Precio estimado: ${precioIntuicion || 'Por definir'}

## SEGURIDAD
Roles: ${rolesSeguridad || roles}
Datos: ${datosPersonales || 'Mínimo'}
Regulación: ${paisUsuarios || 'Por definir'}

## RIESGOS
Dependencias: ${dependencias || 'No identificadas'}
Regulación: ${regulacion || 'No identificada'}

## PRINCIPIOS
- Principio Cero: plataforma ciega al contenido
- Seguridad proporcional
- Modularidad y estanqueidad

// Copia este bloque al inicio de cada sesión con IA
// Tacataca · ${new Date().toLocaleDateString('es-ES')}`
  }

  function generateBlueprint() {
    const name = project?.name || 'Mi Proyecto'
    const sections = [
      { title: '1. Definición', content: generatePromptPack('completa').split('## 1. DEFINICIÓN')[1]?.split('## 2.')[0] || '' },
    ]
    // Blueprint es la versión completa formateada como documento
    return `# BLUEPRINT: ${name}
# Documento de planificación generado por Tacataca
# Fecha: ${new Date().toLocaleDateString('es-ES')}

${generatePromptPack('completa')}

---
De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS
Generado por Tacataca · tacataca.app`
  }

  return {
    project,
    brief,
    research,
    structure,
    stack,
    security,
    loading,
    getCompletionStatus,
    generatePromptPack,
    generateBlueprint,
  }
}
