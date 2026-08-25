import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación — Mar y Brasa · Concepción" },
      {
        name: "description",
        content:
          "Cómo llegar a Mar y Brasa: O'Higgins 245, Centro, Concepción. Horario mar a domingo, reservas al (41) 233 4400.",
      },
      { property: "og:title", content: "Ubicación — Mar y Brasa · Concepción" },
      {
        property: "og:description",
        content: "O'Higgins 245, Centro, Concepción. Plus code 4P8H+M2 Concepción.",
      },
    ],
    links: [{ rel: "canonical", href: "/ubicacion" }],
  }),
  component: Ubicacion,
});

const MAPS_QUERY = "Mar y Brasa restaurant O'Higgins 245 Concepción Chile";

function Ubicacion() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Ubicación</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">Cómo llegar</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Estamos en O'Higgins 245, en pleno centro de Concepción, a una cuadra de
        la Plaza de Armas. Aquí tienes nuestra dirección, horario y un mapa para
        planificar tu visita.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa de Mar y Brasa, Concepción"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
            width="100%"
            height="420"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Dirección</h2>
            <p className="mt-2 text-base text-foreground">O'Higgins 245</p>
            <p className="text-base text-foreground">Centro, Concepción</p>
            <p className="mt-1 text-base text-foreground">Región del Bío Bío, Chile</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Plus code</h2>
            <p className="mt-2 font-mono text-base text-foreground">4P8H+M2 Concepción</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Código para ubicarnos con precisión en Google Maps.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Horario</h2>
            <p className="mt-2 text-base text-foreground">Mar–Sáb · 13:00 a 23:30</p>
            <p className="text-base text-foreground">Domingo · 13:00 a 17:00</p>
            <p className="text-base text-muted-foreground">Lunes cerrado</p>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-600 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            Cómo llegar en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
