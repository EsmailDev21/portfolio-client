import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-950 min-h-screen text-white overflow-hidden">
      {/* Wavy Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          fill-opacity="0.2"
          d="M0,64L30,80C60,96,120,128,180,149.3C240,171,300,181,360,176C420,171,480,149,540,128C600,107,660,85,720,85C780,85,840,107,900,117.3C960,128,1020,128,1080,117.3C1140,107,1200,85,1260,74.7C1320,64,1380,64,1440,80L1500,96L1500,320L1440,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </div>
    <Analytics />
    </>
  );
}

export default App;
