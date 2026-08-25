import { createFileRoute } from "@tanstack/react-router";

type Review = { name: string; meta: string; text: string; stars: number };

const REVIEWS: Review[] = [
  { name: "Javiera Rojas", meta: "Hace 2 semanas", stars: 5, text: "El mejor pulpo a la brasa que he probado en Concepción. Servicio impecable y ambiente cálido." },
  { name: "Felipe Cárdenas", meta: "Local Guide · Hace 1 mes", stars: 5, text: "Ambiente cálido, vinos excelentes y la parrilla mixta espectacular. Volveremos seguro." },
  { name: "Diego Muñoz", meta: "Hace 1 mes", stars: 5, text: "Ceviche fresquísimo y atención de primero. Un imperdible del centro de Concepción." },
  { name: "Camila Soto", meta: "Hace 2 meses", stars: 4, text: "Bonito lugar, buena comida. Tardaron un poco los platos pero valió la pena la espera." },
  { name: "Rodrigo Pérez", meta: "Hace 3 meses", stars: 5, text: "Fuimos en aniversario y nos trataron increíble. El congrio a las brasas, de otro nivel." },
  { name: "Francisca Lobos", meta: "Hace 3 meses", stars: 4, text: "Precios altos pero la calidad los justifica. Recomendado para una cita o celebración." },
  { name: "Ignacio Bravo", meta: "Hace 4 meses", stars: 5, text: "El mejor restaurant de mariscos de Concepción, sin duda. Volveré con mi familia." },
  { name: "Antonia Vega", meta: "Local Guide · Hace 5 meses", stars: 5, text: "Linda carta de vinos locales. La tarta de murta es un final perfecto." },
  { name: "Manuel Fuentes", meta: "Hace 6 meses", stars: 3, text: "Caro para lo que esperábamos, igual rico. El ambiente compensa bastante." },
  { name: "Paula Riquelme", meta: "Hace 7 meses", stars: 5, text: "Parrilla impecable y postres caseros. Reservamos para un grupo grande y todo perfecto." },
];

export const Route = createFileRoute("/resenas")({
  head: () => ({
    meta: [
      { title: "Reseñas — Mar y Brasa · Concepción" },
      {
        name: "description",
        content:
          "Reseñas de Mar y Brasa en Concepción. Valoración 4,7 sobre 5 con 487 reseñas en Google.",
      },
      { property: "og:title", content: "Reseñas — Mar y Brasa · Concepción" },
      {
        property: "og:description",
        content: "Valoración 4,7 sobre 5 con 487 reseñas en Google para Mar y Brasa, Concepción.",
      },
    ],
    links: [{ rel: "canonical", href: "/resenas" }],
  }),
  component: Resenas,
});

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < value ? "var(--color-accent)" : "none"} stroke="var(--color-accent)" strokeWidth="1.5">
          <path d="M12 2l3 6.5 7 .9-5 4.8 1.4 7L12 17.8 5.6 21.2 7 14.2 2 9.4l7-.9z" />
        </svg>
      ))}
    </div>
  );
}

function Bar({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-10 text-muted-foreground">{label}</span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 text-right text-muted-foreground">{count}</span>
    </div>
  );
}

function Resenas() {
  const counts = { 5: 410, 4: 52, 3: 14, 2: 6, 1: 5 } as const;
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Reseñas</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">
        Lo que dicen nuestros comensales
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr]">
        {/* Summary */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-600 text-primary">4,7</span>
            <span className="text-sm text-muted-foreground">/ 5</span>
          </div>
          <div className="mt-2"><Stars value={5} /></div>
          <p className="mt-1 text-sm text-muted-foreground">487 reseñas en Google</p>
          <div className="mt-6 space-y-2">
            <Bar label="5★" count={counts[5]} total={487} />
            <Bar label="4★" count={counts[4]} total={487} />
            <Bar label="3★" count={counts[3]} total={487} />
            <Bar label="2★" count={counts[2]} total={487} />
            <Bar label="1★" count={counts[1]} total={487} />
          </div>
        </div>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-5">
              <figcaption className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-600 text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.meta}</p>
                </div>
                <Stars value={r.stars} />
              </figcaption>
              <blockquote className="mt-3 text-sm text-muted-foreground">{r.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
