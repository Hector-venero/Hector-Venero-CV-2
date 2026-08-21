import Image from "next/image";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const statusLabel = {
  produccion: "En producción",
  prototipo: "Prototipo / Concepto",
};

export function Portfolio() {
  return (
    <section id="portafolio" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="portafolio"
        title="Proyectos"
        description="Un portafolio honesto: lo que está en producción y lo que todavía es un prototipo."
      />

      {projects.length === 0 ? (
        <Card className="text-center">
          <p className="text-muted">
            Estoy documentando mis proyectos — muy pronto vas a poder ver acá mi tesis
            y otros trabajos.
          </p>
        </Card>
      ) : (
        <div
          className={
            projects.length === 1
              ? "grid max-w-xl gap-6"
              : "grid gap-6 sm:grid-cols-2"
          }
        >
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden p-0">
              {project.image && (
                <div className="relative h-64 w-full bg-background">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
              )}
              <div className="p-6">
                <Badge tone={project.status === "produccion" ? "accent" : "default"}>
                  {statusLabel[project.status]}
                </Badge>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      Ver proyecto →
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      Ver demo en video →
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
