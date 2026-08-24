import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Corporación Educacional San Joaquín" },
      {
        name: "description",
        content:
          "Contacta a la Corporación Educacional San Joaquín. Calle Central 17, Nonguén, Concepción. Teléfono (41) 249 9300.",
      },
      {
        property: "og:title",
        content: "Contacto — Corporación Educacional San Joaquín",
      },
      {
        property: "og:description",
        content:
          "Teléfono (41) 249 9300 · Calle Central 17, Nonguén, Concepción.",
      },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Contacto</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">Hablemos</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Escríbenos o llámanos. Estaremos felices de responder tus dudas sobre
        matrículas, horarios y la vida escolar en la Corporación Educacional
        San Joaquín.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-600 text-foreground">¡Mensaje enviado!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Gracias por escribirnos. Te contactaremos pronto al correo o teléfono indicado.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-md border border-input px-4 py-2 text-sm font-600 text-foreground hover:bg-secondary"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" id="nombre">
                  <input id="nombre" required placeholder="Tu nombre" className="input" />
                </Field>
                <Field label="Teléfono" id="fono">
                  <input id="fono" type="tel" placeholder="(41) 2 49 9300" className="input" />
                </Field>
              </div>
              <Field label="Correo electrónico" id="email">
                <input id="email" type="email" required placeholder="tu@correo.cl" className="input" />
              </Field>
              <Field label="Asunto" id="asunto">
                <select id="asunto" className="input">
                  <option>Matrículas</option>
                  <option>Información general</option>
                  <option>Horarios y visita</option>
                  <option>Otro</option>
                </select>
              </Field>
              <Field label="Mensaje" id="mensaje">
                <textarea id="mensaje" required rows={5} placeholder="Cuéntanos en qué podemos ayudarte..." className="input resize-y" />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-600 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar mensaje
              </button>
              <p className="text-xs text-muted-foreground">
                También puedes llamarnos directamente al{" "}
                <a href="tel:+56412499300" className="font-600 text-primary hover:text-accent">
                  (41) 249 9300
                </a>
                .
              </p>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Teléfono</h2>
            <a href="tel:+56412499300" className="mt-2 block text-lg font-600 text-primary hover:text-accent">
              (41) 249 9300
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Dirección</h2>
            <p className="mt-2 text-base text-foreground">Calle Central 17</p>
            <p className="text-base text-foreground">Valle Biobío, Nonguén</p>
            <p className="text-base text-foreground">4050298 Concepción</p>
            <p className="text-base text-foreground">Bío Bío, Chile</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Horario</h2>
            <p className="mt-2 text-base text-foreground">Lun a Vie</p>
            <p className="text-base text-foreground">Abierto · Cierra 18:30</p>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background-color: var(--color-background);
          padding: 0.6rem 0.8rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.46 0.09 155 / 0.18);
        }
      `}</style>
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-600 text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
