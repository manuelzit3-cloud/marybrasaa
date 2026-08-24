import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación — Corporación Educacional San Joaquín" },
      {
        name: "description",
        content:
          "Cómo llegar a la Corporación Educacional San Joaquín: Calle Central 17, Valle Biobío, Nonguén, Concepción. Plus code 5X4R+8J Concepción.",
      },
      {
        property: "og:title",
        content: "Ubicación — Corporación Educacional San Joaquín",
      },
      {
        property: "og:description",
        content:
          "Calle Central 17, Valle Biobío, Nonguén, Concepción. Plus code 5X4R+8J Concepción.",
      },
    ],
    links: [{ rel: "canonical", href: "/ubicacion" }],
  }),
  component: Ubicacion,
});

const MAPS_QUERY = "Corporación Educacional San Joaquín Calle Central 17 Nonguén Concepción";

function Ubicacion() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Ubicación</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">Cómo llegar</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Nos encontramos en Calle Central 17, Valle Biobío, Nonguén, en Concepción,
        Región del Bío Bío. Aquí tienes nuestra dirección completa y un mapa para
        planificar tu visita.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa de la Corporación Educacional San Joaquín"
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
            <p className="mt-2 text-base text-foreground">Calle Central 17</p>
            <p className="text-base text-foreground">Valle Biobío, Nonguén</p>
            <p className="text-base text-foreground">4050298 Concepción</p>
            <p className="mt-1 text-base text-foreground">Región del Bío Bío, Chile</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Plus code</h2>
            <p className="mt-2 font-mono text-base text-foreground">5X4R+8J Concepción</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Código para ubicarnos con precisión en Google Maps.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-600 uppercase tracking-wide text-muted-foreground">Horario</h2>
            <p className="mt-2 text-base text-foreground">Abierto · Cierra 18:30</p>
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
