import { useState } from "react";

const TAG_COLORS = {
  Python:"rgba(59,130,246,.18)", Flask:"rgba(16,185,129,.18)",
  React:"rgba(96,165,250,.18)", YOLOv8:"rgba(139,92,246,.18)",
  FastAPI:"rgba(6,182,212,.18)", OpenCV:"rgba(245,158,11,.18)",
  Whisper:"rgba(245,158,11,.15)", ElevenLabs:"rgba(236,72,153,.15)",
  SQLite:"rgba(20,184,166,.15)", Bootstrap:"rgba(99,102,241,.15)",
};
const tagColor = t => { for(const[k,v] of Object.entries(TAG_COLORS)) if(t.toLowerCase().includes(k.toLowerCase())) return v; return "rgba(88,101,242,.1)"; };

const BADGE_STYLES = {
  FEATURED: { bg:"rgba(88,101,242,.2)",  border:"rgba(88,101,242,.5)",  color:"var(--accent2)" },
  NEW:      { bg:"rgba(6,182,212,.18)",  border:"rgba(6,182,212,.45)", color:"var(--teal2)" },
};

export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const [hov, setHov]   = useState(false);
  const bs = p.badge ? BADGE_STYLES[p.badge] : null;

  return (
    <div style={{
      background: open ? "rgba(9,18,34,.95)" : "rgba(7,12,24,.8)",
      borderBottom:"1px solid rgba(88,101,242,.08)",
      transition:"background .3s",
    }}>
      <div
        onClick={()=>setOpen(!open)}
        onMouseEnter={()=>setHov(true)}
        onMouseLeave={()=>setHov(false)}
        data-hover
        style={{
          display:"grid", gridTemplateColumns:"70px 1fr auto",
          alignItems:"center", gap:24, padding:"26px 32px",
          cursor:"pointer", position:"relative", overflow:"hidden",
          background:hov?"rgba(88,101,242,.04)":"transparent", transition:"background .3s",
        }}
      >
        {/* Left glow bar */}
        <div style={{
          position:"absolute", left:0, top:0, bottom:0, width:3,
          background:"linear-gradient(180deg,var(--accent),var(--teal))",
          transform:hov||open?"scaleY(1)":"scaleY(0)",
          transition:"transform .45s cubic-bezier(.16,1,.3,1)", transformOrigin:"bottom",
          boxShadow:hov||open?"2px 0 18px rgba(88,101,242,.4)":"none",
        }} />

        {/* Number */}
        <div style={{
          fontFamily:"var(--font-serif)", fontSize:30,
          color:hov||open?"var(--accent2)":"var(--text3)",
          fontStyle:"italic", fontWeight:600, transition:"color .3s", lineHeight:1,
        }}>{p.num}</div>

        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:9 }}>
            <span style={{
              padding:"3px 12px",
              border:"1px solid rgba(88,101,242,.2)",
              background:hov?"rgba(88,101,242,.1)":"rgba(88,101,242,.05)",
              fontSize:9, letterSpacing:".18em", textTransform:"uppercase",
              color:"var(--accent2)", borderRadius:4, display:"inline-flex", alignItems:"center", gap:5,
            }}>
              <span style={{ width:4, height:4, background:"var(--accent2)", borderRadius:"50%" }} />
              {p.tag}
            </span>
            {bs && (
              <span style={{
                padding:"3px 10px", background:bs.bg, border:`1px solid ${bs.border}`,
                color:bs.color, borderRadius:20, fontSize:9, letterSpacing:".12em",
                fontFamily:"var(--font-mono)", fontWeight:600,
              }}>{p.badge}</span>
            )}
          </div>
          <div style={{
            fontFamily:"var(--font-serif)", fontSize:20,
            fontWeight:600, fontStyle:"italic",
            color:hov||open?"var(--accent3)":"var(--text)", marginBottom:4,
            transition:"color .3s", lineHeight:1.2,
          }}>{p.title}</div>
          <div style={{ fontSize:12, color:"var(--text3)", fontFamily:"var(--font-mono)" }}>{p.sub}</div>
          <button onClick={e=>{e.stopPropagation();setOpen(!open);}} style={{
            marginTop:9, background:"none", border:"none", padding:0,
            fontFamily:"var(--font-mono)", fontSize:10,
            color:open?"var(--accent2)":"var(--text3)", cursor:"pointer",
            letterSpacing:".14em", textTransform:"uppercase",
            display:"flex", alignItems:"center", gap:5, transition:"color .25s",
          }}>
            {open?"Close":"Details"}{" "}
            <span style={{ display:"inline-block", transition:"transform .35s", transform:open?"rotate(180deg)":"none" }}>▾</span>
          </button>
        </div>

        {/* Tech tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:5, justifyContent:"flex-end", maxWidth:220 }}>
          {p.tags.map(t=>(
            <span key={t} style={{
              padding:"3px 10px", background:tagColor(t),
              border:"1px solid rgba(88,101,242,.12)",
              fontSize:10, color:"var(--text2)", fontFamily:"var(--font-mono)",
              borderRadius:5, transition:"all .2s",
            }}
              onMouseEnter={e=>{e.target.style.borderColor="rgba(88,101,242,.35)";e.target.style.color="var(--accent2)";}}
              onMouseLeave={e=>{e.target.style.borderColor="rgba(88,101,242,.12)";e.target.style.color="var(--text2)";}}
            >{t}</span>
          ))}
        </div>
      </div>

      {/* Expanded */}
      {open && (
        <div style={{
          padding:"28px 32px 28px 110px",
          background:"rgba(6,10,22,.85)",
          borderTop:"1px solid rgba(88,101,242,.08)",
          animation:"fadeUp .35s ease forwards",
        }}>
          <p style={{ fontSize:14, color:"var(--text2)", lineHeight:2.05, marginBottom:22, maxWidth:680, fontWeight:300 }}>{p.desc}</p>
          {p.metrics && (
            <div style={{
              display:"inline-grid", gridTemplateColumns:`repeat(${p.metrics.length},1fr)`,
              gap:1, background:"rgba(88,101,242,.08)",
              border:"1px solid rgba(88,101,242,.12)", marginBottom:22, borderRadius:10, overflow:"hidden",
            }}>
              {p.metrics.map(m=>(
                <div key={m.l} style={{ padding:"16px 22px", background:"var(--bg2)", textAlign:"center", transition:"background .3s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="var(--bg3)"}
                  onMouseLeave={e=>e.currentTarget.style.background="var(--bg2)"}
                >
                  <div style={{
                    fontFamily:"var(--font-serif)", fontSize:28, fontStyle:"italic", fontWeight:600,
                    background:"linear-gradient(135deg,var(--accent2),var(--accent3))",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1,
                  }}>{m.v}</div>
                  <div style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"var(--text3)", letterSpacing:".12em", textTransform:"uppercase", marginTop:5 }}>{m.l}</div>
                </div>
              ))}
            </div>
          )}
          <a href={p.link} target="_blank" rel="noreferrer" data-hover
            style={{
              display:"inline-flex", alignItems:"center", gap:9, padding:"11px 24px",
              background:"linear-gradient(135deg,rgba(88,101,242,.2),rgba(88,101,242,.38))",
              color:"var(--accent3)", fontSize:11.5, fontFamily:"var(--font-mono)",
              letterSpacing:".12em", textTransform:"uppercase",
              border:"1px solid rgba(88,101,242,.38)", borderRadius:8, transition:"all .3s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 10px 30px rgba(88,101,242,.22)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
          >View on GitHub →</a>
        </div>
      )}
    </div>
  );
}
