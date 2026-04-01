// Área 4: Stack — Las instalaciones del local
// Quién te pone la luz, quién el agua, quién la alarma.

export const STACK_STEPS = [
  {
    id: 'acometidas',
    title: 'Las acometidas',
    subtitle: 'Paso 1 de 4 · Las instalaciones del local',
    context: 'Cuando abres un local, no fabricas la electricidad ni el agua. Contratas proveedores. Con un proyecto digital es igual: necesitas servicios externos que hagan el trabajo pesado por ti.',
    questions: [
      {
        id: 'necesita_auth',
        label: '¿Tu proyecto necesita que los usuarios se registren y hagan login?',
        type: 'select',
        options: [
          { value: 'si', label: 'Sí, con email y contraseña' },
          { value: 'si_social', label: 'Sí, con Google/redes sociales' },
          { value: 'no', label: 'No, es acceso libre' },
        ],
      },
      {
        id: 'necesita_bd',
        label: '¿Tu proyecto necesita guardar datos de forma permanente?',
        type: 'select',
        options: [
          { value: 'si_mucho', label: 'Sí, muchos datos (usuarios, pedidos, productos...)' },
          { value: 'si_poco', label: 'Sí, pero pocos datos (perfiles, configuración)' },
          { value: 'no', label: 'No, todo es efímero o estático' },
        ],
      },
      {
        id: 'necesita_pagos',
        label: '¿Tu proyecto procesa pagos?',
        type: 'select',
        options: [
          { value: 'si_recurrente', label: 'Sí, suscripciones recurrentes' },
          { value: 'si_puntual', label: 'Sí, pagos puntuales' },
          { value: 'futuro', label: 'En el futuro, ahora no' },
          { value: 'no', label: 'No, es gratuito' },
        ],
      },
      {
        id: 'necesita_email',
        label: '¿Necesitas enviar emails a los usuarios?',
        type: 'select',
        options: [
          { value: 'si_transaccional', label: 'Sí, confirmaciones y notificaciones' },
          { value: 'si_marketing', label: 'Sí, newsletters y campañas' },
          { value: 'ambos', label: 'Ambos' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
  {
    id: 'contadores',
    title: 'Los contadores',
    subtitle: 'Paso 2 de 4 · Las instalaciones del local',
    context: 'Para cada servicio que necesitas, hay proveedores. No todos son iguales. Aquí aplicamos la prescripción transparente: 5 preguntas que todo proveedor debe responder antes de contratarlo.',
    questions: [
      {
        id: 'experiencia_tech',
        label: '¿Tienes experiencia previa con alguna tecnología o proveedor?',
        placeholder: 'Firebase, AWS, Stripe, Wordpress, Shopify... o "ninguna, soy nuevo"',
        type: 'textarea',
      },
      {
        id: 'presupuesto_tech',
        label: '¿Cuánto puedes invertir en infraestructura al mes?',
        type: 'select',
        options: [
          { value: '0', label: '0€ — Solo planes gratuitos' },
          { value: '1_20', label: '1-20€/mes — Lo básico' },
          { value: '20_100', label: '20-100€/mes — Hay margen' },
          { value: '100_plus', label: '+100€/mes — Sin restricción' },
        ],
      },
      {
        id: 'prioridad_tech',
        label: '¿Qué es más importante para ti?',
        type: 'select',
        options: [
          { value: 'facilidad', label: 'Facilidad de uso — Que sea simple de configurar' },
          { value: 'precio', label: 'Precio — Lo más barato posible' },
          { value: 'escalado', label: 'Escalado — Que aguante si crece' },
          { value: 'control', label: 'Control — Que pueda moverme fácil si cambio' },
        ],
      },
    ],
  },
  {
    id: 'instalacion',
    title: 'La instalación',
    subtitle: 'Paso 3 de 4 · Las instalaciones del local',
    context: 'Ahora que sabes qué servicios necesitas, toca entender cómo se conectan entre sí. No necesitas entender el cableado — pero sí saber que la luz llega del poste a tu enchufe, no por arte de magia.',
    questions: [
      {
        id: 'flujo_datos',
        label: '¿De dónde vienen los datos principales de tu proyecto?',
        placeholder: 'Los usuarios los meten, se importan de otro sistema, se generan automáticamente...',
        type: 'textarea',
      },
      {
        id: 'flujo_usuario',
        label: '¿Cómo llega el usuario a tu producto?',
        type: 'select',
        options: [
          { value: 'url_directa', label: 'URL directa — Escribe la dirección o busca en Google' },
          { value: 'app_store', label: 'App Store — Descarga la app' },
          { value: 'invitacion', label: 'Invitación — Alguien le manda un enlace' },
          { value: 'embebido', label: 'Embebido — Dentro de otra plataforma' },
        ],
      },
      {
        id: 'offline',
        label: '¿Tu producto necesita funcionar sin conexión a internet?',
        type: 'select',
        options: [
          { value: 'no', label: 'No, siempre online' },
          { value: 'parcial', label: 'Parcialmente — consultar datos sin conexión' },
          { value: 'si', label: 'Sí, funcionalidad completa offline' },
        ],
      },
    ],
  },
  {
    id: 'recibo',
    title: 'El recibo',
    subtitle: 'Paso 4 de 4 · Las instalaciones del local',
    context: '¿Cuánto cuesta todo esto? La buena noticia: empezar un proyecto digital hoy cuesta una fracción de lo que costaba hace 5 años. La mayoría de servicios tienen plan gratuito suficiente para un MVP.',
    questions: [
      {
        id: 'usuarios_esperados',
        label: '¿Cuántos usuarios esperas en los primeros 3 meses?',
        type: 'select',
        options: [
          { value: '1_10', label: '1-10 — Solo yo y testers' },
          { value: '10_50', label: '10-50 — Early adopters' },
          { value: '50_200', label: '50-200 — Primeros clientes reales' },
          { value: '200_plus', label: '+200 — Lanzamiento amplio' },
        ],
      },
      {
        id: 'dato_sensible',
        label: '¿Tu proyecto maneja datos financieros o de salud?',
        type: 'select',
        options: [
          { value: 'no', label: 'No — Datos básicos de perfil y uso' },
          { value: 'financiero', label: 'Sí, datos financieros (pagos, facturas)' },
          { value: 'salud', label: 'Sí, datos de salud' },
          { value: 'ambos', label: 'Ambos' },
        ],
      },
      {
        id: 'notas_stack',
        label: '¿Algo más que debamos saber sobre tu infraestructura?',
        placeholder: 'Requisitos especiales, preferencias, experiencias pasadas buenas o malas...',
        type: 'textarea',
      },
    ],
  },
]
