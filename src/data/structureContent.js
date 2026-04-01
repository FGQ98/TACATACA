// Área 3: Estructura — El edificio
// Taca elige la arquitectura y la explica. El usuario confirma o pregunta.
// 8 opciones reales del Documento Maestro v3 + EVD_Nativo_vs_Web

export const STRUCTURE_STEPS = [
  {
    id: 'terreno',
    title: 'El terreno',
    subtitle: 'Paso 1 de 4 · El edificio',
    tacaRecommendation: 'He analizado tu Brief completo — tipo de proyecto, público, alcance y roles — y he elegido la arquitectura que mejor encaja. Te la explico y, si tienes dudas, me preguntas.',
    recommendationTitle: 'Taca ha elegido para tu proyecto',
    recommendations: [
      { label: 'HTML puro + localStorage', description: 'Herramienta personal, offline, cero costes. Calculadoras, trackers, herramientas internas.', badge: 'Más simple' },
      { label: 'HTML + SQLite', description: 'Herramienta personal con muchos datos locales. Sin internet.' },
      { label: 'HTML + JSON estático', description: 'Web informativa con datos precargados. Catálogos, portfolios.' },
      { label: 'HTML + Firebase', description: 'Web sencilla con datos en la nube y login. Pocas personas compartiendo datos.' },
      { label: 'SaaS ligero (Vite + React)', description: 'App web con login, BD y deploy automático. Usuarios con cuenta propia. Navegación instantánea.', badge: 'La más frecuente', highlight: true },
      { label: 'SaaS completo (Next.js / SSR)', description: 'App con SEO y páginas públicas indexables. Marketplaces, plataformas con parte pública importante.' },
      { label: 'Híbrido (Landing + App)', description: 'Web pública + app privada bajo el mismo dominio. Lo mejor de ambos mundos.' },
      { label: 'PWA / App nativa', description: 'App instalable o nativa en stores. Solo si móvil es imprescindible y web no basta.', badge: 'Más complejo' },
    ],
    questionsTitle: 'Tu confirmación',
    questions: [
      {
        id: 'acepta_arquitectura',
        label: '¿Estás de acuerdo con la elección de Taca?',
        type: 'confirm',
        options: [
          { value: 'si', label: 'De acuerdo' },
          { value: 'dudas', label: 'Tengo dudas' },
          { value: 'otra', label: 'Prefiero otra opción' },
        ],
      },
      {
        id: 'matiz_arquitectura',
        label: 'Si tienes dudas o prefieres otra opción, cuéntame aquí.',
        hint: 'Taca te explicará las implicaciones de cambiar.',
        placeholder: 'Mi duda es... / Prefiero X porque...',
        type: 'textarea',
        small: true,
      },
    ],
  },
  {
    id: 'cimientos',
    title: 'Los cimientos',
    subtitle: 'Paso 2 de 4 · El edificio',
    tacaRecommendation: 'Con la arquitectura decidida, voy a generar la estructura de carpetas. Necesito saber qué pantallas tendrá tu producto. No pienses en tecnología — piensa en qué VE cada persona que entra.',
    questionsTitle: 'Las pantallas de tu proyecto',
    questions: [
      {
        id: 'pantallas',
        label: '¿Qué pantallas necesita tu producto?',
        hint: 'Piensa en lo que ve cada rol: la primera pantalla al entrar, dónde gestiona sus cosas, dónde configura...',
        placeholder: 'Login\nDashboard (lo primero que veo al entrar)\nListado de...\nDetalle de...\nConfiguración\n...',
        type: 'textarea',
      },
      {
        id: 'que_toca_usuario',
        label: '¿Qué hace el usuario directamente vs qué se gestiona solo?',
        hint: 'Formularios, botones, uploads → el usuario. Cálculos, notificaciones, backups → el sistema.',
        placeholder: 'El usuario: crea, edita, comparte...\nEl sistema: calcula, notifica, respalda...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'plantas',
    title: 'Las plantas',
    subtitle: 'Paso 3 de 4 · El edificio',
    tacaRecommendation: 'Taca convierte cada pantalla en archivos y cada funcionalidad en un módulo. La regla: un archivo = una cosa. Si uno falla, los demás siguen intactos. Como compartimentos de un submarino. Necesito confirmar qué datos son críticos.',
    questionsTitle: 'Datos y conexiones',
    questions: [
      {
        id: 'datos_criticos',
        label: '¿Qué datos son los más importantes de tu proyecto?',
        hint: 'Lo que no puede fallar ni perderse. Taca ajustará la base de datos y los backups según esto.',
        placeholder: 'Datos de usuarios, pedidos, pagos, inventario, documentos...',
        type: 'textarea',
      },
      {
        id: 'integraciones',
        label: '¿Tu proyecto necesita conectarse con algo externo?',
        hint: 'Taca evaluará cada integración en el área de Stack.',
        placeholder: 'Pasarela de pagos, email, mapas, APIs, redes sociales... o "nada por ahora".',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'mapa',
    title: 'El mapa',
    subtitle: 'Paso 4 de 4 · El edificio',
    tacaRecommendation: 'Con todo lo anterior, Taca generará el mapa completo: archivos, carpetas, convenciones de nombrado y plan de crecimiento. Diseñado para crecer por adición, nunca por refactorización. Una última cosa: ¿cómo piensas crecer?',
    questionsTitle: 'Visión de crecimiento',
    questions: [
      {
        id: 'crecimiento',
        label: '¿Qué funcionalidades añadirías después del MVP?',
        hint: 'No es un compromiso. Taca diseña la estructura para que pueda crecer sin romper.',
        placeholder: 'Chat, notificaciones, panel admin, reportes, app móvil...',
        type: 'textarea',
      },
      {
        id: 'multiidioma',
        label: '¿Tu proyecto necesitará varios idiomas?',
        type: 'select',
        options: [
          { value: 'no', label: 'No, un solo idioma y mercado' },
          { value: 'futuro', label: 'En el futuro sí, ahora no' },
          { value: 'si', label: 'Sí, desde el principio' },
        ],
      },
    ],
  },
]
