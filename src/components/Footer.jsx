export default function Footer() {
  const links = [
    ["GitHub",  "https://github.com/marsilaseimoon-sys/"],
    ["Fiverr",  "https://www.fiverr.com/s/kLBPdjb"],
    ["Email",   "mailto:marsellaseimoon@gmail.com"],
  ];

  return (
    <footer style={{
      padding:"24px 6%",
      borderTop:"1px solid rgba(74,158,255,.08)",
      display:"flex", justifyContent:"space-between", alignItems:"center",
      flexWrap:"wrap", gap:12,
      position:"relative", zIndex:1,
      background:"rgba(3,5,13,.9)",
      backdropFilter:"blur(20px)",
    }}>
      {/* Logo mark */}
      <span style={{
        fontFamily:"var(--font-serif)", fontSize:20,
        fontStyle:"italic", fontWeight:600,
        background:"linear-gradient(135deg, var(--blue3), var(--blue2), var(--teal2))",
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        backgroundSize:"200% auto", animation:"shimmer 5s linear infinite",
      }}>Marsellah Seimoon</span>

      {/* Links */}
      <div style={{ display:"flex", gap:24 }}>
        {links.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{
              color:"var(--text3)", fontSize:10.5, fontFamily:"var(--font-mono)",
              letterSpacing:".16em", textTransform:"uppercase",
              fontWeight:400, transition:"all .25s",
            }}
            onMouseEnter={e => { e.target.style.color = "var(--blue2)"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.color = "var(--text3)"; e.target.style.transform = "translateY(0)"; }}
          >{label}</a>
        ))}
      </div>

      {/* Copyright */}
      <span style={{
        fontFamily:"var(--font-mono)", fontSize:10.5,
        letterSpacing:".1em", color:"var(--text3)",
      }}>© 2026 Marsellah Seimoon</span>
    </footer>
  );
}
