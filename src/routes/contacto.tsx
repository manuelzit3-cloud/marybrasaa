import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Reservas — Mar y Brasa · Concepción" },
      {
        name: "description",
        content:
          "Reserva tu mesa en Mar y Brasa. O'Higgins 245, Concepción. Teléfono (41) 233 4400.",
      },
      { property: "og:title", content: "Reservas — Mar y Brasa · Concepción" },
      {
        property: "og:description",
        content: "Reserva mesa o evento en Mar y Brasa, Concepción. (41) 233 4400.",
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
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Reservas</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">Reserva tu mesa</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Escríbenos para reservar mesa, celebrar un evento o consultarnos por
        nuestro menú de degustación. Te confirmamos por correo o teléfono.
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
              <h2 className="mt-4 text-xl font-600 text-foreground">¡Reserva enviada!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Gracias por escribirnos. Te confirmaremos pronto al correo o teléfono indicado.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-md border border-input px-4 py-2 text-sm font-600 text-foreground hover:bg-secondary"
              >
                Hacer otra reserva
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
                  <input id="fono" type="tel" placeholder="(41) 233 4400" className="input" />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Fecha" id="fecha">
                  <input id="fecha" type="date" className="input" />
                </Field>
                <Field label="Comensales" id="comensales">
                  <select id="comensales" className="input">
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3–4 personas</option>
                    <option>5–8 personas</option>
                    <option>Más de 8 (evento)</option>
                  </select>
                </Field>
              </div>
              <Field label="Correo electrónico" id="email">
                <input id="email" type="email" required placeholder="tu@correo.cl" className="input" />
              </Field>
              <Field label="Asunto" id="asunto">
                <select id="asunto" className="input">
                  <option>Reserva de mesa</option>
                  <option>Evento o grupo grande</option>
                  <option>Para llevar</option>
                  <option>Otro</option>
                </select>
              </Field>
              <Field label="Mensaje" id="mensaje">
                <textarea id="mensaje" rows={5} placeholder="Cuéntanos ocasión, hora deseada y alergias..." className="input resize-y" />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-600 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar reserva
              </button>
              <p className="text-xs text-muted-foreground">
                También puedes llamarnos directamente al{" "}
                <a href="tel:+56412334400" className="font-600 text-primary hover:text-accent">
                  (41) 233 4400
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
            <a href="tel:+56412334400" className="mt-2 block text-lg font-600 text-primary hover:text-accent">
              (41) 233 4400
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Dirección</h2>
            <p className="mt-2 text-base text-foreground">O'Higgins 245</p>
            <p className="text-base text-foreground">Centro, Concepción</p>
            <p className="text-base text-foreground">Región del Bío Bío, Chile</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Horario</h2>
            <p className="mt-2 text-base text-foreground">Mar–Sáb · 13:00 a 23:30</p>
            <p className="text-base text-foreground">Domingo · 13:00 a 17:00</p>
            <p className="text-base text-muted-foreground">Lunes cerrado</p>
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
          box-shadow: 0 0 0 3px oklch(0.38 0.11 25 / 0.18);
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
