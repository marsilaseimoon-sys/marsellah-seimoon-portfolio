import { useState } from "react";
import useInView from "../hooks/useInView";

export default function SkillBar({ name, pct }) {
  const [ref, vis] = useInView(0.1);
  const [hov, setHov] = useState(false);

  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding:"14px 18px",
        background: hov ? "rgba(74,158,255,.04)" : "transparent",
        transition:"background .3s",
      }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:7 }}>
        <span style={{ fontSize:12.5, color: hov ? "var(--text)" : "var(--text2)", transition:"color .3s", fontWeight:400 }}>{name}</span>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color: hov ? "var(--teal2)" : "var(--text3)", transition:"color .3s" }}>{pct}%</span>
      </div>
      <div style={{ height:2, background:"rgba(74,158,255,.08)", borderRadius:2, overflow:"hidden" }}>
        <div style={{
          height:"100%",
          background:"linear-gradient(90deg, var(--blue), var(--teal))",
          width: vis ? pct + "%" : "0",
          transition:"width 1.8s cubic-bezier(.16,1,.3,1)",
          borderRadius:2,
          boxShadow: vis ? "0 0 8px rgba(74,158,255,.4)" : "none",
        }} />
      </div>
    </div>
  );
}
