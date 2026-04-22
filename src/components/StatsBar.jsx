import { useRef, useEffect, useState } from "react";
import { STATS } from "../constants/data";

function useCountUp(target, dur = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target);
    if (isNaN(num)) { setVal(target); return; }
    let s = 0, step = num / (dur / 16);
    const id = setInterval(() => {
      s = Math.min(s + step, num);
      setVal(Math.floor(s));
      if (s >= num) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [start]);
  return val;
}

function StatCell({ n, l, index }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [hov, setHov] = useState(false);
  const suffix = n.replace(/[0-9]/g, "");
  const count = useCountUp(n, 1600, started);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex:1, padding:"30px 20px",
        borderRight:"1px solid rgba(88,101,242,.08)",
        textAlign:"center", cursor:"default",
        transition:"all .4s cubic-bezier(.16,1,.3,1)",
        background: hov ? "rgba(88,101,242,.05)" : "transparent",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        position:"relative", overflow:"hidden",
      }}>
      {/* hover glow */}
      <div style={{
        position:"absolute", inset:0,
        background: hov
          ? "radial-gradient(ellipse at 50% 0%, rgba(88,101,242,.1), transparent 70%)"
          : "transparent",
        transition:"background .4s", pointerEvents:"none",
      }} />

      {/* NUMBER — no WebkitTextFillColor so it always shows */}
      <div style={{
        fontFamily:"'Cormorant Garamond', Georgia, serif",
        fontSize: 46, fontStyle:"italic", fontWeight:600, lineHeight:1,
        color: hov ? "#5eead4" : "#7c85ff",
        textShadow: hov
          ? "0 0 30px rgba(94,234,212,.4)"
          : "0 0 30px rgba(124,133,255,.35)",
        transition:"all .4s",
        animation: started ? `countUp .6s ${index * 0.12}s both` : "none",
        position:"relative", zIndex:1,
      }}>
        {typeof count === "number" ? count + suffix : n}
      </div>

      <div style={{
        fontFamily:"'JetBrains Mono', monospace",
        fontSize:9.5, letterSpacing:".2em", textTransform:"uppercase",
        color: hov ? "#94a3b8" : "#4a6080",
        marginTop:10, transition:"color .4s",
        position:"relative", zIndex:1,
      }}>{l}</div>

      <style>{`@keyframes countUp{from{opacity:0;transform:translateY(10px) scale(.85)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div style={{
      display:"flex",
      border:"1px solid rgba(88,101,242,.1)",
      margin:"0 6%", position:"relative", zIndex:1,
      borderRadius:12, overflow:"hidden",
      background:"rgba(6,10,20,.75)",
      backdropFilter:"blur(20px) saturate(160%)",
      boxShadow:"0 0 0 1px rgba(88,101,242,.05), 0 20px 60px rgba(0,0,0,.4)",
    }}>
      {STATS.map(({ n, l }, i) => <StatCell key={l} n={n} l={l} index={i} />)}
    </div>
  );
}
