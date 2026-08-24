import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Corporación Educacional San Joaquín" },
      {
        name: "description",
        content:
          "Conoce la misión y la comunidad de la Corporación Educacional San Joaquín, colegio del Valle Biobío en Nonguén, Concepción.",
      },
      {
        property: "og:title",
        content: "Nosotros — Corporación Educacional San Joaquín",
      },
      {
        property: "og:description",
        content:
          "Conoce la misión y la comunidad del colegio San Joaquín en Nonguén, Concepción.",
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
        Formando desde el corazón del Valle Biobío
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">
        La Corporación Educacional San Joaquín es un centro educativo de
        Nonguén, Concepción, que ha acompañado a las familias de la zona por
        más de una década. Combinamos calidez humana, cercanía con cada
        estudiante y una formación integral que prepara a niños y niñas para
        crecer con valores.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {[
          { t: "Misión", d: "Ofrecer una educación cercana y de calidad, donde cada estudiante se sienta parte de una familia escolar que lo apoya y lo impulsa a dar lo mejor de sí." },
          { t: "Visión", d: "Ser un colegio reconocido en el Valle Biobío por su calidez, su sentido de comunidad y el cariño con que acompaña a sus estudiantes y apoderados." },
          { t: "Valores", d: "Respeto, responsabilidad, compañerismo y cariño. Creemos que aprender es también crecer como persona, dentro y fuera de la sala de clases." },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-600 text-primary">{b.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-secondary/40 p-8">
        <h2 className="text-2xl font-600 text-foreground">Una comunidad que cuida su colegio</h2>
        <p className="mt-4 text-base text-muted-foreground">
          Generaciones de estudiantes han pasado por nuestras aulas y muchos
          vuelven con nostalgia, recordando a sus profesores y a sus
          compañeros. Esa cercanía es lo que nos define: un colegio donde se
          aprende, pero sobre todo donde se vive comunidad.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Atención cercana entre profesores, estudiantes y apoderados",
            "Formación integral con énfasis en valores y compañerismo",
            "Ubicación accesible en Nonguén, Concepción",
            "Horario extendido para acompañar a las familias",
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
