// Contenido didáctico del Brief — La consulta médica
// Separado de la interfaz: cambiar una analogía no toca ningún componente

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
    title: 'El dolor',
    subtitle: 'Paso 1 de 5 · La consulta médica',
    context: {
      text: 'Imagina que vas al médico. No le dices "quiero pastillas azules". Le describes qué te duele, desde cuándo, y qué has probado. Aquí es lo mismo: cuéntame el problema que quieres resolver, no la solución que imaginas.',
    },
    example: {
      bad: '"Quiero una app para gestionar eventos"',
      good: '"Mis clientes pierden 3h/semana coordinando proveedores por WhatsApp y no tienen visibilidad de costes"',
    },
    questions: [
      {
        id: 'problema_actual',
        label: '¿Cómo resuelve HOY tu cliente este problema SIN tu producto?',
        placeholder: 'Describe la situación actual: qué herramientas usa, qué proceso sigue, dónde falla...',
        type: 'textarea',
      },
      {
        id: 'coste_problema',
        label: '¿Cuánto pierde por semana (tiempo, dinero, clientes)?',
        placeholder: 'Sé concreto: horas perdidas, euros, oportunidades que se escapan...',
        type: 'textarea',
      },
      {
        id: 'conversaciones',
        label: '¿Has hablado con al menos 3 personas que tengan este problema?',
        placeholder: 'Cuéntame con quién has hablado y qué te dijeron...',
        type: 'textarea',
      },
    ],
    validation: {
      label: 'Si mañana desapareciera tu proyecto, ¿qué haría tu cliente?',
      placeholder: '¿Volvería a lo de antes sin problema o tendría un problema real?',
    },
  },
  {
    id: 'modelo',
    title: 'El modelo',
    subtitle: 'Paso 2 de 5 · La consulta médica',
    context: {
      text: 'Ahora que sabemos qué duele, toca ponerle nombre al tratamiento. ¿Es una tienda, una herramienta, un servicio? No es lo mismo una aspirina que una operación. Esta decisión condiciona todo lo que viene después.',
    },
    example: {
      bad: '"Es como un Uber pero de otra cosa"',
      good: '"Es una herramienta SaaS donde empresas de eventos gestionan proveedores pagando una cuota mensual"',
    },
    questions: [
      {
        id: 'tipo_proyecto',
        label: '¿Qué tipo de proyecto es?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'saas', label: 'SaaS — Software como servicio (cuota recurrente)' },
          { value: 'marketplace', label: 'Marketplace — Conecta oferta y demanda' },
          { value: 'herramienta', label: 'Herramienta — Resuelve una tarea concreta' },
          { value: 'web', label: 'Web / Landing — Presencia online' },
          { value: 'app', label: 'App móvil — Experiencia nativa' },
        ],
      },
      {
        id: 'publico',
        label: '¿Quién paga?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'b2b', label: 'Empresas (B2B) — Tu cliente es otra empresa' },
          { value: 'b2c', label: 'Consumidores (B2C) — Tu cliente es persona final' },
          { value: 'b2b2c', label: 'Ambos (B2B2C) — Empresas que sirven a consumidores' },
        ],
      },
      {
        id: 'modelo_descripcion',
        label: 'Describe tu modelo en una frase: quién usa qué y cómo paga.',
        placeholder: 'Ejemplo: "Organizadores de eventos contratan el servicio mensual para coordinar proveedores"',
        type: 'textarea',
      },
    ],
    validation: {
      label: 'Si tu modelo fuera un local físico, ¿qué tipo de local sería?',
      placeholder: 'Tienda, consultoría, mercadillo, gimnasio, taller... Esto revela cómo funciona tu negocio.',
    },
    irreversible: true,
    irreversibleNote: 'El tipo de proyecto y el público condicionan la estructura, el stack y la seguridad. Cambiar esto después implica replantear casi todo.',
  },
  {
    id: 'alcance',
    title: 'El alcance',
    subtitle: 'Paso 3 de 5 · La consulta médica',
    context: {
      text: 'El error clásico: querer construir un hospital cuando necesitas un botiquín. El MVP es la versión más pequeña que demuestra que tu idea funciona. No es el producto final — es la prueba de que merece existir.',
    },
    example: {
      bad: '"Necesito chat, pagos, IA, dashboard, notificaciones, app móvil y versión desktop"',
      good: '"Para validar solo necesito que el usuario pueda crear un evento y compartirlo con proveedores"',
    },
    questions: [
      {
        id: 'funcionalidades',
        label: 'Lista todas las funcionalidades que imaginas para tu producto.',
        placeholder: 'Escribe todas, sin filtrar. Ya las priorizaremos después...',
        type: 'textarea',
      },
      {
        id: 'test_excel',
        label: '¿Cuáles de esas funcionalidades podrían resolverse con un Excel o un WhatsApp?',
        placeholder: 'Sé honesto. El test del Excel no falla: si se puede hacer con una hoja de cálculo, no es MVP...',
        type: 'textarea',
      },
      {
        id: 'verguenza_quitar',
        label: '¿Qué te da vergüenza quitar del MVP?',
        placeholder: 'Eso que te da vergüenza quitar probablemente es lo primero que sobra...',
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
      text: 'No todos los que entran a tu local hacen lo mismo. Hay quien mira, quien compra, quien gestiona el stock. Cada uno necesita ver cosas diferentes y hacer cosas diferentes. Definir esto ahora evita un lío monumental después.',
    },
    example: {
      bad: '"Los usuarios usan la app"',
      good: '"El organizador crea eventos, el proveedor confirma disponibilidad y sube presupuesto, el cliente compra entradas"',
    },
    questions: [
      {
        id: 'roles',
        label: '¿Qué tipos de usuario tendrá tu producto?',
        placeholder: 'Administrador, cliente, proveedor, visitante... Cada rol es un tipo de persona con permisos diferentes.',
        type: 'textarea',
      },
      {
        id: 'caminos',
        label: '¿Qué camino sigue cada rol desde que entra hasta que consigue lo que busca?',
        placeholder: 'Rol 1: entra → ve X → hace Y → consigue Z. Rol 2: entra → ve A → hace B...',
        type: 'textarea',
      },
      {
        id: 'dispositivo',
        label: '¿Desde qué dispositivo usará cada rol tu producto?',
        placeholder: '¿Móvil, desktop, tablet? ¿Hay algún rol que SOLO usa móvil? Esto afecta al diseño.',
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
    title: 'El riesgo',
    subtitle: 'Paso 5 de 5 · La consulta médica',
    context: {
      text: 'Taca ha analizado tus respuestas anteriores y ha detectado posibles riesgos para tu proyecto. Revisa lo que ha encontrado, confirma si es correcto, y añade lo que Taca no pueda saber.',
    },
    example: {
      bad: '"No hay riesgos, mi idea es buena"',
      good: '"Dependo de la API de Google Maps y si cambian precios me afecta al 60% de la funcionalidad. Mi competidor principal tiene 10x mi presupuesto."',
    },
    questions: [
      {
        id: 'dependencias',
        label: 'Taca pregunta: ¿Tu proyecto depende de algún servicio externo para funcionar?',
        placeholder: 'APIs, plataformas de pago, proveedores de datos, herramientas de terceros... Si no lo sabes, escribe "no lo sé" y Taca lo evaluará en el área de Stack.',
        type: 'textarea',
      },
      {
        id: 'regulacion',
        label: 'Taca pregunta: ¿Sabes si hay alguna regulación que afecte a tu proyecto?',
        placeholder: 'GDPR, protección de datos, licencias sectoriales... Si no lo sabes, escribe "no lo sé" y Taca lo analizará en Seguridad.',
        type: 'textarea',
      },
      {
        id: 'confianza',
        label: 'Del 1 al 5, ¿cuánta confianza tienes en que tu MVP funcione en 3 meses?',
        placeholder: '',
        type: 'select',
        options: [
          { value: '1', label: '1 — Muy poca, tengo muchas dudas' },
          { value: '2', label: '2 — Poca, hay bastantes incógnitas' },
          { value: '3', label: '3 — Media, algunas cosas claras y otras no' },
          { value: '4', label: '4 — Alta, tengo el plan bastante claro' },
          { value: '5', label: '5 — Muy alta, sé exactamente qué hacer' },
        ],
      },
    ],
    validation: {
      label: '¿Hay algo que te preocupe y que no hayamos tocado en este Brief?',
      placeholder: 'Cualquier duda, miedo o intuición. Taca lo tendrá en cuenta en las siguientes áreas.',
    },
  },
]
