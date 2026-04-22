import FadeIn from "./FadeIn";
import SkillCard from "./SkillCard";
import { SKILLS } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" style={{
      padding:"100px 6%",
      borderTop:"1px solid rgba(74,158,255,.08)",
      position:"relative", zIndex:1,
    }}>
      <FadeIn>
        <div style={{
          fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".36em",
          textTransform:"uppercase", color:"var(--blue)", marginBottom:12,
          display:"flex", alignItems:"center", gap:12,
        }}>
          <span style={{ width:28, height:1, background:"var(--blue)", display:"inline-block" }} />
          02 — Technical Stack
        </div>
        <h2 style={{
          fontFamily:"var(--font-serif)",
          fontSize:"clamp(36px,4.5vw,62px)",
          fontStyle:"italic", fontWeight:600, lineHeight:1.05,
          marginBottom:52, color:"var(--text)",
        }}>
          Tools I{" "}
          <em style={{
            background:"linear-gradient(135deg, var(--blue2), var(--teal2))",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            fontStyle:"normal",
          }}>master.</em>
        </h2>
      </FadeIn>

      <div style={{
        display:"grid", gridTemplateColumns:"repeat(3,1fr)",
        gap:1,
        background:"rgba(74,158,255,.07)",
        border:"1px solid rgba(74,158,255,.1)",
        borderRadius:12, overflow:"hidden",
        boxShadow:"0 0 0 1px rgba(74,158,255,.04), 0 20px 60px rgba(0,0,0,.35)",
      }}>
        {SKILLS.map((s, i) => <SkillCard key={s.name} {...s} _idx={i} />)}
      </div>
    </section>
  );
}
