// Contenido didáctico del Brief — La consulta médica
// Separado de la interfaz: cambiar una analogía no toca ningún componente
//
// REORIENTACIÓN v4 (abril 2026):
// TACATACA no valida ideas de negocio. No juzga si la idea es buena o mala.
// TACATACA ayuda a entender qué funcionalidades necesitas, qué experiencia
// de usuario quieres ofrecer, y las respuestas técnicas para conseguirlo.
// Filosofía: seguridad, robustez, eficiencia económica, capacidad de escala.
//
// Paso 1: El dolor del EMPRENDEDOR (no del cliente final)
// Paso 2: Qué hace tu producto (especificación técnica, no validación)
// Paso 3: El alcance (qué entra en el MVP)
// Paso 4: El usuario (roles y experiencia, para diseño y seguridad)
// Paso 5: El riesgo técnico (dependencias, regulación, puntos de fallo)

export const AREAS = [
  { id: 'brief', name: 'Brief', analogy: 'La consulta médica', icon: '1' },
  { id: 'research', name: 'Investigación', analogy: 'La exploración del barrio', icon: '2' },
  { id: 'structure', name: 'Estructura', analogy: 'El edificio', icon: '3' },
  { id: 'stack', name: 'Stack', analogy: 'Las instalaciones del local', icon: '4' },
  { id: 'security', name: 'Seguridad', analogy: 'Las llaves del negocio', icon: '5' },
  { id: 'generator', name: 'Generador', analogy: 'La mochila', icon: '6' },
]

export const BRIEF_STEPS = [
  {
    id: 'dolor',
    title: 'Tu punto de partida',
    subtitle: 'Paso 1 de 5 · La consulta médica',
    context: {
      text: 'Antes de hablar de tu proyecto, hablemos de ti. Un arquitecto no diseña igual para alguien que va a construir su primera casa que para alguien que ya ha hecho tres. Tus recursos, tu experiencia y tu tiempo condicionan qué plan tiene sentido para ti.',
    },
    example: {
      bad: '"Quiero una app con IA, blockchain y 20 pantallas. Presupuesto: ya veremos"',
      good: '"No sé programar, tengo 3 meses y puedo invertir unos 50€/mes en servicios. Necesito algo que funcione con lo mínimo"',
    },
    questions: [
      {
        id: 'experiencia_tech',
        label: '¿Cuál es tu experiencia con tecnología y desarrollo?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'ninguna', label: 'Ninguna — No he construido nada digital' },
          { value: 'usuario', label: 'Usuario — Uso apps y webs pero no las construyo' },
          { value: 'basica', label: 'Básica — He tocado alguna herramienta no-code o similar' },
          { value: 'media', label: 'Media — He participado en algún proyecto digital' },
          { value: 'alta', label: 'Alta — He construido o dirigido proyectos digitales' },
        ],
      },
      {
        id: 'presupuesto',
        label: '¿Cuánto puedes invertir mensualmente en tu proyecto (servidores, servicios, herramientas)?',
        hint: 'Sé realista. "Ya veré" es la respuesta que más proyectos hunde. Hay opciones buenas desde 0€.',
        placeholder: '',
        type: 'select',
        options: [
          { value: '0', label: '0€ — Solo herramientas gratuitas' },
          { value: '10-30', label: '10-30€/mes — Lo básico' },
          { value: '30-100', label: '30-100€/mes — Margen para servicios pro' },
          { value: '100+', label: '+100€/mes — Puedo invertir con criterio' },
          { value: 'no_se', label: 'No lo sé — Que Taca me ayude a calcular' },
        ],
      },
      {
        id: 'tiempo_dedicacion',
        label: '¿Cuánto tiempo puedes dedicar al proyecto por semana?',
        hint: 'Incluye todo: planificar, decidir, revisar, coordinar. No solo "programar" (que no harás tú).',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'pocas_horas', label: '2-5 horas/semana — Lo hago en ratos libres' },
          { value: 'media_jornada', label: '10-20 horas/semana — Le dedico tardes o mañanas' },
          { value: 'dedicacion_plena', label: '+20 horas/semana — Es mi actividad principal' },
        ],
      },
      {
        id: 'dolor_emprendedor',
        label: '¿Qué es lo que más te frena o preocupa para arrancar?',
        hint: 'No hay respuesta mala. Saber qué te frena nos ayuda a calibrar el plan.',
        placeholder: 'No sé por dónde empezar, me pierdo con la tecnología, no sé cuánto me va a costar, me da miedo elegir mal...',
        type: 'textarea',
      },
    ],
    validation: {
      label: '¿Has intentado hacer algo parecido antes? ¿Qué pasó?',
      placeholder: 'Si es tu primera vez, dilo. Si lo has intentado y no salió, cuéntame qué falló. Eso calibra el plan.',
    },
  },
  {
    id: 'modelo',
    title: 'Qué hace tu producto',
    subtitle: 'Paso 2 de 5 · La consulta médica',
    context: {
      text: 'No vamos a evaluar si tu idea es buena o mala — eso es asunto tuyo. Vamos a entender qué tiene que HACER tu producto. No es lo mismo una tienda que un taller. Esta decisión condiciona cuántas pantallas necesitas, qué servicios contratar y qué seguridad aplicar.',
    },
    example: {
      bad: '"Es como un Uber pero de otra cosa"',
      good: '"Es una herramienta donde organizadores de eventos suben presupuestos, asignan proveedores y ven costes en tiempo real"',
    },
    questions: [
      {
        id: 'que_hace',
        label: '¿Qué tiene que poder hacer tu producto? Describe las acciones principales.',
        hint: 'No nos importa el modelo de negocio ahora. Nos importa qué HACE: crear, buscar, comparar, reservar, gestionar...',
        placeholder: 'El usuario entra y puede: crear X, ver Y, gestionar Z, compartir W...',
        type: 'textarea',
      },
      {
        id: 'tipo_proyecto',
        label: '¿Qué tipo de producto se parece más a lo que imaginas?',
        hint: 'Esto condiciona la arquitectura técnica. Si no lo tienes claro, elige "No lo sé".',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'saas', label: 'SaaS — Plataforma con login, datos por usuario, uso continuo' },
          { value: 'marketplace', label: 'Marketplace — Conecta dos lados (quien ofrece y quien busca)' },
          { value: 'herramienta', label: 'Herramienta — Resuelve una tarea concreta, uso puntual' },
          { value: 'web', label: 'Web / Landing — Presencia online, información, captación' },
          { value: 'app', label: 'App móvil — Experiencia nativa en móvil' },
          { value: 'no_se', label: 'No lo sé — Que Taca recomiende según lo que hace' },
        ],
      },
      {
        id: 'cobra_usuarios',
        label: '¿Tu producto va a cobrar a los usuarios?',
        hint: 'Esto es una pregunta técnica: si cobras, necesitas pasarela de pago, gestión de planes, facturación. Si no, no.',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'si_suscripcion', label: 'Sí, con suscripción periódica' },
          { value: 'si_pago_unico', label: 'Sí, con pago único' },
          { value: 'si_freemium', label: 'Freemium — Gratis con opciones de pago' },
          { value: 'no', label: 'No, es gratuito' },
          { value: 'no_se', label: 'No lo sé todavía' },
        ],
      },
      {
        id: 'datos_terceros',
        label: '¿Tu producto maneja datos de otras personas (clientes, pacientes, alumnos...)?',
        hint: 'Si tu app guarda datos de terceros, la seguridad y la regulación cambian. Esto condiciona el área de Seguridad.',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'no', label: 'No — Solo mis propios datos' },
          { value: 'si_basicos', label: 'Sí — Datos básicos (nombre, email)' },
          { value: 'si_sensibles', label: 'Sí — Datos sensibles (salud, finanzas, menores)' },
          { value: 'no_se', label: 'No lo sé' },
        ],
      },
    ],
    validation: {
      label: 'Describe tu producto en una frase: quién entra, qué hace, y qué se lleva.',
      placeholder: 'Ejemplo: "Profesores entran, suben material, sus alumnos acceden y lo descargan". Simple y concreto.',
    },
    irreversible: true,
    irreversibleNote: 'El tipo de producto condiciona la estructura, el stack y la seguridad. Cambiar esto después implica replantear la arquitectura.',
  },
  {
    id: 'alcance',
    title: 'El alcance',
    subtitle: 'Paso 3 de 5 · La consulta médica',
    context: {
      text: 'El error clásico: querer construir un hospital cuando necesitas un botiquín. El MVP es la versión más pequeña de tu producto que funciona de verdad. No es el producto final — es el punto de partida con lo mínimo que tiene sentido.',
    },
    example: {
      bad: '"Necesito chat, pagos, IA, dashboard, notificaciones, app móvil y versión desktop"',
      good: '"Para empezar solo necesito que el usuario pueda crear un evento y compartirlo con proveedores"',
    },
    questions: [
      {
        id: 'funcionalidades',
        label: 'Lista todas las funcionalidades que imaginas para tu producto.',
        hint: 'Escribe todas, sin filtrar. El paso siguiente es priorizar.',
        placeholder: 'Login, dashboard, crear X, editar Y, buscar Z, exportar, compartir, notificar...',
        type: 'textarea',
      },
      {
        id: 'test_excel',
        label: '¿Cuáles de esas funcionalidades podrían resolverse con un Excel o un WhatsApp?',
        hint: 'El test del Excel no falla: si se puede hacer con una hoja de cálculo, no es MVP.',
        placeholder: 'Sé honesto. Las que sobrevivan a este test son las que importan...',
        type: 'textarea',
      },
      {
        id: 'verguenza_quitar',
        label: '¿Qué te da vergüenza quitar del MVP?',
        hint: 'Eso que te da vergüenza quitar probablemente es lo primero que sobra.',
        placeholder: 'Lo que crees imprescindible pero que quizás puede esperar...',
        type: 'textarea',
      },
    ],
    validation: {
      label: 'Si solo pudieras tener UNA pantalla, ¿cuál sería?',
      placeholder: 'Esa pantalla es tu MVP real. Todo lo demás es decoración en esta fase.',
    },
  },
  {
    id: 'usuario',
    title: 'El usuario',
    subtitle: 'Paso 4 de 5 · La consulta médica',
    context: {
      text: 'No todos los que entran a tu local hacen lo mismo. Hay quien mira, quien compra, quien gestiona el stock. Cada rol necesita ver cosas diferentes y poder hacer cosas diferentes. Definir esto ahora evita un lío monumental después y alimenta directamente la seguridad.',
    },
    example: {
      bad: '"Los usuarios usan la app"',
      good: '"El organizador crea eventos y ve costes. El proveedor confirma y sube presupuesto. El cliente solo compra entradas"',
    },
    questions: [
      {
        id: 'roles',
        label: '¿Qué tipos de usuario tendrá tu producto?',
        hint: 'Cada rol es un tipo de persona con permisos diferentes. Piensa en quién CREA, quién VE y quién GESTIONA.',
        placeholder: 'Administrador, cliente, proveedor, visitante...',
        type: 'textarea',
      },
      {
        id: 'caminos',
        label: '¿Qué camino sigue cada rol desde que entra hasta que consigue lo que busca?',
        hint: 'Esto define las pantallas que necesitas y cómo se conectan.',
        placeholder: 'Rol 1: entra → ve X → hace Y → consigue Z. Rol 2: entra → ve A → hace B...',
        type: 'textarea',
      },
      {
        id: 'dispositivo',
        label: '¿Desde qué dispositivo usará cada rol tu producto?',
        hint: '¿Hay algún rol que SOLO usa móvil? Esto condiciona el diseño responsive.',
        placeholder: 'Administrador: desktop. Clientes: móvil. Proveedores: ambos...',
        type: 'textarea',
      },
    ],
    validation: {
      label: '¿Cuál es el rol más importante? Si solo uno pudiera usar tu producto, ¿cuál sería?',
      placeholder: 'Ese rol es tu usuario principal. El MVP se diseña para ese rol primero.',
    },
  },
  {
    id: 'riesgo',
    title: 'El riesgo técnico',
    subtitle: 'Paso 5 de 5 · La consulta médica',
    context: {
      text: 'Todo proyecto tiene puntos de fallo. No hablamos de si la idea funcionará en el mercado — eso no lo sabemos. Hablamos de qué puede fallar técnicamente: dependencias de terceros, regulaciones que cumplir, piezas que si caen se llevan todo por delante.',
    },
    example: {
      bad: '"No hay riesgos, todo está controlado"',
      good: '"Dependo de la API de Google Maps para el 60% de las funcionalidades. Si cambian el precio, tengo un problema. Y manejo datos de salud, así que necesito cumplir con GDPR reforzado"',
    },
    questions: [
      {
        id: 'dependencias',
        label: '¿Tu proyecto depende de algún servicio externo para funcionar?',
        hint: 'APIs, plataformas de pago, servicios de email, mapas, IA... Cada dependencia es un riesgo técnico que Taca evaluará en Stack.',
        placeholder: 'Google Maps, Stripe, API de WhatsApp... o "no lo sé, que Taca lo evalúe"',
        type: 'textarea',
      },
      {
        id: 'regulacion',
        label: '¿Tu producto toca datos personales, financieros o de sectores regulados?',
        hint: 'Datos de salud, menores, pagos con tarjeta, sector financiero... Cada uno tiene requisitos técnicos específicos.',
        placeholder: 'Datos médicos, datos de menores, pagos online... o "no lo sé"',
        type: 'textarea',
      },
      {
        id: 'punto_fallo',
        label: '¿Hay alguna pieza que, si falla, se lleva todo por delante?',
        hint: 'Un único proveedor sin alternativa, un flujo que si no funciona el producto no sirve para nada...',
        placeholder: 'Si la pasarela de pago se cae, nadie puede comprar. Si el mapa no carga, la app no tiene sentido...',
        type: 'textarea',
      },
    ],
    validation: {
      label: '¿Hay algo que te preocupe y que no hayamos tocado en este Brief?',
      placeholder: 'Cualquier duda técnica, presupuestaria o de capacidad. Taca lo tendrá en cuenta en las siguientes áreas.',
    },
  },
]
