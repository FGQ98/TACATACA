# TACATACA

**De la idea al plan. Del plan a la acción... y ¡zas!, un SaaS.**

Meta-herramienta SaaS que guía paso a paso la planificación de proyectos digitales.

## Stack

- **Frontend**: React + Vite
- **Backend/BD**: Firebase (Firestore + Auth)
- **Hosting**: Vercel
- **Control de versiones**: GitHub

## Desarrollo local

```bash
npm install
npm run dev
```

## Estructura

```
src/
  pages/         → Pantallas completas (1 por URL)
  components/    → Piezas reutilizables
  context/       → Estado compartido (Auth, Project)
  hooks/         → Lógica reutilizable
  data/          → Contenido estático
  utils/         → Funciones auxiliares
```

## Variables de entorno

Copia `.env.example` a `.env` y completa con tus credenciales de Firebase.
