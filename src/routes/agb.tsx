import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — Frida's Café Frankfurt" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Frida's Café." },
    ],
  }),
  component: AgbPage,
});

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold pt-6">{children}</h2>;
}

function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        Es gelten die nachfolgenden Allgemeinen Geschäftsbedingungen für den Besuch und
        die Nutzung der Räumlichkeiten sowie für alle Bestellungen im Frida's Café,
        Leipziger Str. 108, 60487 Frankfurt am Main.
      </p>

      <H>1. Geltungsbereich</H>
      <p>
        Diese AGB gelten für sämtliche gastronomischen Leistungen von Frida's Café
        gegenüber Gästen sowie für die Nutzung dieser Website.
      </p>

      <H>2. Reservierung &amp; Sitzplätze</H>
      <p>
        Reservierungen sind nicht möglich. Plätze werden ausschließlich nach
        Verfügbarkeit und in der Reihenfolge des Eintreffens vergeben.
      </p>

      <H>3. Preise &amp; Zahlung</H>
      <p>
        Es gelten die in der Speisekarte bzw. am Tresen ausgehängten Preise inklusive
        gesetzlicher Mehrwertsteuer. Die Bezahlung erfolgt im Café direkt nach Erhalt
        der Rechnung.
      </p>

      <H>4. Allergene &amp; Zusatzstoffe</H>
      <p>
        Hinweise zu Allergenen und Zusatzstoffen erhalten Sie auf Nachfrage bei unserem
        Personal sowie auf der Speisekarte.
      </p>

      <H>5. Hausrecht</H>
      <p>
        Frida's Café behält sich das Hausrecht vor. Anweisungen des Personals ist Folge
        zu leisten.
      </p>

      <H>6. Haftung</H>
      <p>
        Für mitgebrachte Garderobe und Gegenstände wird keine Haftung übernommen,
        sofern nicht grobe Fahrlässigkeit oder Vorsatz vorliegt.
      </p>

      <H>7. Schlussbestimmungen</H>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
        Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt.
      </p>
    </LegalLayout>
  );
}
