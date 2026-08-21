"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="contacto"
        title="Hablemos de tu proyecto"
        description={`Contame qué necesitás y te respondo a la brevedad. También podés escribirme directo a ${site.email}.`}
      />

      <Card className="max-w-2xl">
        {!FORMSPREE_ENDPOINT && (
          <p className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
            El formulario todavía no está conectado. Mientras tanto, escribime
            directo a{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* honeypot anti-spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Teléfono <span className="text-muted">(opcional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-lg border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-sm text-code-accent">¡Gracias! Te voy a responder a la brevedad.</p>
          )}
          {status === "error" && FORMSPREE_ENDPOINT && (
            <p className="text-sm text-red-400">
              Hubo un problema enviando el mensaje. Probá de nuevo o escribime a{" "}
              {site.email}.
            </p>
          )}
        </form>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-surface-border pt-6">
          <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-foreground">
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn ↗
          </a>
        </div>
      </Card>
    </section>
  );
}
