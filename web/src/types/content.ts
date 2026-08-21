export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type ProjectStatus = "produccion" | "prototipo";

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  image?: string;
  link?: string;
  videoUrl?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
