type Item = { name: string; desc?: string; price: string };
type Section = { title: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Backwaren",
    items: [
      { name: "Croissant", price: "3,0" },
      { name: "Pain au chocolat", price: "3,0" },
      { name: "Zimtschnecke", price: "3,5" },
    ],
  },
  {
    title: "Fridas Croissant",
    note: "3 Rühreier im Croissant",
    items: [
      { name: "Natur", price: "11,5" },
      { name: "Speck", price: "12,5" },
      { name: "Lachs", price: "13,5" },
      { name: "Avocado", price: "13,5" },
      { name: "+ Extra Lachs", price: "+3,5" },
      { name: "+ Extra Avocado", price: "+3,5" },
    ],
  },
  {
    title: "Schwarzbrot",
    items: [
      { name: "Ziegenkäse", desc: "mit Avocadocreme & Blaubeeren", price: "11,5" },
      { name: "Lachs", desc: "mit Kräuterfrischkäse & Rucola", price: "11,5" },
      { name: "+ Extra 2 Spiegeleier", price: "+3,5" },
      { name: "+ Extra 3 Rühreier", price: "+3,5" },
    ],
  },
  {
    title: "Bowls & Mehr",
    items: [
      {
        name: "Granola Bowl",
        desc: "Naturjoghurt, Früchte-Mix, Chiasamen, Kokosraspeln, Honig & hausgemachtes Granola",
        price: "8,5",
      },
      {
        name: "Egg Burger",
        desc: "Spiegelei, Avocado, Salat, Spicy Mayo & süß-saure Soße",
        price: "12,5",
      },
    ],
  },
  {
    title: "Hot Coffee",
    items: [
      { name: "Espresso", price: "2,8" },
      { name: "Cappuccino", price: "3,8" },
      { name: "Flat White", price: "4,2" },
      { name: "Latte Macchiato", price: "4,2" },
      { name: "Chai Latte", desc: "homemade", price: "4,5" },
      { name: "Matcha Latte", price: "4,5" },
    ],
  },
  {
    title: "Cold Coffee / Latte",
    items: [
      { name: "Cold Brew", price: "5,0" },
      { name: "Cold Brew Tonic", price: "5,5" },
      { name: "Espresso Tonic", price: "5,5" },
      { name: "Iced Coffee Latte", price: "5,0" },
      { name: "Iced Caramel Latte", price: "5,5" },
      { name: "Iced Chai Latte", desc: "homemade", price: "5,5" },
      { name: "Iced Matcha Latte", price: "5,5" },
    ],
  },
  {
    title: "Tea Time",
    note: "Teekanne 0,4 l",
    items: [
      { name: "Mango-Tango", desc: "Früchtetee", price: "4,5" },
      { name: "China Jasmin", desc: "Grüner Tee", price: "4,5" },
      { name: "Darjeeling", desc: "Schwarzer Tee", price: "4,5" },
      { name: "Kräutertee", price: "4,5" },
      { name: "Knuspertraum", desc: "Gewürztee", price: "4,5" },
      { name: "White Pine Needles", desc: "Weißer Tee", price: "4,0" },
      { name: "Frischer Minztee", price: "4,9" },
      { name: "Frischer Orange-Ingwer-Minztee", price: "4,9" },
    ],
  },
  {
    title: "Soda & Softdrink",
    items: [
      { name: "Wasser", desc: "Naturelle / Classic · 0,25 / 0,75 l", price: "2,8 / 6,4" },
      { name: "Coca Cola", desc: "Zero · 0,2 l", price: "3,1" },
      { name: "Schweppes", desc: "Dry Tonic / Ginger Beer · 0,2 l", price: "3,3" },
      { name: "Proviant Bio", desc: "Apfel- / Rhabarberschorle · 0,33 l", price: "3,8" },
      { name: "Balis", desc: "Basilikum-Ingwer · 0,25 l", price: "3,6" },
    ],
  },
  {
    title: "Säfte",
    items: [
      { name: "Orangensaft", desc: "frisch gepresst · 0,3 l", price: "5,5" },
      { name: "ACE", desc: "Karotte, Orange & Zitrone · 0,3 l", price: "5,9" },
      { name: "AKI", desc: "Apfel, Karotte & Ingwer · 0,3 l", price: "5,9" },
      { name: "Ingwershot", desc: "kaltgepresst · 2 cl", price: "2,5" },
    ],
  },
  {
    title: "Homemade Limo & Iced Tea",
    note: "0,4 l",
    items: [
      { name: "Limo Holunder-Zitrone", price: "4,9" },
      { name: "Limo Schwarze Johannisbeere", price: "4,9" },
      { name: "Limo Himbeere-Zitrone", price: "4,9" },
      { name: "Limo Detox", price: "4,9" },
      { name: "Iced Tea Fresh Lime & Mint", price: "4,9" },
      { name: "Iced Tea Maracuja-Passionsfrucht", price: "4,9" },
      { name: "Iced Tea Wild Peach", price: "4,9" },
    ],
  },
];

export function Speisekarte() {
  return (
    <section id="speisekarte" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-rose">la carta completa</span>
          <h2 className="mt-1 font-display text-5xl font-extrabold md:text-6xl">
            Speisekarte
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Frisch zubereitet, mit Liebe angerichtet. Alle Preise in Euro.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-background p-8 ring-1 ring-border transition hover:ring-jungle/50"
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-4">
                <h3 className="font-display text-2xl font-extrabold text-jungle">
                  {s.title}
                </h3>
                {s.note && (
                  <span className="font-script text-lg text-rose">{s.note}</span>
                )}
              </div>
              <ul className="mt-5 space-y-4">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-foreground">{it.name}</span>
                      </div>
                      {it.desc && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{it.desc}</p>
                      )}
                    </div>
                    <span
                      aria-hidden
                      className="mb-1 flex-1 border-b border-dotted border-border/70"
                    />
                    <span className="shrink-0 font-display text-base font-bold text-rose tabular-nums">
                      €{it.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
