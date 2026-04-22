import { useState, useEffect } from "react";
import useTyping from "../hooks/useTyping";
import { PHRASES } from "../constants/data";

const PHOTO_URL = "/photo.png";

export default function Hero() {
  const [vis, setVis] = useState(false);
  const typedText = useTyping(PHRASES);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);

  const f = (d=0) => ({
    opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(24px)",
    transition:`opacity .75s ${d}s, transform .75s ${d}s`,
  });

  return (
    <section id="about" style={{
      minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 380px",
      gap:72, alignItems:"center", padding:"150px 6% 110px",
      position:"relative", zIndex:1,
    }}>
      {/* LEFT */}
      <div>
        {/* Eyebrow */}
        <div style={{ ...f(.1), fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".44em", textTransform:"uppercase", color:"var(--accent2)", marginBottom:28, display:"flex", alignItems:"center", gap:16 }}>
          <span style={{ display:"inline-block", width:48, height:1, background:"linear-gradient(90deg,var(--accent2),transparent)" }} />
          Full-Stack · AI Engineer · Pakistan 🇵🇰
          <span style={{ display:"inline-block", width:48, height:1, background:"linear-gradient(270deg,var(--accent2),transparent)" }} />
        </div>

        {/* Name */}
        <div style={f(.2)}>
          <span style={{
            display:"block", fontFamily:"var(--font-serif)",
            fontSize:"clamp(66px,9.5vw,132px)", fontWeight:600, fontStyle:"italic", lineHeight:.82,
            background:"linear-gradient(115deg,#fff 0%,var(--accent3) 32%,var(--accent2) 58%,var(--teal2) 88%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            backgroundSize:"300% auto", animation:"shimmer 8s linear infinite",
            letterSpacing:"-.02em",
          }}>Marsellah</span>
          <span style={{
            display:"block", fontFamily:"var(--font-mono)",
            fontSize:"clamp(12px,1.5vw,18px)", color:"var(--text3)",
            letterSpacing:".3em", textTransform:"uppercase", marginTop:18,
          }}>Seimoon</span>
        </div>

        {/* Divider */}
        <div style={{
          ...f(.88), width:0, height:1,
          background:"linear-gradient(90deg,var(--accent),var(--teal),transparent)",
          margin:"26px 0",
          animation:vis?"wideExpand 1.3s .88s cubic-bezier(.16,1,.3,1) forwards":"none",
        }} />

        {/* Typing */}
        <div style={{ ...f(.68), marginBottom:20 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:11.5, color:"var(--text3)", letterSpacing:".18em", textTransform:"uppercase" }}>Building — </span>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:11.5, color:"var(--teal2)" }}>{typedText}</span>
          <span style={{ display:"inline-block", width:2, height:13, background:"var(--accent2)", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite" }} />
        </div>

        {/* Available badge */}
        <div style={{
          ...f(.82),
          display:"inline-flex", alignItems:"center", gap:8,
          padding:"8px 18px",
          border:"1px solid rgba(6,182,212,.3)",
          background:"rgba(6,182,212,.05)",
          fontSize:10, letterSpacing:".22em", textTransform:"uppercase",
          color:"var(--teal2)", marginBottom:28, borderRadius:4,
          animation:"borderGlow 4s ease-in-out infinite",
        }}>
          <span style={{ width:6, height:6, background:"var(--teal2)", borderRadius:"50%", animation:"dotPulse 2.2s infinite" }} />
          Open to Opportunities · 2026
        </div>

        {/* Bio */}
        <p style={{ ...f(1.0), maxWidth:530, color:"var(--text2)", fontSize:15.5, lineHeight:2.1, marginBottom:32, fontWeight:300 }}>
          I build <strong style={{ color:"var(--text)", fontWeight:500 }}>intelligent web applications</strong> and AI-powered systems — merging full-stack engineering with machine learning to create products that are{" "}
          <strong style={{ color:"var(--text)", fontWeight:500 }}>precise, performant, and beautifully crafted.</strong>
        </p>

        {/* Social */}
        <div style={{ ...f(1.06), display:"flex", gap:8, flexWrap:"wrap", marginBottom:26 }}>
          {[["GitHub","https://github.com/marsilaseimoon-sys/"],["Fiverr","https://www.fiverr.com/s/kLBPdjb"],["Email","mailto:marsellaseimoon@gmail.com"]].map(([l,h])=>(
            <a key={l} href={h} target="_blank" rel="noreferrer" data-hover
              style={{
                display:"inline-flex", alignItems:"center", gap:7, padding:"9px 18px",
                border:"1px solid rgba(88,101,242,.16)",
                color:"var(--text3)", fontSize:11, fontFamily:"var(--font-mono)",
                letterSpacing:".12em", textTransform:"uppercase",
                borderRadius:8, transition:"all .3s",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(88,101,242,.45)"; e.currentTarget.style.color="var(--accent2)"; e.currentTarget.style.background="rgba(88,101,242,.08)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(88,101,242,.16)"; e.currentTarget.style.color="var(--text3)"; e.currentTarget.style.background="transparent"; e.currentTarget.style.transform="translateY(0)"; }}
            >{l}</a>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ ...f(1.14), display:"flex", gap:12, flexWrap:"wrap" }}>
          <a href="#projects" data-hover style={{
            display:"inline-flex", alignItems:"center", gap:10, padding:"14px 32px",
            background:"linear-gradient(135deg,rgba(88,101,242,.28),rgba(88,101,242,.52))",
            color:"var(--accent3)", fontSize:11.5, fontFamily:"var(--font-mono)",
            letterSpacing:".2em", textTransform:"uppercase", fontWeight:500,
            border:"1px solid rgba(88,101,242,.42)", borderRadius:8, transition:"all .35s",
          }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(88,101,242,.25)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
          >View My Work →</a>
          <a href="#contact" data-hover style={{
            display:"inline-flex", alignItems:"center", gap:10, padding:"14px 24px",
            border:"1px solid rgba(88,101,242,.18)", color:"var(--text3)",
            fontSize:11.5, fontFamily:"var(--font-mono)", letterSpacing:".14em",
            textTransform:"uppercase", borderRadius:8, transition:"all .3s",
          }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(88,101,242,.45)"; e.currentTarget.style.color="var(--text)"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(88,101,242,.18)"; e.currentTarget.style.color="var(--text3)"; e.currentTarget.style.transform="translateY(0)"; }}
          >Get in Touch</a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div style={{ ...f(.28), display:"flex", flexDirection:"column", alignItems:"center", gap:24 }}>
        <div style={{ position:"relative", width:320, height:400 }}>
          {/* Orbit rings */}
          <div style={{ position:"absolute", inset:-36, borderRadius:"50%", border:"1px dashed rgba(88,101,242,.14)", animation:"spinSlow 38s linear infinite", zIndex:0 }}>
            {[0,72,144,216,288].map(deg=>(
              <div key={deg} style={{
                position:"absolute", width:8, height:8, borderRadius:"50%",
                top:"50%", left:"50%",
                transform:`rotate(${deg}deg) translateX(calc(50% + 6px)) translateY(-50%)`,
                background: deg%144===0 ? "var(--teal2)" : "var(--accent2)",
                boxShadow:`0 0 10px ${deg%144===0?"rgba(34,211,238,.9)":"rgba(124,133,255,.9)"}`,
              }} />
            ))}
          </div>
          <div style={{ position:"absolute", inset:-18, borderRadius:"50%", border:"1px dashed rgba(6,182,212,.1)", animation:"spinRev 24s linear infinite", zIndex:0 }} />

          {/* Glow */}
          <div style={{ position:"absolute", inset:-10, background:"radial-gradient(ellipse at 50% 50%,rgba(88,101,242,.16),transparent 72%)", borderRadius:16, zIndex:0, animation:"glowBreath 4.5s ease-in-out infinite" }} />

          {/* Gradient border */}
          <div style={{
            position:"absolute", inset:-3, borderRadius:16,
            background:"linear-gradient(135deg,var(--accent),var(--teal),var(--violet),var(--accent))",
            backgroundSize:"400% 400%", animation:"gradientFlow 7s ease infinite",
            opacity:.55, zIndex:1, filter:"blur(1.5px)",
          }} />

          {/* Photo */}
          <div style={{ position:"relative", zIndex:2, margin:3, borderRadius:14, overflow:"hidden", background:"var(--bg)", height:"calc(100% - 6px)" }}>
            <img src={PHOTO_URL} alt="Marsellah Seimoon" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block", filter:"saturate(1.08) contrast(1.05)" }} />
            {[{top:12,left:12,borderWidth:"2px 0 0 2px"},{top:12,right:12,borderWidth:"2px 2px 0 0"},{bottom:12,left:12,borderWidth:"0 0 2px 2px"},{bottom:12,right:12,borderWidth:"0 2px 2px 0"}].map((s,i)=>(
              <div key={i} style={{ position:"absolute", width:22, height:22, borderColor:"var(--accent3)", borderStyle:"solid", opacity:.7, zIndex:3, ...s }} />
            ))}
            <div style={{ position:"absolute", inset:0, zIndex:2, pointerEvents:"none", background:"linear-gradient(180deg,transparent 55%,rgba(4,6,15,.78) 100%)" }} />
          </div>

          {/* Status chip */}
          <div style={{
            position:"absolute", bottom:-18, left:14, zIndex:5,
            display:"flex", alignItems:"center", gap:8, padding:"9px 16px",
            background:"rgba(4,6,15,.98)", border:"1px solid rgba(88,101,242,.22)",
            fontSize:10, color:"var(--text)", backdropFilter:"blur(24px)", borderRadius:6,
            whiteSpace:"nowrap", fontFamily:"var(--font-mono)",
            boxShadow:"0 8px 32px rgba(0,0,0,.5)",
          }}>
            <span style={{ width:7, height:7, background:"var(--teal2)", borderRadius:"50%", animation:"dotPulse 2.4s infinite" }} />
            Open to Work · 2026
          </div>

          {/* Badge */}
          <div style={{
            position:"absolute", top:-14, right:8, zIndex:5,
            padding:"5px 14px", background:"rgba(88,101,242,.14)",
            border:"1px solid rgba(88,101,242,.32)",
            fontFamily:"var(--font-mono)", fontSize:9,
            color:"var(--accent2)", letterSpacing:".18em", borderRadius:20,
          }}>FULL-STACK · AI</div>
        </div>

        {/* Skill tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:7, justifyContent:"center", marginTop:30, maxWidth:300 }}>
          {["React & Next.js","Python · Flask","AI / ML","YOLOv8","Node.js","Computer Vision"].map(p=>(
            <span key={p} data-hover style={{
              padding:"5px 13px", background:"rgba(88,101,242,.06)",
              border:"1px solid rgba(88,101,242,.14)", fontSize:10.5,
              color:"var(--text3)", letterSpacing:".06em", fontFamily:"var(--font-mono)",
              borderRadius:5, transition:"all .35s",
            }}
              onMouseEnter={e=>{ e.target.style.borderColor="rgba(88,101,242,.38)"; e.target.style.color="var(--accent2)"; e.target.style.background="rgba(88,101,242,.1)"; e.target.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.target.style.borderColor="rgba(88,101,242,.14)"; e.target.style.color="var(--text3)"; e.target.style.background="rgba(88,101,242,.06)"; e.target.style.transform="translateY(0)"; }}
            >{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
