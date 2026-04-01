// Área 5: Seguridad — Las llaves del negocio
// Taca genera matriz de permisos y capas de seguridad desde el Brief.
// Fuente: Documento Maestro v3 — Principio Cero, CVEB, 9 capas, 3-2-1

export const SECURITY_STEPS = [
  {
    id: 'llavero',
    title: 'El llavero',
    subtitle: 'Paso 1 de 4 · Las llaves del negocio',
    tacaRecommendation: 'No es lo mismo la llave de la puerta principal que la de la caja fuerte. Taca ha extraído los roles de tu Brief y propone una jerarquía de acceso. La seguridad es proporcional: más cerradura donde hay más que proteger.',
    questionsTitle: 'Roles y acceso',
    questions: [
      {
        id: 'roles_confirmados',
        label: 'Confirma los roles de tu proyecto (Taca los extrajo del Brief)',
        hint: 'Ajusta, añade o quita lo que no aplique.',
        placeholder: 'Admin, usuario registrado, visitante, proveedor, editor...',
        type: 'textarea',
      },
      {
        id: 'rol_mas_sensible',
        label: '¿Qué rol accede a la información más sensible?',
        hint: 'Taca asignará el nivel más alto de protección a este rol.',
        placeholder: 'Normalmente el admin, pero a veces hay roles con acceso a datos financieros...',
        type: 'textarea',
      },
      {
        id: 'registro_abierto',
        label: '¿Cómo se registran los usuarios?',
        type: 'select',
        options: [
          { value: 'abierto', label: 'Abierto — Cualquiera se registra' },
          { value: 'invitacion', label: 'Por invitación — Solo accede quien invitas' },
          { value: 'mixto', label: 'Mixto — Algunos roles abiertos, otros por invitación' },
          { value: 'aprobacion', label: 'Con aprobación — Se registra pero alguien aprueba' },
        ],
      },
    ],
  },
  {
    id: 'cerraduras',
    title: 'Las cerraduras',
    subtitle: 'Paso 2 de 4 · Las llaves del negocio',
    tacaRecommendation: 'Taca va a generar la matriz CVEB (Crear, Ver, Editar, Borrar) por pantalla y por rol en el Prompt Pack. Necesito que me confirmes quién puede hacer qué con los datos más importantes.',
    questionsTitle: 'Permisos por pantalla',
    questions: [
      {
        id: 'pantallas_publicas',
        label: '¿Qué puede ver cualquiera SIN registrarse?',
        placeholder: 'Landing, página de precios, blog, documentación... o "nada, todo requiere login".',
        type: 'textarea',
      },
      {
        id: 'pantallas_privadas',
        label: '¿Qué ve el usuario registrado?',
        placeholder: 'Dashboard, perfil, sus proyectos, configuración...',
        type: 'textarea',
      },
      {
        id: 'pantallas_admin',
        label: '¿Qué ve solo el administrador?',
        placeholder: 'Panel admin, gestión de usuarios, métricas, configuración global...',
        type: 'textarea',
      },
      {
        id: 'quien_borra',
        label: '¿Quién puede borrar datos y cuáles?',
        hint: 'Regla de mínimo privilegio: cada rol solo puede borrar lo estrictamente necesario.',
        placeholder: 'El usuario borra los suyos, el admin borra todo, nadie borra pagos...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'alarma',
    title: 'La alarma',
    subtitle: 'Paso 3 de 4 · Las llaves del negocio',
    tacaRecommendation: 'Más allá de quién entra y qué ve, hay 9 capas de protección. No todas desde el día 1, pero Taca necesita saber cuáles activar ahora y cuáles planificar.',
    recommendationTitle: 'Las 9 capas de seguridad',
    recommendations: [
      { label: '1. Principio Cero', description: 'Ceguera de plataforma: no accede al contenido de las cuentas. Solo métricas de uso. Por diseño técnico, no por promesa.', highlight: true, badge: 'Diseño' },
      { label: '2. HTTPS', description: 'Tráfico cifrado entre usuario y servidor. Obligatorio.', badge: 'MVP' },
      { label: '3. Autenticación', description: 'Firebase Auth o equivalente. Email + contraseña como mínimo.', badge: 'MVP' },
      { label: '4. Reglas de base de datos', description: 'Firestore Security Rules o equivalente. Cada usuario solo accede a sus datos.', badge: 'MVP' },
      { label: '5. Secretos fuera del código', description: 'Variables de entorno (.env) fuera del repositorio. Nunca claves en el código.', badge: 'MVP' },
      { label: '6. Repositorio privado', description: 'GitHub private. El código no es público.', badge: 'MVP' },
      { label: '7. Monitorización de errores', description: 'Sentry o similar. Saber cuándo falla algo antes que el usuario.', badge: 'Fase 2' },
      { label: '8. Cabeceras HTTP', description: 'Helmet.js o equivalente. Protección contra ataques comunes.', badge: 'Fase 2' },
      { label: '9. Email verificado', description: 'Verificación de email al registrarse. Reduce spam y cuentas falsas.', badge: 'MVP' },
    ],
    questionsTitle: 'Nivel de sensibilidad',
    questions: [
      {
        id: 'datos_personales',
        label: '¿Qué nivel de datos personales almacenas?',
        type: 'select',
        options: [
          { value: 'minimo', label: 'Mínimo — Solo email para login' },
          { value: 'moderado', label: 'Moderado — Nombre, email, preferencias' },
          { value: 'extenso', label: 'Extenso — Dirección, teléfono, documentos' },
          { value: 'sensible', label: 'Sensible — Datos financieros, salud, identidad' },
        ],
      },
      {
        id: 'pais_usuarios',
        label: '¿Dónde están tus usuarios?',
        hint: 'Esto determina qué regulación aplica (GDPR, LOPDGDD, etc.).',
        type: 'select',
        options: [
          { value: 'espana', label: 'España — GDPR + LOPDGDD' },
          { value: 'europa', label: 'Europa — GDPR' },
          { value: 'global', label: 'Global — Múltiples regulaciones' },
          { value: 'no_se', label: 'No lo sé todavía' },
        ],
      },
    ],
  },
  {
    id: 'seguro',
    title: 'El seguro',
    subtitle: 'Paso 4 de 4 · Las llaves del negocio',
    tacaRecommendation: 'Taca generará un plan de backups 3-2-1 (3 copias, 2 medios, 1 fuera de sitio) adaptado a tu proyecto, un plan de contingencia, y un checklist legal con plantillas. Necesito saber cuánto te duele perder datos.',
    questionsTitle: 'Backups, contingencia y legal',
    questions: [
      {
        id: 'perdida_datos',
        label: '¿Qué pasaría si perdieras TODOS los datos mañana?',
        type: 'select',
        options: [
          { value: 'catastrofe', label: 'Catástrofe — El negocio se para' },
          { value: 'grave', label: 'Grave — Semanas de trabajo perdido' },
          { value: 'molesto', label: 'Molesto — Podría reconstruir relativamente rápido' },
          { value: 'indiferente', label: 'Indiferente — No hay datos que perder aún' },
        ],
      },
      {
        id: 'legal_sector',
        label: '¿Hay algo específico de tu sector que afecte a la seguridad?',
        hint: 'Taca incluirá esto en el checklist legal del Prompt Pack.',
        placeholder: 'Certificaciones, auditorías, normativa sectorial, contratos con terceros... o "nada especial".',
        type: 'textarea',
      },
      {
        id: 'confirma_seguridad',
        label: '¿Quieres que Taca genere la matriz CVEB completa y el plan de seguridad en el Prompt Pack?',
        type: 'confirm',
        options: [
          { value: 'si', label: 'Sí, genera todo' },
          { value: 'basico', label: 'Solo lo básico del MVP' },
        ],
      },
    ],
  },
]
