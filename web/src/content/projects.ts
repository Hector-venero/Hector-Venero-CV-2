import type { Project } from "@/types/content";

// TODO(hector): sumar otros proyectos reales cuando los tengas. No agregar
// proyectos de relleno: si esta lista queda vacía, la sección de Portafolio
// muestra un estado honesto de "en construcción" en vez de tarjetas falsas.
export const projects: Project[] = [
  {
    slug: "historias-clinicas-cau-unsam",
    title: "Historias Clínicas Digitales — CAU UNSAM",
    description:
      "Plataforma de gestión de historias clínicas en uso real en el Centro Asistencial Universitario (CAU-UNSAM). Tesis de grado en Ingeniería en las Telecomunicaciones (UNSAM). Cumple con la Ley 27.706 de Historias Clínicas Digitales mediante una arquitectura off-chain: los registros médicos viven en una base de datos local (MySQL) y el hash SHA-256 de cada documento se ancla en la Blockchain Federal Argentina (BFA), detectando cualquier alteración de forma instantánea. Incluye emisión de recetas electrónicas integrada a la misma plataforma. Stack: Vue.js, Python + Flask, Nginx.",
    status: "produccion",
    image: "/images/projects/cau-hc/arquitectura.jpg",
    link: "https://cau-hc.com.ar/",
    videoUrl:
      "https://www.linkedin.com/posts/hector-venero-8493a1154_saluddigital-blockchain-vuejs-ugcPost-7496394621208580096-47i7/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUTmXkBEOzBEPAA1-JY-53cmBxORX4x6kE",
  },
  {
    slug: "campolink",
    title: "CampoLink — Marketplace de Fletes Agropecuarios",
    description:
      "App mobile que conecta productores del campo que necesitan trasladar mercadería con transportistas que viajan con capacidad ociosa, para reducir la ineficiencia del mercado de fletes agropecuarios en Argentina. Autenticación, perfiles de transportista con documentación validada, publicación de rutas y solicitudes de carga, chat y negociación con confirmación de flete por ambas partes, y sistema de calificaciones. Stack: Flutter (mobile), Go + Gin (backend), PostgreSQL, MinIO.",
    status: "produccion",
    image: "/images/projects/campolink/publicar-carga.jpg",
    link: "https://campolinkagro.com.ar/",
  },
  {
    slug: "madelein-monzon-inmobiliaria",
    title: "Sitio Inmobiliario — Madelein Monzón",
    description:
      "Sitio web para una martillera y corredora pública en Buenos Aires, con catálogo de propiedades filtrable por operación y barrio, formulario de contacto y contacto directo por WhatsApp. Stack: Next.js, Firebase (almacenamiento de imágenes).",
    status: "produccion",
    image: "/images/projects/madelein-monzon/cover.png",
    link: "https://www.madeleinmonzon.com.ar/",
  },
];
