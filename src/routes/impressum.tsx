import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Frida's Café Frankfurt" },
      { name: "description", content: "Impressum von Frida's Café in Frankfurt am Main." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p>
        <strong>Frida's Café</strong>
        <br />
        Leipziger Str. 108
        <br />
        60487 Frankfurt am Main
      </p>
      <p>
        Geschäftsführer: Yoldas Can Telli
        <br />
        USt.-ID: 01387414671
      </p>
      <p>
        Tel. 069 / 27273023
        <br />
        info@fridas-cafe.de
        <br />
        www.fridas-cafe.de
      </p>
      <p className="text-sm text-muted-foreground">
        Die auf der Website verwendeten Bilder und Eindrücke stammen teilweise vom Blog
        „Frankfurt du bist so wunderbar". Mehr Informationen unter
        www.frankfurtdubistsowunderbar.de
      </p>
      <h2 className="font-display text-2xl font-bold pt-6">Haftung für Inhalte</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
        Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      </p>
      <h2 className="font-display text-2xl font-bold pt-6">Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
        keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
        Gewähr übernehmen.
      </p>
      <h2 className="font-display text-2xl font-bold pt-6">Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht.
      </p>
    </LegalLayout>
  );
}
