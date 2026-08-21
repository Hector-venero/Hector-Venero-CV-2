# Estado del sitio — hector-venero-cv-2

Última actualización: 2026-08-21. Resumen de qué se hizo, con qué
tecnologías y en qué cuentas quedó todo, para retomar sin perder contexto.

## Qué es esto

Reconstrucción completa del sitio personal, de "CV online" a landing de
servicios freelance (desarrollo web, apps mobile, diseño de software) con
portafolio real. El sitio viejo (Firebase Hosting + Cloud Function) sigue
existiendo en la raíz del repo pero **ya no se usa** — la app nueva vive en
`web/` y es la que está publicada.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**.
- Fuentes Geist Sans / Geist Mono (integradas por Next.js, sin configurar).
- Contenido (textos de servicios, proyectos, skills) en archivos tipados
  bajo `web/src/content/*.ts` — para editar copy no hace falta tocar
  componentes.
- **Requiere Node ≥20.9** para desarrollo local. El sistema tiene Node 18,
  así que se instaló una versión aparte en `~/.local/node20` (no afecta el
  Node del sistema). Para correr local:
  ```bash
  export PATH="$HOME/.local/node20/bin:$PATH"
  cd "web"
  npm run dev
  ```

## Dónde está todo

| Qué | Dónde |
|---|---|
| Código | GitHub: `Hector-venero/Hector-Venero-CV-2`, rama `main`, carpeta `web/` |
| Hosting / deploy | Vercel, team **ProfilePersonal**, proyecto `hector-venero-cv-2` |
| URL pública | https://hector-venero-cv-2.vercel.app |
| Formulario de contacto | Formspree, cuenta con `hectorvenero29hv@gmail.com`, formulario **"ContactProfile"**, endpoint `https://formspree.io/f/xrpzjykz` |

## Variables de entorno

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/xrpzjykz`
- Configurada en **Vercel → Settings → Environment Variables** (Production +
  Preview) y también en `web/.env.local` para desarrollo local (ese archivo
  no se sube a git).
- Es una variable `NEXT_PUBLIC_*`, o sea que queda visible en el navegador
  a propósito — no es un dato sensible, es solo la URL de destino del
  formulario.

## Cómo se despliega

Cada `git push` a `main` dispara un deploy automático en Vercel (Root
Directory del proyecto está configurado como `web`). No hace falta hacer
nada manual en Vercel salvo que cambie algo en la configuración del
proyecto (dominio, variables de entorno nuevas, etc.).

## Contenido real cargado

- **Portafolio, proyecto 1**: tesis de grado — "Historias Clínicas
  Digitales — CAU UNSAM", en producción real en el Centro Asistencial
  Universitario (cau-hc.com.ar). Blockchain Federal Argentina + MySQL
  off-chain, Vue.js/Python+Flask/Nginx.
- **Portafolio, proyecto 2**: CampoLink (marketplace de fletes
  agropecuarios), prototipo en desarrollo activo. Flutter + Go/Gin +
  PostgreSQL + MinIO.
- Foto de perfil, GitHub (`github.com/Hector-venero`) y LinkedIn
  (`linkedin.com/in/hector-venero-8493a1154`) ya están cargados.

## Pendiente

- **Dominio propio**: hoy el sitio vive en el subdominio gratuito de
  Vercel. Cuando se decida el dominio (renovar el viejo o comprar uno
  nuevo), se agrega desde Vercel → Domains.
- Sumar más proyectos al portafolio a medida que estén listos
  (`web/src/content/projects.ts`).
- Terminar de confirmar/ampliar la lista de skills, sobre todo stack
  mobile (`web/src/content/skills.ts`).

## Nota de seguridad pendiente (no relacionada a este rebuild)

El sitio viejo en la raíz del repo (`functions/index.js`) tiene una
contraseña de aplicación de Gmail hardcodeada y commiteada al historial de
git. Sigue sin usarse en el sitio nuevo, pero conviene revocar esa
contraseña de aplicación en la cuenta de Google si todavía no se hizo.
