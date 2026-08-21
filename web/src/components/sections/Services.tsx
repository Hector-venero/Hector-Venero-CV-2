import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="servicios"
        title="En qué puedo ayudarte"
        description="Trabajo de punta a punta: desde el diseño de la solución hasta llevarla a producción."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
