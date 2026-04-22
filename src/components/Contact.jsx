import { useState } from "react";
import FadeIn from "./FadeIn";
import { CONTACTS } from "../constants/data";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:marsilaseimoon@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name:"", email:"", message:"" }); }, 3000);
  };

  const inputStyle = {
    width:"100%", padding:"12px 16px",
    background:"rgba(9,18,34,.8)",
    border:"1px solid rgba(88,101,242,.18)",
    borderRadius:8, color:"#f0f4ff",
    fontSize:13.5, fontFamily:"'Syne', sans-serif",
    outline:"none", transition:"border-color .25s, box-shadow .25s",
    boxSizing:"border-box",
  };

  return (
    <section id="contact" style={{
      padding:"110px 6%",
      background:"linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)",
      borderTop:"1px solid rgba(88,101,242,.08)",
      position:"relative", zIndex:1, overflow:"hidden",
    }}>
      {/* Decorative rings */}
      <div style={{ position:"absolute", right:"4%", top:"8%", width:320, height:320,
        borderRadius:"50%", border:"1px dashed rgba(88,101,242,.07)",
        animation:"spinSlow 45s linear infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", right:"7%", top:"12%", width:200, height:200,
        borderRadius:"50%", border:"1px dashed rgba(6,182,212,.05)",
        animation:"spinRev 28s linear infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", right:"10%", top:"20%",
        width:300, height:300, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(88,101,242,.07), transparent 70%)",
        pointerEvents:"none", animation:"glowBreath 5s ease-in-out infinite" }} />

      <FadeIn>
        <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:10,
          letterSpacing:".36em", textTransform:"uppercase", color:"#7c85ff",
          marginBottom:14, display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ width:28, height:1, background:"#7c85ff", display:"inline-block" }} />
          05 — Contact
        </div>
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"start" }}>

        {/* LEFT — heading + contact info */}
        <FadeIn>
          <div style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize:"clamp(30px,4vw,52px)", fontStyle:"italic", fontWeight:600,
            lineHeight:1.1, marginBottom:18, color:"#f0f4ff" }}>
            Let's build something{" "}
            <em style={{
              background:"linear-gradient(135deg, #7c85ff, #22d3ee)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              fontStyle:"normal", backgroundSize:"200% auto",
              animation:"shimmer 5s linear infinite",
            }}>remarkable.</em>
          </div>

          <p style={{ color:"#8ba0c4", fontSize:15, lineHeight:2.05,
            marginBottom:28, fontWeight:300, maxWidth:420 }}>
            Open to freelance projects, internships, and full-time roles worldwide.
            I respond within 24 hours.
          </p>

          {/* Contact rows */}
          <div style={{ border:"1px solid rgba(88,101,242,.1)", borderRadius:12,
            overflow:"hidden", background:"rgba(6,10,20,.65)",
            backdropFilter:"blur(20px)", marginBottom:24 }}>
            {CONTACTS.map(([label, value, href], i) => (
              <div key={label} style={{
                padding:"13px 20px",
                borderBottom: i < CONTACTS.length-1 ? "1px solid rgba(88,101,242,.07)" : "none",
                display:"flex", justifyContent:"space-between", alignItems:"center",
                transition:"background .25s", cursor: href ? "pointer" : "default",
              }}
                onMouseEnter={e => e.currentTarget.style.background="rgba(88,101,242,.04)"}
                onMouseLeave={e => e.currentTarget.style.background="transparent"}
              >
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9.5,
                  letterSpacing:".2em", textTransform:"uppercase", color:"#4a6080" }}>{label}</span>
                {href ? (
                  <a href={href} target={href.startsWith("http")?"_blank":"_self"} rel="noreferrer"
                    style={{ fontSize:13, color:"#8ba0c4", transition:"color .25s" }}
                    onMouseEnter={e=>e.target.style.color="#a5abff"}
                    onMouseLeave={e=>e.target.style.color="#8ba0c4"}
                  >{value}</a>
                ) : (
                  <span style={{ fontSize:13,
                    color: label==="Status" ? "#22d3ee" : "#8ba0c4",
                    fontFamily: label==="Status" ? "'JetBrains Mono',monospace" : "inherit",
                  }}>{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Response badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8,
            padding:"6px 14px", border:"1px solid rgba(6,182,212,.2)",
            background:"rgba(6,182,212,.05)", borderRadius:20, fontSize:10.5,
            fontFamily:"'JetBrains Mono',monospace", color:"#22d3ee", letterSpacing:".1em" }}>
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#22d3ee",
              animation:"dotPulse 2s infinite" }} />
            &lt; 24h response
          </div>
        </FadeIn>

        {/* RIGHT — contact form */}
        <FadeIn delay={0.18}>
          <div style={{ border:"1px solid rgba(88,101,242,.12)", borderRadius:14,
            padding:"32px 28px", background:"rgba(6,10,20,.7)",
            backdropFilter:"blur(20px) saturate(160%)",
            boxShadow:"0 0 0 1px rgba(88,101,242,.05), 0 20px 60px rgba(0,0,0,.35)" }}>

            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10,
              letterSpacing:".18em", textTransform:"uppercase", color:"#7c85ff",
              marginBottom:22 }}>Send a Message</div>

            {/* Name */}
            <div style={{ marginBottom:16 }}>
              <label style={{ display:"block", fontFamily:"'JetBrains Mono',monospace",
                fontSize:10, letterSpacing:".14em", textTransform:"uppercase",
                color:"#4a6080", marginBottom:7 }}>Your Name</label>
              <input name="name" value={form.name} onChange={handle}
                placeholder="John Doe"
                style={inputStyle}
                onFocus={e=>{e.target.style.borderColor="rgba(88,101,242,.45)";e.target.style.boxShadow="0 0 0 3px rgba(88,101,242,.1)";}}
                onBlur={e=>{e.target.style.borderColor="rgba(88,101,242,.18)";e.target.style.boxShadow="none";}}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom:16 }}>
              <label style={{ display:"block", fontFamily:"'JetBrains Mono',monospace",
                fontSize:10, letterSpacing:".14em", textTransform:"uppercase",
                color:"#4a6080", marginBottom:7 }}>Your Email</label>
              <input name="email" value={form.email} onChange={handle}
                placeholder="your@email.com"
                type="email"
                style={inputStyle}
                onFocus={e=>{e.target.style.borderColor="rgba(88,101,242,.45)";e.target.style.boxShadow="0 0 0 3px rgba(88,101,242,.1)";}}
                onBlur={e=>{e.target.style.borderColor="rgba(88,101,242,.18)";e.target.style.boxShadow="none";}}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom:22 }}>
              <label style={{ display:"block", fontFamily:"'JetBrains Mono',monospace",
                fontSize:10, letterSpacing:".14em", textTransform:"uppercase",
                color:"#4a6080", marginBottom:7 }}>Message</label>
              <textarea name="message" value={form.message} onChange={handle}
                placeholder="Tell me about your project..."
                rows={5}
                style={{ ...inputStyle, resize:"vertical", minHeight:110 }}
                onFocus={e=>{e.target.style.borderColor="rgba(88,101,242,.45)";e.target.style.boxShadow="0 0 0 3px rgba(88,101,242,.1)";}}
                onBlur={e=>{e.target.style.borderColor="rgba(88,101,242,.18)";e.target.style.boxShadow="none";}}
              />
            </div>

            {/* Submit */}
            <button onClick={submit}
              disabled={!form.name||!form.email||!form.message}
              style={{
                width:"100%", padding:"13px 0",
                background: sent
                  ? "linear-gradient(135deg,rgba(16,185,129,.3),rgba(16,185,129,.5))"
                  : "linear-gradient(135deg,rgba(88,101,242,.28),rgba(88,101,242,.52))",
                color: sent ? "#34d399" : "#a5abff",
                border: sent ? "1px solid rgba(16,185,129,.4)" : "1px solid rgba(88,101,242,.42)",
                borderRadius:8, fontSize:12, fontFamily:"'JetBrains Mono',monospace",
                letterSpacing:".18em", textTransform:"uppercase",
                cursor: (!form.name||!form.email||!form.message) ? "not-allowed" : "pointer",
                opacity: (!form.name||!form.email||!form.message) ? .45 : 1,
                transition:"all .3s",
              }}
              onMouseEnter={e=>{ if(form.name&&form.email&&form.message&&!sent) e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; }}
            >
              {sent ? "✓ Opening Mail Client..." : "Send Message →"}
            </button>

            <div style={{ marginTop:12, textAlign:"center", fontSize:11,
              color:"#4a6080", fontFamily:"'JetBrains Mono',monospace" }}>
              or email directly:{" "}
              <a href="mailto:marsilaseimoon@gmail.com"
                style={{ color:"#7c85ff" }}>marsilaseimoon@gmail.com</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
