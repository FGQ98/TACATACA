// Área 3: Estructura — El edificio
// Plantas, puertas, carteles. Cada archivo tiene un nombre que dice lo que hace.

export const STRUCTURE_STEPS = [
  {
    id: 'terreno',
    title: 'El terreno',
    subtitle: 'Paso 1 de 4 · El edificio',
    context: 'Antes de levantar paredes, hay que saber qué tipo de edificio necesitas. No es lo mismo una caseta de feria que un rascacielos. Tu Brief ya nos lo dice: tipo de proyecto, público, y alcance determinan la base.',
    questions: [
      {
        id: 'tipo_tech',
        label: 'Basándonos en tu Brief, ¿qué tipo de proyecto técnico necesitas?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'saas_react', label: 'SaaS con Vite + React — Usuarios externos, login, base de datos' },
          { value: 'html_puro', label: 'HTML puro — Herramienta personal, sin servidor' },
          { value: 'landing', label: 'Landing page — Presencia online, sin lógica compleja' },
          { value: 'no_se', label: 'No lo sé — Necesito que me recomienden' },
        ],
      },
      {
        id: 'razon_tipo',
        label: '¿Por qué ese tipo? (o si no sabes, describe qué necesita tu producto)',
        placeholder: 'Login de usuarios, guardar datos, pagos, solo informativa, herramienta personal...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'cimientos',
    title: 'Los cimientos',
    subtitle: 'Paso 2 de 4 · El edificio',
    context: 'Las carpetas raíz son los cimientos del edificio. Cada una tiene una función clara. No las tocarás directamente — pero necesitas saber qué hace cada una para entender las decisiones.',
    questions: [
      {
        id: 'pantallas',
        label: '¿Qué pantallas necesita tu producto? (una por línea)',
        placeholder: 'Login\nDashboard\nListado de...\nDetalle de...\nConfiguración\n...',
        type: 'textarea',
      },
      {
        id: 'modulos',
        label: '¿Qué módulos o funcionalidades tiene cada pantalla?',
        placeholder: 'Dashboard: lista de proyectos, crear nuevo, filtrar. Detalle: editar, borrar, compartir...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'plantas',
    title: 'Las plantas',
    subtitle: 'Paso 3 de 4 · El edificio',
    context: 'Cada pantalla se convierte en un archivo. Cada módulo se convierte en un componente. La regla: un archivo = una cosa. Si falla, el impacto se queda dentro de sus paredes. Como los compartimentos de un submarino.',
    questions: [
      {
        id: 'archivos_criticos',
        label: '¿Qué datos son los más importantes de tu proyecto? (lo que no puede fallar)',
        placeholder: 'Datos de usuarios, pedidos, pagos, inventario, documentos...',
        type: 'textarea',
      },
      {
        id: 'integraciones',
        label: '¿Tu proyecto necesita conectarse con algo externo?',
        placeholder: 'Pasarela de pagos, email, mapas, APIs de terceros, redes sociales...',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'mapa',
    title: 'El mapa',
    subtitle: 'Paso 4 de 4 · El edificio',
    context: 'El mapa completo de tu edificio. Cuántos archivos, cuántas carpetas, y cómo crecerá sin necesidad de reorganizar. La clave es diseñar para que crecer sea añadir piezas, no romper las existentes.',
    questions: [
      {
        id: 'crecimiento',
        label: '¿Qué funcionalidades añadirías en una segunda fase?',
        placeholder: 'Chat, notificaciones, panel admin avanzado, reportes, integraciones...',
        type: 'textarea',
      },
      {
        id: 'multiidioma',
        label: '¿Tu proyecto necesitará varios idiomas o varias zonas geográficas?',
        placeholder: '',
        type: 'select',
        options: [
          { value: 'no', label: 'No, un solo idioma y mercado' },
          { value: 'futuro', label: 'En el futuro sí, ahora no' },
          { value: 'si', label: 'Sí, desde el principio' },
        ],
      },
    ],
  },
]
