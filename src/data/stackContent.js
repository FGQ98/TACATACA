// Área 4: Stack — Las instalaciones del local
// Taca recomienda proveedores con prescripción transparente.
// Fuente: Documento Maestro v3 — 5 preguntas + 5 filtros + nivel dependencia

export const STACK_STEPS = [
  {
    id: 'acometidas',
    title: 'Las acometidas',
    subtitle: 'Paso 1 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Cuando abres un local, no fabricas la electricidad ni el agua. Contratas proveedores. Taca ha analizado tu Brief y estas son las instalaciones que tu proyecto necesita. Confirma cuáles aplican.',
    recommendationTitle: 'Servicios que tu proyecto necesita',
    recommendations: [
      { label: 'Base de datos', description: 'Dónde viven los datos de tus usuarios y tu negocio. Imprescindible si guardas cualquier tipo de información.', badge: 'Probable', highlight: true },
      { label: 'Autenticación', description: 'Login y registro de usuarios. Quién entra y con qué credenciales.', badge: 'Probable', highlight: true },
      { label: 'Hosting / Deploy', description: 'Dónde vive tu proyecto en internet. Cómo llegan los usuarios a él.', badge: 'Siempre', highlight: true },
      { label: 'Control de versiones', description: 'El historial completo de tu código. Cada cambio registrado y reversible.', badge: 'Siempre', highlight: true },
      { label: 'Email transaccional', description: 'Confirmaciones, recuperación de contraseña, notificaciones al usuario.' },
      { label: 'Pasarela de pagos', description: 'Cobrar a los usuarios. Suscripciones, pagos puntuales, facturación.' },
      { label: 'Almacenamiento de archivos', description: 'Subir y guardar imágenes, PDFs, documentos de usuario.' },
      { label: 'Monitorización de errores', description: 'Saber cuándo algo falla antes de que el usuario te lo diga.' },
    ],
    questionsTitle: '¿Qué necesita tu proyecto?',
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
        label: '¿Los usuarios subirán archivos (imágenes, documentos)?',
        type: 'select',
        options: [
          { value: 'si', label: 'Sí' },
          { value: 'futuro', label: 'En el futuro' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'servicios_extra',
        label: '¿Necesitas algún servicio que no esté en la lista?',
        placeholder: 'Mapas, geolocalización, chat en tiempo real, SMS, IA, traducciones...',
        type: 'textarea',
        small: true,
      },
    ],
  },
  {
    id: 'contadores',
    title: 'Los contadores',
    subtitle: 'Paso 2 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Para cada servicio, Taca aplica la prescripción transparente: 5 preguntas que todo proveedor debe responder. Sin comisiones, sin intereses comerciales. Si un proveedor no puede responder estas 5 preguntas, no merece tu confianza.',
    recommendationTitle: 'Los 5 filtros de Taca para cada proveedor',
    recommendations: [
      { label: 'Madurez', description: '¿Lleva +3 años operando con empresa sólida detrás?', highlight: true },
      { label: 'Plan gratuito', description: '¿Tiene plan gratis suficiente para MVP de 0-50 usuarios?' },
      { label: 'Portabilidad', description: '¿Puedes exportar tus datos e irte fácilmente?' },
      { label: 'Documentación', description: '¿Tiene documentación comprensible en inglés como mínimo?' },
      { label: 'Comunidad', description: '¿Tiene foros activos con respuestas recientes?' },
    ],
    questionsTitle: 'Tus preferencias',
    questions: [
      {
        id: 'experiencia_tech',
        label: '¿Tienes experiencia con alguna tecnología o proveedor?',
        placeholder: 'Firebase, AWS, Stripe, Wordpress, Shopify... o "ninguna, soy nuevo"',
        type: 'textarea',
      },
      {
        id: 'presupuesto_tech',
        label: '¿Cuánto puedes invertir en infraestructura al mes?',
        type: 'select',
        options: [
          { value: '0', label: '0€ — Solo planes gratuitos' },
          { value: '1_20', label: '1-20€/mes — Lo básico' },
          { value: '20_100', label: '20-100€/mes — Hay margen' },
          { value: '100_plus', label: '+100€/mes — Sin restricción' },
        ],
      },
      {
        id: 'prioridad_tech',
        label: '¿Qué priorizas?',
        type: 'select',
        options: [
          { value: 'facilidad', label: 'Facilidad — Que sea simple de configurar' },
          { value: 'precio', label: 'Precio — Lo más barato posible' },
          { value: 'escalado', label: 'Escalado — Que aguante si crece mucho' },
          { value: 'control', label: 'Control — Que pueda moverme fácil si cambio' },
        ],
      },
    ],
  },
  {
    id: 'instalacion',
    title: 'La instalación',
    subtitle: 'Paso 3 de 4 · Las instalaciones del local',
    tacaRecommendation: 'Taca generará el circuito completo de conexiones en el Prompt Pack: de dónde salen los datos, por dónde pasan, dónde se guardan, cómo llegan al usuario. Necesito confirmar algunos puntos del recorrido.',
    questionsTitle: 'El circuito de tu proyecto',
    questions: [
      {
        id: 'flujo_datos',
        label: '¿De dónde vienen los datos principales?',
        hint: 'Taca necesita saber esto para diseñar el circuito de conexiones.',
        placeholder: 'Los usuarios los meten, se importan de otro sistema, se generan automáticamente...',
        type: 'textarea',
      },
      {
        id: 'flujo_usuario',
        label: '¿Cómo llega el usuario a tu producto?',
        type: 'select',
        options: [
          { value: 'url_directa', label: 'URL directa — Escribe la dirección o busca en Google' },
          { value: 'app_store', label: 'App Store — Descarga la app' },
          { value: 'invitacion', label: 'Invitación — Alguien le manda un enlace' },
          { value: 'embebido', label: 'Embebido — Dentro de otra plataforma' },
        ],
      },
      {
        id: 'offline',
        label: '¿Tu producto necesita funcionar sin conexión?',
        type: 'select',
        options: [
          { value: 'no', label: 'No, siempre online' },
          { value: 'parcial', label: 'Parcialmente — consultar datos offline' },
          { value: 'si', label: 'Sí, funcionalidad completa offline' },
        ],
      },
    ],
  },
  {
    id: 'recibo',
    title: 'El recibo',
    subtitle: 'Paso 4 de 4 · Las instalaciones del local',
    tacaRecommendation: 'La buena noticia: empezar un proyecto digital hoy cuesta una fracción de lo que costaba hace 5 años. Taca calculará los costes reales en el Prompt Pack con 3 escenarios: hoy, 50 usuarios, 500+ usuarios. Cada proveedor con su etiqueta de dependencia (baja/media/alta).',
    questionsTitle: 'Escala y datos sensibles',
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
        label: '¿Tu proyecto maneja datos financieros o de salud?',
        hint: 'Esto afecta al nivel de seguridad y al tipo de proveedor que Taca recomendará.',
        type: 'select',
        options: [
          { value: 'no', label: 'No — Datos básicos de perfil y uso' },
          { value: 'financiero', label: 'Sí, datos financieros' },
          { value: 'salud', label: 'Sí, datos de salud' },
          { value: 'ambos', label: 'Ambos' },
        ],
      },
      {
        id: 'notas_stack',
        label: '¿Algo más que Taca deba saber sobre tu infraestructura?',
        placeholder: 'Requisitos especiales, preferencias, experiencias pasadas...',
        type: 'textarea',
        small: true,
      },
    ],
  },
]
