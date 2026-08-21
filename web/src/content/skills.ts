import type { SkillGroup } from "@/types/content";

// TODO(hector): confirmar/ampliar esta lista, sobre todo lo que uses
// para desarrollo mobile.
export const skillGroups: SkillGroup[] = [
  {
    category: "Desarrollo",
    items: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Node.js",
      "Go",
      "Python",
      "Flask",
      "Celery",
      "RabbitMQ",
      "SQL",
      "REST APIs",
    ],
  },
  {
    category: "Datos e infraestructura",
    items: ["MySQL", "Oracle Database", "Nginx", "Git", "GitLab"],
  },
  {
    category: "Blockchain y seguridad",
    items: ["Blockchain Federal Argentina (BFA)", "SHA-256", "Arquitecturas off-chain / on-chain"],
  },
  {
    category: "Forma de trabajo",
    items: ["Diseño web responsivo", "Metodologías ágiles"],
  },
];
