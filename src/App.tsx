import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SkyAtmosphere } from "./components/SkyAtmosphere";
import { Work } from "./components/Work";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="top" className="relative z-10 min-h-screen text-foreground">
          <SkyAtmosphere />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Work />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
