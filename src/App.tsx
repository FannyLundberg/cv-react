import "./App.css";
import { Diverse } from "./components/Diverse";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { TechStack } from "./components/TechStack";
import { Work } from "./components/Work";

function App() {
  return (
    <div>
      <HeroSection />
      <main>
        <TechStack />
        <Education />
        <Work />
        <Diverse />
      </main>
      <Footer />
    </div>
  );
}

export default App;
