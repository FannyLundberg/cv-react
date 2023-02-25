import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Work() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="workSection" data-aos="fade-down">
      <h3>Arbetslivserfarenhet</h3>
      <h4>Sergel Kredittjänster (aug 2015 – nuvarande/tjänstledig)</h4>
      <p>
        Jag har ansvarat över förvaltning och utveckling för telefoni- och
        schemasystemet. Allt från att utbilda nyanställda i funktionalitet till
        att driva projekt av implementering för nya funktioner. Det är en
        koordinerande roll där jag har samarbetat med stora delar av
        organisationen för att säkerställa behovet, beställa, testa leveransen
        och ha kontakten med leverantören.
      </p>
      <p>
        Innan denna roll arbetade jag som Inkasso- och reskontrahandläggare
        (2015 - 2018).
      </p>
      <h4>Student Consulting (aug 2013 – apr 2015)</h4>
      <p>
        Personaladministratör inom ekonomi – Beräkning av löner där jag t.ex.
        kontrollerade att det stämde mot kollektivavtal, kontakt med
        konsultchefer och fakturering till kunder{" "}
      </p>
      <h4>KappAhl (feb 2009 – aug 2013)</h4>
      <p>
        Säljare med ansvar för upplärning av nyanställda, praktikanthandledning,
        dagliga kassaavstämningar, omhängningar i butik med mera
      </p>
      <h4>Värmdö kommun (apr 2010 – apr 2011)</h4>
      <p>
        Som Värmdö Polare jobbar man för Värmdö kommun som fältassistent. Det är
        ungdomar mellan 17 till 19 år som jobbar helgkvällar, genom att åka och
        gå runt för att träffa ungdomar för att skapa ett lugnare och tryggare
        Värmdö
      </p>
    </section>
  );
}
