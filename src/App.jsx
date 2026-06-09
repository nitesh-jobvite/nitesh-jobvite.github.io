import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import BackToTop from "./components/BackToTop";
import CaseStudy from "./components/CaseStudy";
import { useReveal } from "./useReveal";
import { useHashRoute, caseSlugFromRoute } from "./useHashRoute";

// Resolve the initial theme: saved preference → dark (the premium default).
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const route = useHashRoute();
  const caseSlug = caseSlugFromRoute(route);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Re-run scroll-reveal whenever the route changes (new content mounts).
  useReveal(route);

  return (
    <>
      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {caseSlug ? <CaseStudy slug={caseSlug} /> : <Home />}
      <Footer />
      <BackToTop />
    </>
  );
}
