// Área 5: Seguridad — Las llaves del negocio
// Taca analiza, propone y explica. El usuario confirma.
// Principio Cero, CVEB, 9 capas, backups 3-2-1 del Documento Maestro v3

export const SECURITY_STEPS = [
  {
    id: 'llavero',
    title: 'El llavero',
    subtitle: 'Paso 1 de 4 · Las llaves del negocio',
    tacaRecommendation: 'He extraído los roles de tu Brief y he montado la jerarquía de acceso. La seguridad es proporcional: más cerradura donde hay más que proteger, no la misma cerradura en todas las puertas. Confirma si los roles son correctos.',
    questionsTitle: 'Roles detectados — confirma o ajusta',
    questions: [
      {
        id: 'roles_confirmados',
        label: 'Taca ha detectado estos roles en tu Brief. ¿Son correctos?',
        hint: 'Ajusta, añade o quita lo que no aplique.',
        placeholder: 'Admin, usuario registrado, visitante, proveedor...',
        type: 'textarea',
      },
      {
        id: 'rol_mas_sensible',
        label: '¿Cuál de esos roles accede a lo más sensible?',
        hint: 'Taca asignará la protección más alta a este rol.',
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
    tacaRecommendation: 'Taca va a generar la matriz CVEB (Crear, Ver, Editar, Borrar) completa por pantalla y por rol. Cada acción lleva un candado proporcional. Necesito que confirmes los accesos principales.',
    questionsTitle: 'Quién ve qué — confirma',
    questions: [
      {
        id: 'pantallas_publicas',
        label: '¿Qué puede ver cualquiera SIN registrarse?',
        placeholder: 'Landing, precios, blog... o "nada, todo requiere login".',
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
        placeholder: 'Panel admin, gestión usuarios, métricas, config global...',
        type: 'textarea',
      },
      {
        id: 'quien_borra',
        label: '¿Quién puede borrar datos y cuáles?',
        hint: 'Mínimo privilegio: cada rol solo borra lo estrictamente necesario.',
        placeholder: 'Usuario borra los suyos, admin borra todo, nadie borra pagos...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'alarma',
    title: 'La alarma',
    subtitle: 'Paso 3 de 4 · Las llaves del negocio',
    tacaRecommendation: 'Taca ha montado las 9 capas de seguridad para tu proyecto. Las marcadas como MVP se activan desde el día 1. Las de Fase 2 se planifican ahora y se activan cuando crezcas. Confirma el nivel de sensibilidad de tus datos.',
    recommendationTitle: 'Las 9 capas de seguridad de Taca',
    recommendations: [
      { label: '1. Principio Cero', description: 'Ceguera de plataforma: no accede al contenido. Solo métricas de uso. Por diseño técnico, no por promesa.', highlight: true, badge: 'Diseño' },
      { label: '2. HTTPS', description: 'Tráfico cifrado. Obligatorio.', badge: 'MVP' },
      { label: '3. Autenticación', description: 'Firebase Auth o equivalente. Email + contraseña mínimo.', badge: 'MVP' },
      { label: '4. Reglas de BD', description: 'Cada usuario solo accede a sus datos. Reglas a nivel servidor.', badge: 'MVP' },
      { label: '5. Secretos fuera del código', description: 'Variables de entorno (.env). Nunca claves en el repositorio.', badge: 'MVP' },
      { label: '6. Repo privado', description: 'GitHub private. El código no es público.', badge: 'MVP' },
      { label: '7. Monitor de errores', description: 'Sentry o similar. Saber cuándo falla algo.', badge: 'Fase 2' },
      { label: '8. Cabeceras HTTP', description: 'Helmet.js. Protección contra ataques comunes.', badge: 'Fase 2' },
      { label: '9. Email verificado', description: 'Verificación al registrarse. Reduce spam.', badge: 'MVP' },
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
          { value: 'sensible', label: 'Sensible — Financieros, salud, identidad' },
        ],
      },
      {
        id: 'pais_usuarios',
        label: '¿Dónde están tus usuarios?',
        hint: 'Determina qué regulación aplica.',
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
    tacaRecommendation: 'Taca generará un plan de backups 3-2-1 (3 copias, 2 medios diferentes, 1 fuera de sitio), un plan de contingencia, y un checklist legal con plantillas adaptadas a tu regulación. Solo necesito saber cuánto te duele perder datos.',
    questionsTitle: 'Backups, contingencia y legal',
    questions: [
      {
        id: 'perdida_datos',
        label: '¿Qué pasaría si perdieras TODOS los datos mañana?',
        type: 'select',
        options: [
          { value: 'catastrofe', label: 'Catástrofe — El negocio se para' },
          { value: 'grave', label: 'Grave — Semanas de trabajo perdido' },
          { value: 'molesto', label: 'Molesto — Podría reconstruir rápido' },
          { value: 'indiferente', label: 'Indiferente — No hay datos que perder aún' },
        ],
      },
      {
        id: 'legal_sector',
        label: '¿Hay algo de tu sector que afecte a la seguridad?',
        hint: 'Taca lo incluirá en el checklist legal.',
        placeholder: 'Certificaciones, auditorías, normativa sectorial... o "nada especial".',
        type: 'textarea',
      },
      {
        id: 'acepta_seguridad',
        label: '¿Quieres que Taca genere el plan de seguridad completo?',
        type: 'confirm',
        options: [
          { value: 'completo', label: 'Sí, plan completo' },
          { value: 'basico', label: 'Solo lo básico del MVP' },
        ],
      },
    ],
  },
]
