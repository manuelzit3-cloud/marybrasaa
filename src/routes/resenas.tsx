import { createFileRoute } from "@tanstack/react-router";

type Review = {
  name: string;
  meta: string;
  text: string;
  stars: number;
};

const REVIEWS: Review[] = [
  { name: "Maite Araya", meta: "Hace 7 meses", stars: 5, text: "Yo soy Maite Araya ya pasé a cuarto y si ustedes maestras están escuchando este mensaje es que les quiero decir que las amo y que están cuidando bien a nuestro colegio, las quiero y las amo, espero que pronto nos podamos ver en el colegio." },
  { name: "Davis Fernández", meta: "Local Guide · Hace 2 meses", stars: 5, text: "Buen trato." },
  { name: "Gabriela Saavedra", meta: "Hace 4 años", stars: 5, text: "Es genial este colegio, yo aún sigo en el colegio, apenas cumplo 8 años y voy en segundo básico, ya casi pasamos a verano y voy a pasar a tercero, adiós." },
  { name: "Paulina Machuca", meta: "Hace 9 años", stars: 5, text: "Me encanta este colegio, es muy bueno." },
  { name: "ʕ́•ᴥ•`ʔ catita;;", meta: "Hace 6 años", stars: 5, text: "Que nostalgia... Era mi colegio en 2013 o 12 creo yo, apenas con 5 años." },
  { name: "Ana Escalona", meta: "Hace 8 años", stars: 5, text: "El mejor colegio en el que he estado, extraño el colegio y a los profesores." },
  { name: "Jocelin Zambrano", meta: "Hace 10 años", stars: 5, text: "Muy buen cole :)" },
  { name: "Francisca Venturelli", meta: "Hace 11 años", stars: 5, text: "Es un muy buen colegio, a excepción de algunos alumnos." },
  { name: "Humilde de las Mercedes Hormazabal", meta: "Hace 11 años", stars: 5, text: "Hola, soy Tiare, quiero saber si puedo encontrar a una tía." },
  { name: "Sofia Huenchuman", meta: "Hace 9 años", stars: 5, text: "Muy gracioso por su apoyo, les agradezco mucho." },
  { name: "Kssk Hdjd", meta: "Hace 11 meses", stars: 1, text: "Mala experiencia, tuvimos que sacar a mi primita porque sus compañeras la molestaban y la dejaron muy mal." },
];

export const Route = createFileRoute("/resenas")({
  head: () => ({
    meta: [
      { title: "Reseñas — Corporación Educacional San Joaquín" },
      {
        name: "description",
        content:
          "Reseñas reales de la Corporación Educacional San Joaquín en Concepción. Valoración 4,0 sobre 5 con 22 reseñas en Google.",
      },
      {
        property: "og:title",
        content: "Reseñas — Corporación Educacional San Joaquín",
      },
      {
        property: "og:description",
        content:
          "Valoración 4,0 sobre 5 con 22 reseñas en Google para el colegio San Joaquín de Concepción.",
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
      <span className="w-6 text-right text-muted-foreground">{count}</span>
    </div>
  );
}

function Resenas() {
  const counts = { 5: 9, 4: 5, 3: 2, 2: 1, 1: 5 } as const;
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Reseñas</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">
        Lo que dice nuestra comunidad
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr]">
        {/* Summary */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-600 text-primary">4,0</span>
            <span className="text-sm text-muted-foreground">/ 5</span>
          </div>
          <div className="mt-2"><Stars value={4} /></div>
          <p className="mt-1 text-sm text-muted-foreground">22 reseñas en Google</p>
          <div className="mt-6 space-y-2">
            <Bar label="5★" count={counts[5]} total={22} />
            <Bar label="4★" count={counts[4]} total={22} />
            <Bar label="3★" count={counts[3]} total={22} />
            <Bar label="2★" count={counts[2]} total={22} />
            <Bar label="1★" count={counts[1]} total={22} />
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
