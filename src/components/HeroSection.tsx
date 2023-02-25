import { Header } from "./Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="heroSection">
      <Header></Header>
      <img
        className="profilImg"
        src="/images/profileImg.jpg"
        alt="Profilbild"
      />
      <div className="nameTitleWrapper">
        <h1>Fanny Lundberg</h1>
        <h2 data-aos="fade-down">Frontend Developer</h2>
      </div>
    </section>
  );
}
