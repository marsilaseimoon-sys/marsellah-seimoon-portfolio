import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      display:"flex", justifyContent:"space-between", alignItems:"center",
      padding: scrolled ? "12px 6%" : "22px 6%",
      transition:"all .5s cubic-bezier(.16,1,.3,1)",
      background: scrolled ? "rgba(4,6,15,.94)" : "transparent",
      backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
      borderBottom: scrolled ? "1px solid rgba(88,101,242,.1)" : "1px solid transparent",
    }}>
      {/* Logo */}
      <a href="#" data-hover style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ position:"relative", width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{
            position:"absolute", inset:0,
            border:"1px solid rgba(88,101,242,.4)",
            borderRadius:9, animation:"spinSlow 16s linear infinite", opacity:.5,
          }} />
          <div style={{
            position:"absolute", inset:5,
            border:"1px solid rgba(6,182,212,.3)",
            borderRadius:6, animation:"spinRev 10s linear infinite", opacity:.6,
          }} />
          <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:"var(--accent2)", position:"relative", zIndex:1, fontWeight:600 }}>M</span>
        </div>
        <span style={{
          fontFamily:"var(--font-serif)", fontSize:22, fontWeight:600, fontStyle:"italic",
          background:"linear-gradient(120deg,var(--accent3),var(--accent2),var(--teal2))",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          backgroundSize:"300% auto", animation:"shimmer 6s linear infinite",
        }}>Marsellah</span>
      </a>

      <div style={{ display:"flex", gap:28, alignItems:"center" }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} data-hover
            style={{
              fontFamily:"var(--font-mono)", fontSize:10.5,
              letterSpacing:".22em", textTransform:"uppercase",
              color:"var(--text3)", fontWeight:400, transition:"color .25s",
            }}
            onMouseEnter={e => e.currentTarget.style.color="var(--accent2)"}
            onMouseLeave={e => e.currentTarget.style.color="var(--text3)"}
          >{l}</a>
        ))}
        <a href="https://github.com/marsilaseimoon-sys/" target="_blank" rel="noreferrer" data-hover
          style={{
            padding:"8px 20px",
            border:"1px solid rgba(88,101,242,.3)",
            color:"var(--accent2)", fontSize:10.5,
            fontFamily:"var(--font-mono)", letterSpacing:".18em", textTransform:"uppercase",
            fontWeight:400, borderRadius:8, transition:"all .3s",
            background:"rgba(88,101,242,.06)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background="rgba(88,101,242,.14)"; e.currentTarget.style.borderColor="rgba(88,101,242,.5)"; e.currentTarget.style.transform="translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="rgba(88,101,242,.06)"; e.currentTarget.style.borderColor="rgba(88,101,242,.3)"; e.currentTarget.style.transform="translateY(0)"; }}
        >GitHub</a>
      </div>
    </nav>
  );
}
