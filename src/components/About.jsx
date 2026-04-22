import FadeIn from "./FadeIn";
import SkillBar from "./SkillBar";

const SKILL_BARS = [
  ["HTML · CSS · JavaScript", 92],["Python & AI Engineering", 87],
  ["APIs & Integrations", 80],["Machine Learning", 76],
  ["MySQL · MongoDB", 74],["React · Next.js", 72],
  ["Git · DevOps", 71],["Node.js · Express", 68],
];

export default function About() {
  return (
    <section style={{
      padding:"100px 6%",
      borderTop:"1px solid rgba(74,158,255,.08)",
      marginTop:60, position:"relative", zIndex:1,
    }}>
      <FadeIn>
        <div style={{
          fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".36em",
          textTransform:"uppercase", color:"var(--blue)", marginBottom:14,
          display:"flex", alignItems:"center", gap:12,
        }}>
          <span style={{ width:28, height:1, background:"var(--blue)", display:"inline-block" }} />
          01 — About
        </div>
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
        <FadeIn>
          <p style={{
            fontFamily:"var(--font-serif)",
            fontSize:"clamp(18px,2.2vw,27px)",
            fontStyle:"italic", fontWeight:400, lineHeight:1.55,
            color:"var(--text)", marginBottom:22,
          }}>
            CS student engineering intelligent products at the intersection of code, design, and AI.
          </p>
          <p style={{ fontSize:14.5, color:"var(--text2)", lineHeight:2.2, fontWeight:300 }}>
            I'm <strong style={{ color:"var(--text)", fontWeight:500 }}>Marsellah Seimoon</strong>, a Computer Science student in Pakistan, specialising in full-stack web development and AI integrations — from REST API architecture to custom ML model training.<br /><br />
            My work spans{" "}
            <strong style={{ color:"var(--text)", fontWeight:500 }}>healthcare platforms</strong>,{" "}
            <strong style={{ color:"var(--text)", fontWeight:500 }}>AI voice tools</strong>,{" "}
            <strong style={{ color:"var(--text)", fontWeight:500 }}>real-time detection systems</strong>,{" "}
            and <strong style={{ color:"var(--text)", fontWeight:500 }}>business dashboards</strong>.<br /><br />
            Open to <strong style={{ color:"var(--blue2)", fontWeight:500 }}>freelance, internship, and full-time roles</strong> worldwide.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div style={{
            border:"1px solid rgba(74,158,255,.1)",
            borderRadius:12, overflow:"hidden",
            background:"rgba(6,10,20,.6)",
            backdropFilter:"blur(12px)",
            boxShadow:"0 0 0 1px rgba(74,158,255,.04), 0 20px 50px rgba(0,0,0,.3)",
          }}>
            {SKILL_BARS.map(([n, p]) => <SkillBar key={n} name={n} pct={p} />)}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
