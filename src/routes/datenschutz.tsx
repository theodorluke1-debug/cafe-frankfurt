import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Frida's Café Frankfurt" },
      { name: "description", content: "Datenschutzerklärung von Frida's Café." },
    ],
  }),
  component: DatenschutzPage,
});

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold pt-6">{children}</h2>;
}

function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutz">
      <p>
        Die nachfolgenden Datenschutzrichtlinien gelten für die Nutzung unseres
        Online-Angebots www.fridas-cafe.de (nachfolgend „Website").
      </p>
      <p>
        Wir messen dem Datenschutz große Bedeutung bei. Die Erhebung und Verarbeitung
        Ihrer personenbezogenen Daten geschieht unter Beachtung der geltenden
        datenschutzrechtlichen Vorschriften, insbesondere der
        Datenschutzgrundverordnung (DSGVO).
      </p>

      <H>Verantwortlicher</H>
      <p>
        Verantwortlicher für die Erhebung, Verarbeitung und Nutzung Ihrer
        personenbezogenen Daten im Sinne von Art. 4 Nr. 7 DSGVO ist Cagdas Telli,
        Frida's Café, Leipziger Str. 108, 60487 Frankfurt am Main.
      </p>

      <H>Allgemeine Zwecke der Verarbeitung</H>
      <p>
        Wir verwenden personenbezogene Daten zum Zweck des Betriebs der Website.
      </p>

      <H>Zugriffsdaten</H>
      <p>
        Wir erheben Informationen über Sie, wenn Sie diese Website nutzen. Wir erfassen
        automatisch Informationen über Ihr Nutzungsverhalten und registrieren Daten zu
        Ihrem Computer oder Mobilgerät (sogenannte Serverlogfiles): Name und URL der
        abgerufenen Datei, Datum und Uhrzeit, übertragene Datenmenge, Browsertyp,
        Betriebssystem, Referer-URL, IP-Adresse u.ä.
      </p>
      <p>
        Wir nutzen diese Protokolldaten ohne Zuordnung zu Ihrer Person für
        statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der
        Optimierung unserer Website. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 f) DSGVO.
      </p>

      <H>Cookies</H>
      <p>
        Wir verwenden Session-Cookies, um unsere Website zu optimieren. Diese Cookies
        werden gelöscht, nachdem Sie Ihren Browser schließen. In geringem Umfang nutzen
        wir auch persistente Cookies, um Ihren Browser beim nächsten Besuch
        wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das
        Setzen von Cookies informiert werden.
      </p>

      <H>E-Mail-Kontakt</H>
      <p>
        Wenn Sie mit uns in Kontakt treten (z.&nbsp;B. per E-Mail), verarbeiten wir Ihre
        Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 b)
        bzw. f) DSGVO.
      </p>

      <H>Google Analytics</H>
      <p>
        Wir benutzen Google Analytics mit aktivierter IP-Anonymisierung
        (anonymizeIp). Sie können die Erfassung durch Google Analytics jederzeit über
        ein Browser-Plugin oder Opt-Out-Cookie verhindern.
      </p>

      <H>Speicherdauer</H>
      <p>
        Sofern nicht spezifisch angegeben, speichern wir personenbezogene Daten nur so
        lange, wie dies zur Erfüllung der verfolgten Zwecke notwendig ist oder
        gesetzliche Aufbewahrungsfristen es erfordern.
      </p>

      <H>Ihre Rechte</H>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
        Außerdem haben Sie das Recht auf Beschwerde bei einer Aufsichtsbehörde.
      </p>
      <p>
        Anfragen richten Sie bitte per E-Mail an info@fridas-cafe.de oder per Post an
        die im Impressum genannte Adresse.
      </p>
    </LegalLayout>
  );
}
