// Área 5: Seguridad — Las llaves del negocio
// No es lo mismo la llave de la puerta que la de la caja fuerte.

export const SECURITY_STEPS = [
  {
    id: 'puertas',
    title: 'Las puertas',
    subtitle: 'Paso 1 de 3 · Las llaves del negocio',
    context: 'No es lo mismo la llave de la puerta principal que la de la caja fuerte. La seguridad es proporcional: más cerradura donde hay más que proteger. Definir quién entra y qué puede hacer es el primer paso.',
    questions: [
      {
        id: 'roles_confirmados',
        label: 'Confirma los roles de tu proyecto (los definiste en el Brief)',
        placeholder: 'Admin, usuario registrado, visitante, proveedor... Copia o ajusta lo que pusiste en el Brief.',
        type: 'textarea',
      },
      {
        id: 'rol_mas_sensible',
        label: '¿Qué rol tiene acceso a la información más sensible?',
        placeholder: 'Normalmente el admin, pero a veces hay roles con acceso a datos financieros o personales...',
        type: 'textarea',
      },
      {
        id: 'registro_abierto',
        label: '¿Cualquiera puede registrarse o es por invitación?',
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
    subtitle: 'Paso 2 de 3 · Las llaves del negocio',
    context: 'Cada pantalla de tu proyecto maneja datos diferentes. Un dashboard público no necesita la misma cerradura que una pantalla de pagos. Vamos a asignar permisos por pantalla y por rol.',
    questions: [
      {
        id: 'pantallas_publicas',
        label: '¿Qué pantallas puede ver cualquiera SIN registrarse?',
        placeholder: 'Landing, página de precios, blog, documentación pública...',
        type: 'textarea',
      },
      {
        id: 'pantallas_privadas',
        label: '¿Qué pantallas solo ve el usuario registrado?',
        placeholder: 'Dashboard, perfil, mis proyectos, configuración...',
        type: 'textarea',
      },
      {
        id: 'pantallas_admin',
        label: '¿Qué pantallas solo ve el administrador?',
        placeholder: 'Panel admin, gestión de usuarios, métricas, configuración global...',
        type: 'textarea',
      },
      {
        id: 'datos_borrar',
        label: '¿Qué datos puede borrar cada rol?',
        placeholder: 'El usuario borra los suyos, el admin borra todo, nadie borra pagos...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'alarma',
    title: 'La alarma',
    subtitle: 'Paso 3 de 3 · Las llaves del negocio',
    context: 'Más allá de quién entra y qué ve, hay capas de protección que todo proyecto necesita. No todas desde el día 1 — pero sí saber cuáles y cuándo activarlas.',
    questions: [
      {
        id: 'datos_personales',
        label: '¿Tu proyecto almacena datos personales (nombre, email, dirección)?',
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
        type: 'select',
        options: [
          { value: 'espana', label: 'España — GDPR + LOPDGDD' },
          { value: 'europa', label: 'Europa — GDPR' },
          { value: 'global', label: 'Global — Múltiples regulaciones' },
          { value: 'no_se', label: 'No lo sé todavía' },
        ],
      },
      {
        id: 'backup_importancia',
        label: '¿Qué pasaría si perdieras TODOS los datos de tu proyecto mañana?',
        type: 'select',
        options: [
          { value: 'catastrofe', label: 'Catástrofe — El negocio se para' },
          { value: 'grave', label: 'Grave — Perdería semanas de trabajo' },
          { value: 'molesto', label: 'Molesto — Podría reconstruir relativamente rápido' },
          { value: 'indiferente', label: 'Indiferente — No hay datos que perder aún' },
        ],
      },
      {
        id: 'legal_notas',
        label: '¿Hay algo específico de tu sector que afecte a la seguridad?',
        placeholder: 'Certificaciones, auditorías, normativa sectorial, contratos con terceros...',
        type: 'textarea',
      },
    ],
  },
]
