import Aurora      from "./components/Aurora";
import Cursor      from "./components/Cursor";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import StatsBar    from "./components/StatsBar";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Journey     from "./components/Journey";
import Projects    from "./components/Projects";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <div style={{
      background:"var(--bg)", color:"var(--text)",
      fontFamily:"var(--font-body)", fontSize:15, lineHeight:1.7,
      overflowX:"hidden", minHeight:"100vh",
    }}>
      <Cursor />
      <Aurora />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
