// Área 2: Investigación — La exploración del barrio
// Taca investiga basándose en el Brief. El usuario confirma o matiza.

export const RESEARCH_STEPS = [
  {
    id: 'vecinos',
    title: 'Los vecinos',
    subtitle: 'Paso 1 de 4 · La exploración del barrio',
    tacaRecommendation: 'He analizado tu Brief y necesito que me ayudes a completar el mapa del barrio. Voy a hacerte preguntas sencillas sobre lo que ya conoces — yo me encargo de estructurarlo.',
    questionsTitle: '¿Qué conoces del barrio?',
    questions: [
      {
        id: 'conoces_competidor',
        label: '¿Conoces a alguien que haga algo parecido a tu proyecto?',
        placeholder: 'Nombre, URL, o simplemente descríbelo. Si no conoces a nadie, escribe "no conozco" y Taca buscará.',
        type: 'textarea',
      },
      {
        id: 'como_resuelven_hoy',
        label: '¿Cómo resuelve tu público este problema hoy? (sin tu producto)',
        placeholder: 'Excel, WhatsApp, a mano, una agencia, otro software... A veces el mayor competidor es "no hacer nada".',
        type: 'textarea',
      },
      {
        id: 'confirma_vecinos',
        label: '¿Quieres que Taca analice este mercado en detalle en el Generador?',
        type: 'confirm',
        options: [
          { value: 'si', label: 'Sí, inclúyelo en el Prompt Pack' },
          { value: 'ya_lo_tengo', label: 'Ya lo tengo investigado' },
        ],
      },
    ],
  },
  {
    id: 'escaparates',
    title: 'Los escaparates',
    subtitle: 'Paso 2 de 4 · La exploración del barrio',
    tacaRecommendation: 'Si identificaste competidores en el paso anterior, cuéntame qué ves en sus escaparates. Si no conoces a ninguno, salta este paso — Taca incluirá una tarea de investigación en tu Prompt Pack.',
    questionsTitle: 'Lo que ves desde fuera',
    questions: [
      {
        id: 'que_hacen_bien',
        label: '¿Qué hace bien tu competencia? (o el sustituto actual)',
        placeholder: 'Buen diseño, precio bajo, marca conocida, funciona bien, buen soporte...',
        type: 'textarea',
      },
      {
        id: 'que_les_falta',
        label: '¿Qué les falta o qué hacen mal?',
        placeholder: 'Lento, feo, caro, difícil de usar, le falta X función, mal soporte...',
        type: 'textarea',
      },
      {
        id: 'tu_hueco',
        label: '¿Dónde crees que está tu hueco?',
        hint: 'No hace falta que sea una revolución. A veces el hueco es "lo mismo pero más simple" o "lo mismo pero para otro público".',
        placeholder: 'Mi ventaja sería...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'viento',
    title: 'El viento',
    subtitle: 'Paso 3 de 4 · La exploración del barrio',
    tacaRecommendation: 'El mercado no es estático. Hay tendencias que pueden empujar tu proyecto o frenarlo. No necesitas ser analista — cuéntame lo que percibes y Taca lo estructurará.',
    questionsTitle: '¿Qué vientos percibes?',
    questions: [
      {
        id: 'a_favor',
        label: '¿Hay algo que juegue a tu favor ahora mismo?',
        hint: 'Crecimiento del sector, nueva tecnología, cambio de hábitos, regulación que te beneficia...',
        placeholder: 'Lo que percibes, aunque no estés seguro...',
        type: 'textarea',
      },
      {
        id: 'en_contra',
        label: '¿Hay algo que juegue en tu contra?',
        hint: 'Competidores con mucho dinero, mercado saturado, regulación complicada...',
        placeholder: 'Lo que te preocupa, aunque sea una intuición...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'precios',
    title: 'Los precios',
    subtitle: 'Paso 4 de 4 · La exploración del barrio',
    tacaRecommendation: 'El precio no se inventa — se posiciona. Cuéntame lo que sabes de los precios del barrio y qué sientes que podría pagar tu cliente. Taca usará esto para la propuesta de precios en el Generador.',
    questionsTitle: 'El termómetro del precio',
    questions: [
      {
        id: 'precios_competencia',
        label: '¿Sabes cuánto cobra tu competencia?',
        placeholder: 'Si lo sabes: nombre + precio. Si no: "no lo sé" y Taca lo incluirá como tarea de investigación.',
        type: 'textarea',
      },
      {
        id: 'intuicion_precio',
        label: '¿Cuánto crees que pagaría tu cliente por tu producto?',
        hint: 'No hace falta que sea exacto. Es una intuición, no un compromiso.',
        placeholder: '5€/mes, 50€/mes, pago único de 200€, no tengo ni idea...',
        type: 'textarea',
      },
      {
        id: 'modelo_cobro',
        label: '¿Cómo preferirías cobrar?',
        type: 'select',
        options: [
          { value: 'suscripcion', label: 'Suscripción mensual — Ingresos recurrentes' },
          { value: 'freemium', label: 'Freemium — Gratis + planes de pago' },
          { value: 'pago_unico', label: 'Pago único — Compra y ya' },
          { value: 'por_uso', label: 'Por uso — Paga según cuánto use' },
          { value: 'no_se', label: 'No lo sé — Que Taca recomiende' },
        ],
      },
    ],
  },
]
