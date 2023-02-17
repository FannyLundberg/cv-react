import "./App.css";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <div>
      <HeroSection />
      <main>
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;
