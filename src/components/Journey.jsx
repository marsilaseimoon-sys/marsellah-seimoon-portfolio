import FadeIn from "./FadeIn";
import { JOURNEY } from "../constants/data";

export default function Journey() {
  return (
    <section id="journey" style={{
      padding:"100px 6%",
      borderTop:"1px solid rgba(74,158,255,.08)",
      position:"relative", zIndex:1,
    }}>
      <FadeIn>
        <div style={{
          fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".36em",
          textTransform:"uppercase", color:"var(--blue)", marginBottom:14,
          display:"flex", alignItems:"center", gap:12,
        }}>
          <span style={{ width:28, height:1, background:"var(--blue)", display:"inline-block" }} />
          03 — Journey
        </div>
        <h2 style={{
          fontFamily:"var(--font-serif)",
          fontSize:"clamp(36px,4.5vw,62px)",
          fontWeight:600, fontStyle:"italic", lineHeight:1.05, marginBottom:56,
          color:"var(--text)",
        }}>
          Where I've{" "}
          <em style={{
            background:"linear-gradient(135deg, var(--blue2), var(--teal2))",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            fontStyle:"normal",
          }}>been.</em>
        </h2>
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }}>
        {JOURNEY.map(({ label, items }) => (
          <FadeIn key={label}>
            <div style={{
              display:"flex", alignItems:"center", gap:12, marginBottom:28,
            }}>
              <span style={{ fontFamily:"var(--font-mono)", fontSize:9.5, letterSpacing:".28em",
                textTransform:"uppercase", color:"var(--blue)" }}>{label}</span>
              <div style={{ flex:1, height:1, background:"linear-gradient(90deg,rgba(74,158,255,.3),transparent)" }} />
            </div>

            <div style={{ position:"relative", paddingLeft:44 }}>
              {/* Timeline line */}
              <div style={{
                position:"absolute", left:0, top:0, bottom:0, width:1,
                background:"linear-gradient(180deg, var(--blue), rgba(74,158,255,.08))",
              }} />

              {items.map((it, i) => (
                <div key={i} style={{ position:"relative", marginBottom:36 }}>
                  {/* Timeline dot */}
                  <div style={{
                    position:"absolute", left:-48, top:6,
                    width:10, height:10, borderRadius:"50%",
                    background:"var(--blue2)",
                    boxShadow:"0 0 0 3px var(--bg), 0 0 0 6px rgba(74,158,255,.2), 0 0 14px rgba(74,158,255,.5)",
                  }} />

                  <div style={{
                    padding:"18px 20px",
                    background:"rgba(74,158,255,.03)",
                    border:"1px solid rgba(74,158,255,.08)",
                    borderRadius:10,
                    transition:"all .3s",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(74,158,255,.06)";
                      e.currentTarget.style.borderColor = "rgba(74,158,255,.18)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(74,158,255,.03)";
                      e.currentTarget.style.borderColor = "rgba(74,158,255,.08)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div style={{
                      fontFamily:"var(--font-mono)", fontSize:10, color:"var(--blue2)",
                      letterSpacing:".16em", textTransform:"uppercase", marginBottom:6,
                    }}>{it.year}</div>
                    <div style={{
                      fontFamily:"var(--font-serif)", fontSize:20,
                      fontStyle:"italic", fontWeight:600,
                      color:"var(--text)", marginBottom:3, lineHeight:1.2,
                    }}>{it.title}</div>
                    <div style={{
                      fontSize:12, color:"var(--text3)",
                      letterSpacing:".06em", fontFamily:"var(--font-mono)",
                      marginBottom:10,
                    }}>{it.place}</div>
                    <div style={{
                      fontSize:13.5, color:"var(--text2)",
                      lineHeight:1.95, fontWeight:300,
                    }}>{it.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
