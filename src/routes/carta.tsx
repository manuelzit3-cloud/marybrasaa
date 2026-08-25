import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — Mar y Brasa · Concepción" },
      {
        name: "description",
        content:
          "Carta de Mar y Brasa: ceviches, parrilla a leña, mariscos frescos y postres caseros en Concepción.",
      },
      { property: "og:title", content: "Carta — Mar y Brasa · Concepción" },
      {
        property: "og:description",
        content: "Mariscos frescos y parrilla a leña en Concepción. Conoce nuestra carta.",
      },
    ],
    links: [{ rel: "canonical", href: "/carta" }],
  }),
  component: Carta,
});

type Item = { name: string; desc?: string; price: string };
type Section = { title: string; note?: string; items: Item[] };

const MENU: Section[] = [
  {
    title: "Entradas",
    items: [
      { name: "Ceviche del Día", desc: "Pescado fresco, limón, cebolla morada, cilantro y camote.", price: "$9.800" },
      { name: "Ostiones a la Parrilla", desc: "Ostiones, mantequilla de hierbas y pan tostado.", price: "$12.500" },
      { name: "Empanadas de Marisco", desc: "Dos unidades, masa horneada, relleno de marisco.", price: "$7.500" },
      { name: "Sopa de Mariscos", desc: "Caldo de marisco, ají color y hierbas frescas.", price: "$8.900" },
    ],
  },
  {
    title: "De la Parrilla a leña",
    note: "Cocinado sobre brasas de espino",
    items: [
      { name: "Pulpo a la Brasa", desc: "Tentáculo de pulpo, aceite de pimentón ahumado y sal de mar.", price: "$16.900" },
      { name: "Congrio a las Brasas", desc: "Filete de congrio, mantequilla quemada y hierbas.", price: "$15.500" },
      { name: "Camarones Tigre", desc: "Camarones a la leña, ají y limón.", price: "$14.900" },
      { name: "Mixta Mar y Brasa", desc: "Para dos: camarones, congrio, ostiones y longaniza.", price: "$32.000" },
    ],
  },
  {
    title: "Del Mar",
    items: [
      { name: "Caldillo de Congrio", desc: "Clásico de la casa, caldo cremoso y congrio fresco.", price: "$11.900" },
      { name: "Salmón Ahumado de la Casa", desc: "Ahumado en leña, aliño cítrico y queso fresco.", price: "$13.500" },
      { name: "Machas a la Parmesana", desc: "Machas, parmesano y gratinado al horno.", price: "$10.900" },
    ],
  },
  {
    title: "Postres",
    items: [
      { name: "Leche Asada de la Casa", desc: "Postre tradicional, caramelo y canela.", price: "$4.500" },
      { name: "Tarta de Murta", desc: "Murta del sur, masa sablée y crema.", price: "$5.200" },
      { name: "Helado Artesanal de Murta", desc: "Una bola, hecho en casa.", price: "$4.000" },
    ],
  },
  {
    title: "Vinos & Bebidas",
    note: "Carta de vinos del Itata y BIO-BIO disponible en sala",
    items: [
      { name: "Vino Pipeño de Itata", desc: "Copa · tinto o blanco.", price: "$3.800" },
      { name: "Cerveza Artesanal Local", desc: "Taberna, IPA o rubia.", price: "$4.500" },
      { name: "Pisco Sour de Murta", desc: "Pisco, limón y murta macerada.", price: "$5.500" },
      { name: "Bebidas y Jugos", desc: "Naturales de fruta de la estación.", price: "$2.500" },
    ],
  },
];

function Carta() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <span className="text-sm font-600 uppercase tracking-wide text-accent">Carta</span>
      <h1 className="mt-2 text-4xl font-600 text-foreground sm:text-5xl">Nuestra carta</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Nuestra carta cambia según lo que trae el mar cada mañana. Esta es una
        selección representativa; pregúntale a tu mesero por el producto del día.
      </p>

      <div className="mt-10 space-y-12">
        {MENU.map((s) => (
          <section key={s.title}>
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <h2 className="font-display text-2xl font-600 text-primary">{s.title}</h2>
              {s.note && <span className="text-xs text-muted-foreground">{s.note}</span>}
            </div>
            <ul className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {s.items.map((it) => (
                <li key={it.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-600 text-foreground">{it.name}</h3>
                    <span className="shrink-0 text-sm font-600 text-accent">{it.price}</span>
                  </div>
                  {it.desc && <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        Precios en pesos chilenos incluyen IVA. Productos pueden variar según
        disponibilidad del día. Avísanos de alergias o restricciones al reservar.
      </p>
    </div>
  );
}
