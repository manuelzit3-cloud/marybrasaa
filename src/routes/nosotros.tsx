import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Mar y Brasa · Concepción" },
      {
        name: "description",
        content:
          "Conoce la historia de Mar y Brasa, restaurant de mariscos y parrilla a leña en el centro de Concepción.",
      },
      { property: "og:title", content: "Nosotros — Mar y Brasa · Concepción" },
      {
        property: "og:description",
        content:
          "Cocina de autor a la leña en Concepción. Historia y filosofía de Mar y Brasa.",
      },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Nosotros</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">
        Brasas que cuentan historias del mar
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">
        Mar y Brasa nació en 2014 como una fonda de mariscos frente al mar de
        Talcahuano. Hoy es un restaurant en el centro de Concepción que mantiene
        viva esa misma llama: cocinar el producto del día sobre brasas de espino,
        con respeto por el oficio y calidez de mesa.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {[
          { t: "Nuestra cocina", d: "Brasas de leña de espino, pescados y mariscos frescos del día, y vegetales de productores del valle del Itata. Sin atajos." },
          { t: "El producto", d: "Compramos cada mañana en las caletas de Talcahuano y Lenga. Lo que hay en la carta depende de lo que trajo el mar." },
          { t: "El equipo", d: "Un equipo pequeño y constante, dirigido por su chef fundador. Cocina honesta, hecha con manos que conocen cada plato." },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-600 text-primary">{b.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-secondary/40 p-8">
        <h2 className="text-2xl font-600 text-foreground">Una mesa frente al fuego</h2>
        <p className="mt-4 text-base text-muted-foreground">
          Nuestras mesas miran a la parrilla a leña. Queremos que quienes nos
          visiten vivan la cocina: el crujido de las brasas, el humo justo sobre
          el congrio y el olor a mar que trae cada proveedor al amanecer. Por eso
          decimos que en Mar y Brasa se come lo que el día trajo, cocinado como se
          debe.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Mariscos y pescados frescos comprados cada mañana",
            "Parrilla a leña de espino, sin gas ni eléctrica",
            "Carta de vinos del Itata y BIO-BIO",
            "Reservas para grupos y eventos privados",
          ].map((li) => (
            <li key={li} className="flex items-start gap-3 text-sm text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
