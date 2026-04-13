// Área 2: Investigación — La exploración del barrio
// Taca investiga. El usuario añade lo que sabe.
//
// REORIENTACIÓN v4 (abril 2026):
// NO es investigación de mercado para fines de marketing o comerciales.
// ES investigación técnico-funcional: qué existe, qué funcionalidades ofrece,
// qué cobra, y cómo se relacionan esos precios con los costes reales de
// los recursos técnicos necesarios.
//
// Objetivo: que el emprendedor entienda el entorno funcional (no comercial)
// y que Taca pueda calibrar si los márgenes entre costes de infraestructura
// y expectativa de ingresos son viables técnicamente.

export const RESEARCH_STEPS = [
  {
    id: 'vecinos',
    title: 'Los vecinos',
    subtitle: 'Paso 1 de 4 · La exploración del barrio',
    tacaRecommendation: 'No buscamos competidores para ganarles — buscamos referencias para entender qué es normal en tu sector. Si ya existe algo parecido, nos dice qué funcionalidades espera el usuario y qué estándar técnico debes igualar como mínimo.',
    questionsTitle: 'Qué hay en el barrio',
    questions: [
      {
        id: 'conoces_competidor',
        label: '¿Conoces algún producto o servicio que haga algo parecido a lo tuyo?',
        hint: 'No es obligatorio. Si no conoces nada, escribe "no conozco" — Taca lo investigará en el Generador.',
        placeholder: 'Nombre y qué hace, o "no conozco ninguno"...',
        type: 'textarea',
      },
      {
        id: 'como_resuelven_hoy',
        label: '¿Cómo se resuelve este problema hoy sin un producto como el tuyo?',
        hint: 'A mano, con Excel, con WhatsApp, contratando a alguien... Esto define contra qué compites técnicamente.',
        placeholder: 'Excel, WhatsApp, a mano, una agencia, otro software, no se resuelve...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'escaparates',
    title: 'Los escaparates',
    subtitle: 'Paso 2 de 4 · La exploración del barrio',
    tacaRecommendation: 'Si conoces productos parecidos, cuéntame qué funcionalidades ofrecen. No para copiarlas, sino para saber qué espera el usuario como mínimo y qué puedes hacer diferente técnicamente.',
    questionsTitle: 'Qué funcionalidades ves',
    questions: [
      {
        id: 'funcionalidades_estandar',
        label: '¿Qué funcionalidades ofrecen los productos que conoces?',
        hint: 'Login, dashboard, búsqueda, filtros, pagos, notificaciones... Lo que ves como "normal" en ese tipo de producto.',
        placeholder: 'Tienen login, panel de control, pueden exportar datos, envían emails... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'que_les_falta',
        label: '¿Qué echas en falta o qué hacen mal técnicamente?',
        hint: 'Lento, difícil de usar, no funciona en móvil, no tiene X... Esto revela oportunidades técnicas.',
        placeholder: 'Diseño antiguo, no tiene app móvil, es lento, le falta X... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'nivel_tecnico',
        label: '¿Cómo calificarías su nivel técnico?',
        hint: 'No hace falta ser experto. ¿Se ve moderno? ¿Va rápido? ¿Funciona bien en el móvil?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'bajo', label: 'Básico — Se ve antiguo o artesanal' },
          { value: 'medio', label: 'Correcto — Funciona pero no impresiona' },
          { value: 'alto', label: 'Profesional — Buen diseño, rápido, bien hecho' },
          { value: 'no_se', label: 'No lo sé / No he visto ninguno' },
        ],
      },
    ],
  },
  {
    id: 'costes_mercado',
    title: 'Los precios del barrio',
    subtitle: 'Paso 3 de 4 · La exploración del barrio',
    tacaRecommendation: 'No investigamos precios para hacer marketing. Los necesitamos para un análisis técnico-financiero: cuánto cobra el mercado vs cuánto cuesta técnicamente ofrecer el servicio. Si los precios del barrio no cubren los costes de infraestructura, hay un problema que es mejor ver ahora.',
    questionsTitle: 'Cuánto se cobra por aquí',
    questions: [
      {
        id: 'precios_competencia',
        label: '¿Sabes cuánto cobran productos similares?',
        hint: 'El precio del mercado define el techo. Taca comparará esto con el coste real de tu infraestructura en el área de Stack.',
        placeholder: 'Nombre + precio si lo sabes. Plan gratuito, de entrada, pro... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'expectativa_ingreso',
        label: '¿Cuánto esperas que te genere tu producto al mes? (aunque sea una intuición)',
        hint: 'No es un compromiso. Taca usará esto para calcular si los costes técnicos son sostenibles.',
        placeholder: '0€ (es gratuito), 100€/mes, 1.000€/mes, no tengo ni idea...',
        type: 'textarea',
      },
      {
        id: 'modelo_cobro',
        label: '¿Cómo cobran los productos que conoces?',
        hint: 'Esto nos dice qué espera el mercado. Si todos cobran suscripción y tú quieres pago único, hay que analizarlo.',
        type: 'select',
        options: [
          { value: 'suscripcion', label: 'Suscripción mensual/anual' },
          { value: 'freemium', label: 'Freemium — Gratis con opciones de pago' },
          { value: 'pago_unico', label: 'Pago único' },
          { value: 'por_uso', label: 'Por uso — Paga según cuánto use' },
          { value: 'gratis', label: 'Son gratuitos' },
          { value: 'no_se', label: 'No lo sé' },
        ],
      },
    ],
  },
  {
    id: 'contexto_tecnico',
    title: 'El contexto técnico',
    subtitle: 'Paso 4 de 4 · La exploración del barrio',
    tacaRecommendation: 'Último paso del barrio. Necesito saber si hay condiciones externas que afecten a las decisiones técnicas de tu proyecto. No hablamos de tendencias de mercado — hablamos de realidades técnicas y regulatorias.',
    questionsTitle: 'Qué condiciones externas afectan',
    questions: [
      {
        id: 'sector_regulado',
        label: '¿Tu sector tiene regulaciones técnicas específicas?',
        hint: 'Sanidad exige cifrado especial. Finanzas exige auditoría. Educación con menores exige consentimiento parental. Cada regulación añade capas técnicas.',
        placeholder: 'Sanidad, finanzas, educación con menores, alimentación... o "no lo sé / no creo".',
        type: 'textarea',
      },
      {
        id: 'integraciones_sector',
        label: '¿En tu sector es habitual integrarse con algún sistema externo?',
        hint: 'Pasarelas de pago específicas, APIs sectoriales, sistemas de facturación, plataformas de envío...',
        placeholder: 'TPV del sector, API de facturación, sistema de reservas estándar... o "no lo sé".',
        type: 'textarea',
      },
      {
        id: 'expectativa_usuarios',
        label: '¿Cuántos usuarios esperas en los primeros 6 meses? (aunque sea una intuición)',
        hint: 'Esto no es validación de mercado. Es un dato técnico: 10 usuarios y 10.000 usuarios necesitan infraestructura diferente y cuestan diferente.',
        placeholder: '10, 100, 1.000, 10.000... o "no tengo ni idea".',
        type: 'textarea',
      },
    ],
  },
]
