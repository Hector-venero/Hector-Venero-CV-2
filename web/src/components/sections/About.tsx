import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="sobre mí" title="Quién está del otro lado" />

      <Card className="max-w-3xl">
        <p className="text-base leading-relaxed text-muted">
          Soy Ingeniero en Telecomunicaciones egresado de la Universidad Nacional
          de San Martín (UNSAM) y desarrollador de software, radicado en Buenos
          Aires, Argentina. Actualmente trabajo en Global Hitss Cono Sur como
          Software Developer, en el equipo backend de ClaroVideo. Mi tesis de
          grado —una plataforma de historias clínicas digitales con blockchain—
          ya está en producción en el Centro Asistencial Universitario
          (CAU-UNSAM), mi primer proyecto realmente productivo. Desde entonces
          vengo sumando proyectos propios explorando desarrollo mobile y diseño
          de software.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Me gusta trabajar de punta a punta: entender el problema, diseñar la
          solución y llevarla a producción.
        </p>
      </Card>
    </section>
  );
}
