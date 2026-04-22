import { useEffect, useRef } from "react";

export default function Aurora() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let frame = 0;

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.1 + 0.15,
      vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15,
      alpha: Math.random() * .55 + .08,
    }));

    const blobs = [
      { bx:.78, by:.12, r:550, c:"rgba(88,101,242,",  a:.1,  s:.00032 },
      { bx:.12, by:.82, r:450, c:"rgba(6,182,212,",   a:.08, s:.00042 },
      { bx:.5,  by:.48, r:350, c:"rgba(139,92,246,",  a:.05, s:.00048 },
      { bx:.88, by:.65, r:260, c:"rgba(88,101,242,",  a:.06, s:.00058 },
      { bx:.25, by:.32, r:220, c:"rgba(6,182,212,",   a:.04, s:.00065 },
    ];

    function draw() {
      ctx.clearRect(0, 0, W, H);
      frame++;
      blobs.forEach((b, i) => {
        const ox = Math.sin(frame * b.s + i * 1.4) * 95;
        const oy = Math.cos(frame * b.s + i * 2.0) * 75;
        const cx = b.bx * W + ox, cy = b.by * H + oy;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        g.addColorStop(0, b.c + b.a + ")");
        g.addColorStop(.5, b.c + (b.a * .35) + ")");
        g.addColorStop(1, b.c + "0)");
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.filter = "blur(52px)";
        ctx.fill();
        ctx.filter = "none";
      });
      stars.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const pulse = Math.sin(frame * .016 + p.x * .01) * .3 + .7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165,171,255,${p.alpha * pulse})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }} />
      {/* Dot grid */}
      <div style={{
        position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:"radial-gradient(circle, rgba(88,101,242,0.8) 1px, transparent 1px)",
        backgroundSize:"52px 52px",
        animation:"gridPulse 6s ease-in-out infinite",
      }} />
      {/* Scan line */}
      <div style={{
        position:"fixed", left:0, right:0, height:1, zIndex:0, pointerEvents:"none",
        background:"linear-gradient(90deg,transparent,rgba(88,101,242,.1),transparent)",
        animation:"scanMove 12s linear infinite", top:0,
      }} />
    </>
  );
}
