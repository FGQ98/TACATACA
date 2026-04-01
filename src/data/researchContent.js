// Área 2: Investigación — La exploración del barrio
// Antes de abrir tu local, das una vuelta por la zona.

export const RESEARCH_STEPS = [
  {
    id: 'vecinos',
    title: 'Los vecinos',
    subtitle: 'Paso 1 de 4 · La exploración del barrio',
    context: 'Antes de abrir tu local, das una vuelta por la zona. ¿Quién vende algo parecido? ¿Quién resuelve el mismo problema de otra forma? No necesitas ser un detective — solo observar.',
    questions: [
      {
        id: 'competidor_1',
        label: 'Competidor directo: ¿quién hace exactamente lo mismo que tú?',
        placeholder: 'Nombre, URL si la tiene, y en una frase qué hace...',
        type: 'textarea',
      },
      {
        id: 'competidor_2',
        label: 'Competidor indirecto: ¿quién resuelve el mismo problema de otra forma?',
        placeholder: 'Puede ser un Excel, un WhatsApp, un freelance, una agencia...',
        type: 'textarea',
      },
      {
        id: 'sustituto',
        label: '¿Qué sustituto usa la gente que NO sabe que tiene el problema?',
        placeholder: 'A veces el mayor competidor es "no hacer nada" o "hacerlo a mano"...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'escaparates',
    title: 'Los escaparates',
    subtitle: 'Paso 2 de 4 · La exploración del barrio',
    context: 'Ya sabes quién está en el barrio. Ahora mira sus escaparates: qué venden, cómo lo venden, qué les falta. Tu hueco está donde ellos no miran.',
    questions: [
      {
        id: 'que_hacen_bien',
        label: '¿Qué hacen bien tus competidores?',
        placeholder: 'Funcionalidades, diseño, precio, atención al cliente, marca...',
        type: 'textarea',
      },
      {
        id: 'que_les_falta',
        label: '¿Qué les falta o qué hacen mal?',
        placeholder: 'Carencias, quejas de sus usuarios, funcionalidades ausentes, UX pobre...',
        type: 'textarea',
      },
      {
        id: 'tu_hueco',
        label: '¿Dónde está tu hueco? ¿Qué puedes ofrecer que ellos no?',
        placeholder: 'Tu ventaja competitiva real, no la que te gustaría tener...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'viento',
    title: 'El viento',
    subtitle: 'Paso 3 de 4 · La exploración del barrio',
    context: 'El barrio no es estático. Hay tendencias que soplan a favor o en contra. Identificarlas ahora te ahorra sorpresas después.',
    questions: [
      {
        id: 'a_favor',
        label: '¿Qué tendencias juegan a tu favor?',
        placeholder: 'Tecnología, regulación, cambio de hábitos, crecimiento del sector...',
        type: 'textarea',
      },
      {
        id: 'en_contra',
        label: '¿Qué tendencias juegan en tu contra?',
        placeholder: 'Grandes players, saturación, regulación restrictiva, fatiga del mercado...',
        type: 'textarea',
      },
      {
        id: 'neutro',
        label: '¿Hay algo que afecta a todos por igual (incluido a ti)?',
        placeholder: 'GDPR, cambios de plataforma, costes de infraestructura...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'precios',
    title: 'Los precios',
    subtitle: 'Paso 4 de 4 · La exploración del barrio',
    context: '¿Cuánto cobra tu competencia? Esto no te dice cuánto cobrar tú, pero te dice en qué rango se mueve el mercado. Cobrar 10x más o 10x menos que todos necesita una justificación muy sólida.',
    questions: [
      {
        id: 'precios_competencia',
        label: '¿Qué planes y precios tienen tus competidores?',
        placeholder: 'Gratis / Básico / Pro / Enterprise — con precios si los conoces...',
        type: 'textarea',
      },
      {
        id: 'modelo_cobro',
        label: '¿Cómo cobran? (mensual, por uso, por transacción, freemium...)',
        placeholder: 'El modelo de cobro dice mucho sobre el tipo de cliente al que apuntan...',
        type: 'textarea',
      },
      {
        id: 'tu_intuicion_precio',
        label: '¿Cuánto crees que pagaría tu cliente por tu producto?',
        placeholder: 'No hace falta que sea exacto. ¿5€/mes? ¿50€/mes? ¿Por proyecto? ¿Por usuario?',
        type: 'textarea',
      },
    ],
  },
]
