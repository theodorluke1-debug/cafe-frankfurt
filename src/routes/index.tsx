import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import pancakesImg from "@/assets/pancakes.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import brunchImg from "@/assets/brunch.jpg";
import { Star, MapPin, Clock, Phone, Instagram, Newspaper } from "lucide-react";
import { Speisekarte } from "@/components/Speisekarte";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frida's Café — Brunch & Kaffee in Frankfurt am Main" },
      {
        name: "description",
        content:
          "Charmantes Café in Frankfurt mit Pancakes, Brunch, Flammkuchen und exzellentem Kaffee. Inspiriert von Frida Kahlo. Leipziger Straße.",
      },
      { property: "og:title", content: "Frida's Café Frankfurt" },
      { property: "og:description", content: "Pancakes, Brunch & Kaffee mit Charme." },
    ],
  }),
  component: Index,
});

const menu = [
  {
    title: "Lotus Pancakes",
    desc: "Fluffige Pancakes, karamellisierte Lotus-Creme, frische Beeren.",
    price: "12,50",
    img: pancakesImg,
    tag: "Signature",
  },
  {
    title: "Fridas Brunch",
    desc: "Avocado-Toast, pochiertes Ei, Sourdough, Mikrokräuter.",
    price: "14,00",
    img: brunchImg,
    tag: "Beliebt",
  },
  {
    title: "Flat White",
    desc: "Doppelter Espresso, samtige Mikroschaum-Milch.",
    price: "4,20",
    img: coffeeImg,
    tag: "Barista",
  },
];

const reviews = [
  {
    name: "René K.",
    text: "Wundervolles Café mit ganz viel Charme! Köstlicher Matcha Latte, perfekter Flat White und herrlicher Apfelkuchen.",
    when: "vor 6 Monaten",
  },
  {
    name: "Ellapropella",
    text: "Fantastischer Start in den Tag mit super leckerem Frühstück. Frisch, tolle Qualität und optisch sehr ansprechend angerichtet.",
    when: "vor 9 Monaten",
  },
  {
    name: "Chiara",
    text: "Wir waren zum Brunchen da – das Warten hat sich definitiv gelohnt! Die Pancakes mit der Nutella-Spritze sind absolut zu empfehlen.",
    when: "vor 3 Jahren",
  },
  {
    name: "Nadire S.",
    text: "Verdient in allen Bereichen 5 Punkte. Sehr angenehme Atmosphäre, die Musik passend zum Konzept, frische Zutaten.",
    when: "vor 2 Jahren",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Menu />
      <Speisekarte />
      <About />
      <Reviews />
      <Press />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-2xl font-extrabold tracking-tight text-cream">
          Frida<span className="text-marigold">.</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-cream/90 md:flex">
          <a href="#menu" className="hover:text-marigold transition">Speisekarte</a>
          <a href="#about" className="hover:text-marigold transition">Über uns</a>
          <a href="#reviews" className="hover:text-marigold transition">Rezensionen</a>
          <a href="#visit" className="hover:text-marigold transition">Besuch</a>
        </nav>
        <a
          href="#visit"
          className="rounded-full bg-marigold px-5 py-2 text-sm font-semibold text-foreground shadow-lg shadow-black/10 transition hover:scale-105"
        >
          Tisch finden
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Frida's Café Innenraum"
        width={1600}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/40 to-jungle/60" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-32">
        <span className="font-script text-3xl text-marigold">¡Bienvenidos!</span>
        <h1 className="mt-2 max-w-3xl font-display text-6xl font-extrabold leading-[1.05] text-cream md:text-8xl">
          Ein Stück <em className="text-marigold not-italic">México</em>
          <br />
          mitten in Frankfurt.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Handgemachte Pancakes, Brunch mit Liebe und Kaffee, der den Tag verändert –
          inspiriert von der Farbenwelt Frida Kahlos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="rounded-full bg-marigold px-8 py-4 text-base font-semibold text-foreground shadow-xl transition hover:-translate-y-0.5"
          >
            Speisekarte ansehen
          </a>
          <a
            href="#visit"
            className="rounded-full border border-cream/40 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/10"
          >
            So findest du uns
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "4,4", l: "Sterne auf Google" },
    { v: "1.565", l: "Bewertungen" },
    { v: "10+", l: "Jahre Frankfurt" },
    { v: "100%", l: "Hausgemacht" },
  ];
  return (
    <section className="border-y border-border bg-cream py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <div className="font-display text-4xl font-extrabold text-jungle md:text-5xl">{i.v}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="font-script text-2xl text-rose">la carta</span>
            <h2 className="mt-1 font-display text-5xl font-extrabold text-foreground md:text-6xl">
              Was die Gäste lieben
            </h2>
          </div>
          <p className="hidden max-w-sm text-muted-foreground md:block">
            Klein, fein und mit Sorgfalt zubereitet. Eine Auswahl aus Brunch, Kuchen
            und Specialty Coffee.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {menu.map((m) => (
            <article
              key={m.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-marigold px-3 py-1 text-xs font-semibold text-foreground">
                  {m.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{m.title}</h3>
                  <span className="font-display text-xl font-bold text-rose">€{m.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-jungle py-28 text-cream">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="font-script text-2xl text-marigold">nuestra historia</span>
          <h2 className="mt-1 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            Farbe, Wärme und ein guter Espresso.
          </h2>
          <p className="mt-6 text-cream/80">
            Frida's Café in der Leipziger Straße ist mehr als ein Frühstücksort. Inspiriert
            von der mexikanischen Künstlerin Frida Kahlo verbinden wir farbenfrohes
            Interieur mit ehrlicher Küche – frisch, hausgemacht, freundlich.
          </p>
          <ul className="mt-8 space-y-3 text-cream/90">
            {[
              "Specialty Coffee von ausgewählten Röstern",
              "Pancakes, Wraps, Flammkuchen & Tagesgerichte",
              "Vegetarische und vegane Optionen",
              "Im Sommer schöne Terrasse mit Blick aufs Bockenheimer Treiben",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rotate-3 rounded-[2rem] bg-marigold/30 blur-2xl" />
          <img
            src={coffeeImg}
            alt="Flat White auf Holztisch"
            loading="lazy"
            width={900}
            height={1100}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 max-w-[200px] rotate-[-4deg] rounded-2xl bg-rose px-5 py-4 text-sm font-medium text-cream shadow-xl">
            „Wundervolles Café mit ganz viel Charme."
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-script text-2xl text-rose">opiniones</span>
            <h2 className="mt-1 font-display text-5xl font-extrabold md:text-6xl">
              Was unsere Gäste sagen
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-card px-5 py-3 ring-1 ring-border">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-marigold text-marigold" />
              ))}
            </div>
            <span className="font-semibold">4,4</span>
            <span className="text-sm text-muted-foreground">· 1.565 Bewertungen</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`flex h-full flex-col rounded-3xl p-6 shadow-sm ring-1 ring-border ${
                i % 2 === 0 ? "bg-card" : "bg-marigold/15"
              }`}
            >
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-marigold text-marigold" />
                ))}
              </div>
              <blockquote className="mt-4 grow text-sm leading-relaxed text-foreground/85">
                „{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-muted-foreground">{r.when}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const items = [
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Leipziger Straße 108", "60487 Frankfurt am Main"],
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      lines: ["Mo – Sa · 09:00 – 22:00", "So & Feiertage · 10:00 – 21:00"],
    },
    {
      icon: Phone,
      title: "Kontakt",
      lines: ["+49 (0) 69 27273023", "info@fridas-cafe.de"],
    },
    {
      icon: Instagram,
      title: "Good to know",
      lines: ["Keine Reservierung", "Einfach vorbeikommen"],
    },
  ];
  return (
    <section id="visit" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-rose">visítanos</span>
          <h2 className="mt-1 font-display text-5xl font-extrabold md:text-6xl">
            Komm vorbei.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Mitten in Bockenheim. Frühstück bis spät, Kuchen den ganzen Tag,
            und im Sommer eine der schönsten Terrassen der Stadt.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl bg-background p-6 ring-1 ring-border transition hover:ring-jungle"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-jungle text-cream">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{it.title}</h3>
              {it.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="bg-rose py-28 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[auto_1fr] md:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cream/15 backdrop-blur">
          <Newspaper className="h-7 w-7" />
        </div>
        <div>
          <span className="font-script text-2xl text-marigold">la prensa</span>
          <h2 className="mt-1 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Neu in Bockenheim: Frida's Café
          </h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-cream/70">
            Veröffentlicht auf frankfurtdubistsowunderbar.de
          </p>
          <div className="mt-6 space-y-4 text-cream/90 md:text-lg">
            <p>
              Es gibt wieder etwas Neues zum Kaffeetrinken in Frankfurt! Genauer gesagt
              in Bockenheim. Fridas Café heißt der gastronomische Neuzugang in der
              Leipziger Straße.
            </p>
            <p>
              Die Brüder Cadag und Yoldas Telli haben das „Gastro-Gen" schon von ihrem
              Vater in die Wiege gelegt bekommen. In Bockenheim aufgewachsen war es für
              die Telli-Brüder nur logisch, ihr eigenes Café im Heimatviertel zu eröffnen:
              <em> „Wir kommen hier einfach nicht raus!"</em>
            </p>
          </div>
          <a
            href="https://frankfurtdubistsowunderbar.de"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-rose transition hover:scale-105"
          >
            Read the whole story →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-14 text-cream/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl font-extrabold text-cream">
              Frida<span className="text-marigold">.</span>
            </div>
            <p className="mt-3 text-sm">Eat, drink &amp; socialize at Frida's.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-display text-base font-bold text-cream">Way to our heart</h4>
            <p className="mt-3">Leipziger Straße 108<br />60487 Frankfurt am Main</p>
            <p className="mt-3">+49 (0) 69 27273023<br />info@fridas-cafe.de</p>
          </div>
          <div className="text-sm">
            <h4 className="font-display text-base font-bold text-cream">Open daily</h4>
            <p className="mt-3">Mo – Sa · 09 – 22 h<br />So &amp; Feiertage · 10 – 21 h</p>
            <div className="mt-5 flex gap-4">
              <Link to="/impressum" className="hover:text-marigold transition">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-marigold transition">Datenschutz</Link>
              <Link to="/agb" className="hover:text-marigold transition">AGB</Link>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-cream/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Frida's Café · Frankfurt am Main
        </p>
      </div>
    </footer>
  );
}
