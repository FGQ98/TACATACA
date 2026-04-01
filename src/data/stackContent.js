// Área 4: Stack — Las instalaciones del local
// Taca elige proveedores con prescripción transparente. El usuario confirma.
// 5 preguntas + 5 filtros + dependencia del Documento Maestro v3

export const STACK_STEPS = [
  {
    id: 'acometidas',
    title: 'Las acometidas',
    subtitle: 'Paso 1 de 4 · Las instalaciones del local',
    tacaRecommendation: 'He analizado tu Brief, tu arquitectura y tus roles. Estas son las instalaciones que tu proyecto necesita. Las marcadas son imprescindibles — las demás dependen de tus respuestas anteriores.',
    recommendationTitle: 'Servicios detectados por Taca',
    recommendations: [
      { label: 'Base de datos', description: 'Dónde viven los datos de usuarios y negocio.', badge: 'Imprescindible', highlight: true },
      { label: 'Autenticación', description: 'Login y registro. Quién entra y con qué credenciales.', badge: 'Imprescindible', highlight: true },
      { label: 'Hosting / Deploy', description: 'Dónde vive tu proyecto en internet.', badge: 'Imprescindible', highlight: true },
      { label: 'Control de versiones', description: 'Historial de código. Cada cambio registrado y reversible.', badge: 'Imprescindible', highlight: true },
      { label: 'Email transaccional', description: 'Confirmaciones, recuperación contraseña, notificaciones.' },
      { label: 'Pasarela de pagos', description: 'Cobrar a usuarios. Suscripciones o pagos puntuales.' },
      { label: 'Almacenamiento de archivos', description: 'Subir y guardar imágenes, PDFs, documentos.' },
      { label: 'Monitorización de errores', description: 'Saber cuándo falla algo antes que el usuario.', badge: 'Fase 2' },
    ],
    questionsTitle: 'Confirma lo que necesitas',
    questions: [
      {
        id: 'necesita_pagos',
        label: '¿Tu proyecto procesará pagos?',
        type: 'select',
        options: [
          { value: 'si_recurrente', label: 'Sí, suscripciones recurrentes' },
          { value: 'si_puntual', label: 'Sí, pagos puntuales' },
          { value: 'futuro', label: 'En el futuro, ahora no' },
          { value: 'no', label: 'No, es gratuito' },
        ],
      },
      {
        id: 'necesita_archivos',
        label: '¿Los usuarios subirán archivos?',
        type: 'select',
        options: [
          { value: 'si', label: 'Sí' },
          { value: 'futuro', label: 'En el futuro' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'servicios_extra',
        label: '¿Necesitas algo que no esté en la lista de Taca?',
        placeholder: 'Mapas, chat en tiempo real, SMS, IA, traducciones... o "nada más".',
        type: 'textarea',
        small: true,
      },
    ],
  },
  {
    id: 'contadores',
    title: 'Los contadores',
    subtitle: 'Paso 2 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Para cada servicio, Taca elige un proveedor y lo somete a la prescripción transparente: 5 filtros que todo proveedor debe pasar. Sin comisiones, sin intereses comerciales. Si no pasa los 5, no entra.',
    recommendationTitle: 'Los 5 filtros de prescripción transparente',
    recommendations: [
      { label: '1. Madurez', description: '+3 años operando, empresa sólida detrás.', highlight: true },
      { label: '2. Plan gratuito', description: 'Suficiente para MVP de 0-50 usuarios.' },
      { label: '3. Portabilidad', description: 'Export en formato estándar. Puedes irte sin drama.' },
      { label: '4. Documentación', description: 'Comprensible, en inglés como mínimo.' },
      { label: '5. Comunidad', description: 'Foros activos con respuestas recientes.' },
    ],
    questionsTitle: 'Tus preferencias (Taca las tendrá en cuenta)',
    questions: [
      {
        id: 'experiencia_tech',
        label: '¿Tienes experiencia con alguna tecnología o proveedor?',
        placeholder: 'Firebase, AWS, Stripe, Wordpress... o "ninguna, soy nuevo".',
        type: 'textarea',
      },
      {
        id: 'presupuesto_tech',
        label: '¿Cuánto puedes invertir en infraestructura al mes?',
        type: 'select',
        options: [
          { value: '0', label: '0€ — Solo planes gratuitos' },
          { value: '1_20', label: '1-20€/mes' },
          { value: '20_100', label: '20-100€/mes' },
          { value: '100_plus', label: '+100€/mes' },
        ],
      },
      {
        id: 'prioridad_tech',
        label: '¿Qué priorizas?',
        type: 'select',
        options: [
          { value: 'facilidad', label: 'Facilidad — Que sea simple' },
          { value: 'precio', label: 'Precio — Lo más barato' },
          { value: 'escalado', label: 'Escalado — Que aguante crecimiento' },
          { value: 'control', label: 'Control — Poder irme fácil si cambio' },
        ],
      },
    ],
  },
  {
    id: 'instalacion',
    title: 'La instalación',
    subtitle: 'Paso 3 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Taca montará el circuito completo de conexiones en tu Prompt Pack: de dónde salen los datos, por dónde pasan, dónde se guardan, cómo llegan al usuario. Cada proveedor con su etiqueta de dependencia (baja/media/alta). Confirma estos puntos del recorrido.',
    questionsTitle: 'El circuito',
    questions: [
      {
        id: 'flujo_datos',
        label: '¿De dónde vienen los datos principales?',
        placeholder: 'Los usuarios los meten, se importan de otro sistema, se generan solos...',
        type: 'textarea',
      },
      {
        id: 'flujo_usuario',
        label: '¿Cómo llega el usuario a tu producto?',
        type: 'select',
        options: [
          { value: 'url_directa', label: 'URL directa o buscador' },
          { value: 'app_store', label: 'App Store / Play Store' },
          { value: 'invitacion', label: 'Invitación de otro usuario' },
          { value: 'embebido', label: 'Dentro de otra plataforma' },
        ],
      },
      {
        id: 'offline',
        label: '¿Necesita funcionar sin conexión?',
        type: 'select',
        options: [
          { value: 'no', label: 'No, siempre online' },
          { value: 'parcial', label: 'Parcialmente' },
          { value: 'si', label: 'Sí, completa offline' },
        ],
      },
    ],
  },
  {
    id: 'recibo',
    title: 'El recibo',
    subtitle: 'Paso 4 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Taca calculará los costes reales con 3 escenarios en el Prompt Pack: arranque (~12€/año), 50 usuarios (~30€/mes), 500+ usuarios (~120€/mes). Cada proveedor con su coste desglosado y su nivel de dependencia. Necesito confirmar tu escala esperada.',
    questionsTitle: 'Escala y sensibilidad',
    questions: [
      {
        id: 'usuarios_esperados',
        label: '¿Cuántos usuarios esperas en los primeros 3 meses?',
        type: 'select',
        options: [
          { value: '1_10', label: '1-10 — Solo yo y testers' },
          { value: '10_50', label: '10-50 — Early adopters' },
          { value: '50_200', label: '50-200 — Primeros clientes reales' },
          { value: '200_plus', label: '+200 — Lanzamiento amplio' },
        ],
      },
      {
        id: 'dato_sensible',
        label: '¿Manejas datos financieros o de salud?',
        hint: 'Afecta al proveedor y al nivel de seguridad.',
        type: 'select',
        options: [
          { value: 'no', label: 'No — Datos básicos' },
          { value: 'financiero', label: 'Sí, financieros' },
          { value: 'salud', label: 'Sí, salud' },
          { value: 'ambos', label: 'Ambos' },
        ],
      },
      {
        id: 'notas_stack',
        label: '¿Algo que Taca deba saber?',
        placeholder: 'Requisitos especiales, preferencias, malas experiencias anteriores... o "nada".',
        type: 'textarea',
        small: true,
      },
    ],
  },
]
