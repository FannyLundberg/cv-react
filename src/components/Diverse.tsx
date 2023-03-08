import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Diverse() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="diverseSection" data-aos="fade-down">
      <h3>Övrigt</h3>
      <h4>Styrelsemedlem (feb 2021 – apr 2022)</h4>
      <p>Styrelsemedlem i samfällighetsförening</p>
      <h4>World Class Nacka (jan 2015 – apr 2016)</h4>
      <p>Instruktör på ett spinning-/RPM-pass i veckan</p>
    </section>
  );
}
