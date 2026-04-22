import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants/data";

export default function Projects() {
  return (
    <section id="projects" style={{
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
          04 — Projects
        </div>
        <h2 style={{
          fontFamily:"var(--font-serif)",
          fontSize:"clamp(36px,4.5vw,62px)",
          fontWeight:600, fontStyle:"italic", lineHeight:1.05,
          marginBottom:52, color:"var(--text)",
        }}>
          Things I've{" "}
          <em style={{
            background:"linear-gradient(135deg, var(--blue2), var(--teal2))",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            fontStyle:"normal",
          }}>shipped.</em>
        </h2>
      </FadeIn>

      <div style={{
        border:"1px solid rgba(74,158,255,.09)",
        borderRadius:14, overflow:"hidden",
        background:"var(--bg2)",
        boxShadow:"0 0 0 1px rgba(74,158,255,.04), 0 24px 72px rgba(0,0,0,.4)",
      }}>
        {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
