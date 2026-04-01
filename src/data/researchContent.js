// Área 2: Investigación — La exploración del barrio
// Taca investiga. El usuario añade lo que sabe.

export const RESEARCH_STEPS = [
  {
    id: 'vecinos',
    title: 'Los vecinos',
    subtitle: 'Paso 1 de 4 · La exploración del barrio',
    tacaRecommendation: 'He analizado tu Brief. Antes de buscar competidores, necesito saber qué conoces tú del barrio. Tú conoces tu sector mejor que yo — yo estructuro la información.',
    questionsTitle: 'Lo que tú sabes del barrio',
    questions: [
      {
        id: 'conoces_competidor',
        label: '¿Conoces a alguien que haga algo parecido a tu proyecto?',
        hint: 'Nombre, URL, o descríbelo. Si no conoces a nadie, escribe "no conozco" — Taca completará el análisis en el Generador.',
        placeholder: 'Nombre y qué hace, o "no conozco ninguno"...',
        type: 'textarea',
      },
      {
        id: 'como_resuelven_hoy',
        label: '¿Cómo resuelve la gente este problema hoy sin tu producto?',
        hint: 'El mayor competidor muchas veces no es otra app — es "hacerlo a mano".',
        placeholder: 'Excel, WhatsApp, a mano, una agencia, otro software, no hacer nada...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'escaparates',
    title: 'Los escaparates',
    subtitle: 'Paso 2 de 4 · La exploración del barrio',
    tacaRecommendation: 'Si conoces competidores, cuéntame qué ves en sus escaparates. Si no conoces a ninguno, salta adelante — no pasa nada, Taca generará las tareas de investigación necesarias.',
    questionsTitle: 'Lo que ves desde fuera',
    questions: [
      {
        id: 'que_hacen_bien',
        label: '¿Qué hace bien tu competencia (o el sustituto actual)?',
        placeholder: 'Buen diseño, precio bajo, marca conocida, funciona bien... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'que_les_falta',
        label: '¿Qué les falta o qué hacen mal?',
        placeholder: 'Lento, caro, difícil de usar, le falta X... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'tu_hueco',
        label: '¿Dónde crees que está tu hueco?',
        hint: 'No hace falta una revolución. "Lo mismo pero más simple" ya es un hueco.',
        placeholder: 'Mi ventaja sería...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'viento',
    title: 'El viento',
    subtitle: 'Paso 3 de 4 · La exploración del barrio',
    tacaRecommendation: 'El mercado no es estático. Cuéntame lo que percibes — intuiciones incluidas. Taca estructurará los vientos a favor, en contra y neutros en tu informe.',
    questionsTitle: '¿Qué vientos percibes?',
    questions: [
      {
        id: 'a_favor',
        label: '¿Hay algo que juegue a tu favor ahora mismo?',
        hint: 'Crecimiento del sector, nueva tecnología, cambio de hábitos, regulación favorable...',
        placeholder: 'Lo que percibes, aunque sea una intuición...',
        type: 'textarea',
      },
      {
        id: 'en_contra',
        label: '¿Hay algo que juegue en tu contra?',
        hint: 'Competidores grandes, mercado saturado, regulación complicada...',
        placeholder: 'Lo que te preocupa...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'precios',
    title: 'Los precios',
    subtitle: 'Paso 4 de 4 · La exploración del barrio',
    tacaRecommendation: 'El precio no se inventa — se posiciona. Cuéntame lo que sabes y lo que intuyes. Taca usará esto junto con el análisis de mercado para proponer precios en el Generador.',
    questionsTitle: 'El termómetro del precio',
    questions: [
      {
        id: 'precios_competencia',
        label: '¿Sabes cuánto cobra tu competencia?',
        placeholder: 'Nombre + precio si lo sabes. Si no: "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'intuicion_precio',
        label: '¿Cuánto crees que pagaría tu cliente?',
        hint: 'Es una intuición, no un compromiso.',
        placeholder: '5€/mes, 50€/mes, pago único, no tengo ni idea...',
        type: 'textarea',
      },
      {
        id: 'modelo_cobro',
        label: '¿Cómo preferirías cobrar?',
        type: 'select',
        options: [
          { value: 'suscripcion', label: 'Suscripción mensual' },
          { value: 'freemium', label: 'Freemium — Gratis + planes de pago' },
          { value: 'pago_unico', label: 'Pago único' },
          { value: 'por_uso', label: 'Por uso — Paga según cuánto use' },
          { value: 'no_se', label: 'No lo sé — Que Taca recomiende' },
        ],
      },
    ],
  },
]
