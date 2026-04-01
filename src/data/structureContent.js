// Área 3: Estructura — El edificio
// Taca analiza el Brief y recomienda. El usuario confirma.
// Fuente: Documento Maestro v3 + EVD_Nativo_vs_Web_HTML_vs_React

export const STRUCTURE_STEPS = [
  {
    id: 'terreno',
    title: 'El terreno',
    subtitle: 'Paso 1 de 4 · El edificio',
    tacaRecommendation: 'Basándome en tu Brief (tipo de proyecto, público y alcance), he analizado qué tipo de edificio necesitas. No todos los proyectos necesitan un rascacielos — a veces un local bien hecho es mejor.',
    recommendationTitle: 'Opciones de arquitectura para tu proyecto',
    recommendations: [
      { label: 'HTML puro + localStorage', description: 'Herramienta personal sin servidor. Funciona offline. Cero costes. Para calculadoras, trackers, herramientas internas.', badge: 'Más simple' },
      { label: 'HTML + base de datos local (SQLite)', description: 'Como HTML puro pero con más capacidad de datos. Para herramientas que manejan muchos registros sin necesitar internet.' },
      { label: 'HTML + JSON estático', description: 'Web informativa con datos precargados. Para catálogos, portfolios, documentación.' },
      { label: 'HTML + Firebase', description: 'Web sencilla con datos en la nube. Login y persistencia sin backend propio. Para herramientas compartidas entre pocas personas.' },
      { label: 'SaaS ligero (Vite + React)', description: 'Aplicación web con login, base de datos y despliegue automático. Navegación instantánea, componentes reutilizables. Para productos con usuarios que necesitan cuenta propia.', badge: 'Recomendado si tienes usuarios', highlight: true },
      { label: 'SaaS completo (Next.js / SSR)', description: 'Como el ligero pero con SEO excelente y páginas públicas indexables. Para marketplaces o plataformas con parte pública + parte privada.' },
      { label: 'Híbrido (Landing + App)', description: 'Web pública (HTML/Astro) + aplicación privada (React). Dos mundos conectados bajo el mismo dominio. Lo mejor de ambos.' },
      { label: 'PWA / App nativa', description: 'App web que se instala como nativa (PWA) o aplicación real en stores (React Native/Flutter). Solo si el móvil es imprescindible y la web no basta.', badge: 'Más complejo' },
    ],
    questionsTitle: 'Tu decisión',
    questions: [
      {
        id: 'tipo_tech',
        label: '¿Cuál encaja mejor con tu proyecto?',
        hint: 'Si no estás seguro, elige "No lo sé" y Taca decidirá según tu Brief.',
        type: 'select',
        options: [
          { value: 'html_puro', label: 'HTML puro + localStorage' },
          { value: 'html_sqlite', label: 'HTML + SQLite' },
          { value: 'html_json', label: 'HTML + JSON estático' },
          { value: 'html_firebase', label: 'HTML + Firebase' },
          { value: 'saas_ligero', label: 'SaaS ligero (Vite + React)' },
          { value: 'saas_completo', label: 'SaaS completo (Next.js / SSR)' },
          { value: 'hibrido', label: 'Híbrido (Landing + App)' },
          { value: 'pwa_nativa', label: 'PWA / App nativa' },
          { value: 'no_se', label: 'No lo sé — Que Taca decida según mi Brief' },
        ],
      },
      {
        id: 'razon_eleccion',
        label: '¿Algún motivo especial para tu elección? (opcional)',
        placeholder: 'Si elegiste algo diferente a la recomendación, cuéntame por qué...',
        type: 'textarea',
        small: true,
      },
    ],
  },
  {
    id: 'cimientos',
    title: 'Los cimientos',
    subtitle: 'Paso 2 de 4 · El edificio',
    tacaRecommendation: 'Con la arquitectura elegida, Taca propondrá la estructura de carpetas. No necesitas entender cada carpeta — solo saber que cada una tiene una función. Es como las plantas de un edificio: no necesitas saber de fontanería para vivir en un piso.',
    questionsTitle: 'Las pantallas de tu proyecto',
    questions: [
      {
        id: 'pantallas',
        label: '¿Qué pantallas necesita tu producto?',
        hint: 'Piensa en qué ve cada rol de usuario: Login, Dashboard, Listado, Detalle, Configuración... Taca generará la estructura desde esto.',
        placeholder: 'Login\nDashboard\nListado de...\nDetalle de...\nConfiguración\n...',
        type: 'textarea',
      },
      {
        id: 'que_toca_usuario',
        label: '¿Qué parte del proyecto tocaría el usuario final directamente?',
        hint: 'Formularios, botones, uploads... vs partes que se gestionan solas.',
        placeholder: 'El usuario crea, edita, comparte... El sistema calcula, notifica, respalda...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'plantas',
    title: 'Las plantas',
    subtitle: 'Paso 3 de 4 · El edificio',
    tacaRecommendation: 'Cada pantalla se convierte en archivos. Cada funcionalidad en un módulo. La regla: un archivo = una cosa. Si falla, el impacto se queda dentro de sus paredes. Como los compartimentos de un submarino: si uno se inunda, los demás siguen secos.',
    questionsTitle: 'Datos y conexiones',
    questions: [
      {
        id: 'datos_criticos',
        label: '¿Qué datos son los más importantes de tu proyecto?',
        hint: 'Lo que no puede fallar ni perderse. Taca ajustará la estructura de base de datos según esto.',
        placeholder: 'Datos de usuarios, pedidos, pagos, inventario, documentos...',
        type: 'textarea',
      },
      {
        id: 'integraciones',
        label: '¿Tu proyecto necesita conectarse con algo externo?',
        hint: 'Taca evaluará cada integración en el área de Stack.',
        placeholder: 'Pasarela de pagos, email, mapas, APIs, redes sociales... o "ninguna por ahora".',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'mapa',
    title: 'El mapa',
    subtitle: 'Paso 4 de 4 · El edificio',
    tacaRecommendation: 'Con toda la información, Taca generará el mapa completo en el Prompt Pack: archivos, carpetas, convenciones de nombrado, y plan de crecimiento sin reorganización. Modularidad: crecer por adición, no por refactorización.',
    questionsTitle: 'Visión de crecimiento',
    questions: [
      {
        id: 'crecimiento',
        label: '¿Qué funcionalidades añadirías después del MVP?',
        hint: 'Taca diseñará la estructura para que pueda crecer sin romper.',
        placeholder: 'Chat, notificaciones, panel admin, reportes, integraciones, app móvil...',
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
      {
        id: 'confirma_estructura',
        label: '¿Quieres que Taca genere la estructura completa en el Prompt Pack?',
        type: 'confirm',
        options: [
          { value: 'si', label: 'Sí, genera estructura completa' },
          { value: 'tengo_propia', label: 'Ya tengo una estructura propia' },
        ],
      },
    ],
  },
]
