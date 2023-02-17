import { Header } from "./Header";

export function HeroSection() {
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
        <h2>Frontend Developer</h2>
      </div>
    </section>
  );
}
