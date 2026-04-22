import { useState } from "react";
import useInView from "../hooks/useInView";

const COLORS = [
  ["var(--blue)","var(--blue2)"],
  ["var(--teal)","var(--teal2)"],
  ["var(--violet)","var(--violet2)"],
  ["var(--blue)","var(--teal2)"],
  ["var(--teal)","var(--blue3)"],
  ["var(--violet)","var(--blue2)"],
  ["var(--blue2)","var(--teal)"],
  ["var(--teal2)","var(--violet2)"],
  ["var(--blue)","var(--violet2)"],
];

export default function SkillCard({ icon, name, desc, pct, _idx = 0 }) {
  const [ref, vis] = useInView(0.1);
  const [hov, setHov] = useState(false);
  const [c1, c2] = COLORS[_idx % COLORS.length];

  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding:"28px 24px",
        background: hov ? "var(--bg3)" : "var(--bg2)",
        transition:"all .4s cubic-bezier(.16,1,.3,1)",
        position:"relative", overflow:"hidden", cursor:"default",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}>

      {/* Top-right corner glow */}
      <div style={{
        position:"absolute", top:-30, right:-30,
        width:120, height:120, borderRadius:"50%",
        background: hov ? `radial-gradient(circle, ${c1}22, transparent 70%)` : "transparent",
        transition:"background .4s",
        pointerEvents:"none",
      }} />

      {/* Bottom accent bar */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:2,
        background:`linear-gradient(90deg, ${c1}, ${c2})`,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transition:"transform .5s cubic-bezier(.16,1,.3,1)",
        transformOrigin:"left",
        boxShadow: hov ? `0 0 14px ${c1}55` : "none",
      }} />

      {/* Left accent bar */}
      <div style={{
        position:"absolute", top:0, left:0, bottom:0, width:2,
        background:`linear-gradient(180deg, ${c1}, transparent)`,
        transform: hov ? "scaleY(1)" : "scaleY(0)",
        transition:"transform .5s .05s cubic-bezier(.16,1,.3,1)",
        transformOrigin:"top",
      }} />

      {/* Icon */}
      <div style={{
        fontSize:24, marginBottom:16,
        display:"inline-flex", padding:"10px",
        borderRadius:10,
        background: hov ? `rgba(${c1 === "var(--blue)" ? "74,158,255" : "45,212,191"},.1)` : "rgba(74,158,255,.05)",
        border:`1px solid ${hov ? c1 + "40" : "rgba(74,158,255,.08)"}`,
        transition:"all .35s",
        transform: hov ? "scale(1.12) rotate(-2deg)" : "scale(1) rotate(0deg)",
      }}>{icon}</div>

      <div style={{
        fontSize:13.5, fontWeight:500,
        color: hov ? "var(--text)" : "#c8d8f0",
        marginBottom:8, transition:"color .3s",
        letterSpacing:".01em",
      }}>{name}</div>

      <div style={{
        fontSize:12, color:"var(--text3)",
        lineHeight:1.85, marginBottom:18, fontWeight:300,
      }}>{desc}</div>

      {/* Progress */}
      <div style={{
        height:3, background:"rgba(74,158,255,.1)",
        borderRadius:2, overflow:"hidden", marginBottom:6,
      }}>
        <div style={{
          height:"100%",
          background:`linear-gradient(90deg, ${c1}, ${c2})`,
          backgroundSize:"200% auto",
          width: vis ? pct + "%" : "0",
          transition:"width 2s cubic-bezier(.16,1,.3,1)",
          animation: vis ? "shimmer 3.5s linear infinite" : "none",
          borderRadius:2,
          boxShadow: vis ? `0 0 8px ${c1}55` : "none",
        }} />
      </div>

      <div style={{
        fontFamily:"var(--font-mono)", fontSize:10.5,
        color: hov ? c2 : "var(--text3)",
        fontWeight:500, transition:"color .3s",
      }}>{pct}%</div>
    </div>
  );
}
