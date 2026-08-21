import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[480px] bg-[radial-gradient(ellipse_at_top,var(--accent-soft),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 sm:py-32 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-sm text-code-accent">{"> disponible para proyectos freelance"}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:mx-0">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button href="#contacto">Trabajemos juntos</Button>
            <Button href="#portafolio" variant="secondary">
              Ver portafolio
            </Button>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-surface-border bg-surface sm:h-72 sm:w-72">
            <Image
              src="/images/profile/profile.jpg"
              alt={site.name}
              fill
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
