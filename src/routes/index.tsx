import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import platoPulpo from "../assets/plato-pulpo.jpg";
import platoParrilla from "../assets/plato-parrilla.jpg";
import platoCeviche from "../assets/plato-ceviche.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mar y Brasa · Cocina de autor | Concepción, Bío Bío" },
      {
        name: "description",
        content:
          "Restaurant de mariscos y parrilla a leña en el centro de Concepción. O'Higgins 245. Abierto mar a domingo. Reservas al (41) 233 4400.",
      },
      {
        property: "og:title",
        content: "Mar y Brasa · Cocina de autor | Concepción",
      },
      {
        property: "og:description",
        content:
          "Mariscos frescos y parrilla a leña en el corazón de Concepción. O'Higgins 245.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const SIGNATURE = [
  { name: "Pulpo a la Brasa", desc: "Tentáculo de pulpo a las brasas, aceite de pimentón ahumado y sal de mar.", price: "$16.900", img: platoPulpo },
  { name: "Mixta Mar y Brasa", desc: "Parrilla para dos: camarones, congrio, ostiones y longaniza a la leña.", price: "$32.000", img: platoParrilla },
  { name: "Ceviche del Día", desc: "Pescado fresco del día, limón, cebolla morada, cilantro y camote.", price: "$9.800", img: platoCeviche },
] as const;

const HIGHLIGHTS = [
  { title: "Parrilla a leña", text: "Cocinamos sobre brasas de espino, leña que entrega el ahumado justo a mariscos y pescados.", icon: "flame" },
  { title: "Producto del día", text: "Compramos fresco cada mañana en la caleta de Caleta Lenga y Talcahuano.", icon: "wave" },
  { title: "Carta de vinos", text: "Más de 60 etiquetas del valle de Itata y BIO-BIO para maridar cada plato.", icon: "wine" },
] as const;

function Icon({ name }: { name: "flame" | "wave" | "wine" | "pin" | "clock" }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "flame")
    return (
      <svg {...common}>
        <path d="M12 2c2 4 5 5 5 9a5 5 0 0 1-10 0c0-1.5.5-2.5 1-3 .5 1 1.5 1.5 2 1 0-2-1-4 2-7z" />
      </svg>
    );
  if (name === "wave")
    return (
      <svg {...common}>
        <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      </svg>
    );
  if (name === "wine")
    return (
      <svg {...common}>
        <path d="M8 3h8l-1 6a4 4 0 0 1-6 0L8 3z" />
        <path d="M12 13v6M9 21h6" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < Math.round(value) ? "var(--color-accent)" : "none"} stroke="var(--color-accent)" strokeWidth="1.5">
          <path d="M12 2l3 6.5 7 .9-5 4.8 1.4 7L12 17.8 5.6 21.2 7 14.2 2 9.4l7-.9z" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Salón de Mar y Brasa con mesa servida y velas"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 sm:pb-20">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-accent-foreground/80" /> Cocina de autor · Concepción
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-600 leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Mar y Brasa
            </h1>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Mariscos frescos y parrilla a leña en el corazón de Concepción.
              Brasas de espino, producto del día y vinos del Itata.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-600 text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Reservar mesa
              </Link>
              <Link
                to="/carta"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-600 text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                Ver la carta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-start gap-3 px-4 py-6">
            <span className="mt-1 text-accent"><Icon name="pin" /></span>
            <div>
              <p className="text-xs font-600 uppercase tracking-wide text-muted-foreground">Dirección</p>
              <p className="mt-1 text-sm text-foreground">O'Higgins 245, Centro, Concepción</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-4 py-6">
            <span className="mt-1 text-accent"><Icon name="clock" /></span>
            <div>
              <p className="text-xs font-600 uppercase tracking-wide text-muted-foreground">Horario</p>
              <p className="mt-1 text-sm text-foreground">Mar–Sáb 13:00–23:30 · Dom 13:00–17:00</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-4 py-6">
            <span className="mt-1 text-accent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-600 uppercase tracking-wide text-muted-foreground">Reservas</p>
              <p className="mt-1 text-sm text-foreground">
                <a href="tel:+56412334400" className="hover:text-accent">(41) 233 4400</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-600 text-foreground sm:text-4xl">Cocina de autor a la leña</h2>
          <p className="mt-4 text-base text-muted-foreground">
            En Mar y Brasa cocinamos cada plato sobre brasas de espino, con
            mariscos y pescados que llegan frescos cada mañana desde las caletas
            de Talcahuano y Lenga. Una experiencia cálida, honesta y de sabor
            profundo.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon name={h.icon} />
              </div>
              <h3 className="mt-4 text-xl font-600 text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature dishes */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-600 text-foreground sm:text-4xl">Platos signature</h2>
              <p className="mt-3 text-base text-muted-foreground">Una selección de lo que define nuestra cocina.</p>
            </div>
            <Link to="/carta" className="hidden shrink-0 items-center gap-2 text-sm font-600 text-primary hover:text-accent sm:inline-flex">
              Ver carta completa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SIGNATURE.map((d) => (
              <article key={d.name} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={d.img} alt={d.name} width={800} height={600} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-600 text-foreground">{d.name}</h3>
                    <span className="text-sm font-600 text-accent">{d.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rating summary */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-stretch">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-10 py-8 text-center">
            <span className="font-display text-6xl font-600 text-primary">4,7</span>
            <div className="mt-3"><Stars value={5} /></div>
            <p className="mt-2 text-sm text-muted-foreground">487 reseñas en Google</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-600 text-foreground sm:text-3xl">Lo que dicen nuestros comensales</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <blockquote className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-foreground">
                  “El mejor pulpo a la brasa que he probado en Concepción. Servicio impecable.”
                </p>
                <footer className="mt-3 text-xs text-muted-foreground">— Javiera Rojas</footer>
              </blockquote>
              <blockquote className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-foreground">
                  “Ambiente cálido, vinos excelentes y la parrilla mixta espectacular. Volveremos.”
                </p>
                <footer className="mt-3 text-xs text-muted-foreground">— Felipe Cárdenas</footer>
              </blockquote>
            </div>
            <Link
              to="/resenas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-600 text-primary hover:text-accent"
            >
              Ver todas las reseñas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-600 text-primary-foreground sm:text-4xl">¿Reservamos tu mesa?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85">
            Visítanos en O'Higgins 245, Concepción, o llámanos al (41) 233 4400.
            Te esperamos de martes a domingo.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-600 text-accent-foreground"
            >
              Reservar
            </Link>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=O%27Higgins+245+Concepcion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-600 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
