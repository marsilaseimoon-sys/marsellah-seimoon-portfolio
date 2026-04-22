import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    let raf;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      raf = requestAnimationFrame(animate);
    };

    const over = (e) => {
      const t = e.target;
      if (t.closest('a,button,[data-hover]')) {
        ring.classList.add('hovering');
        dot.style.transform += ' scale(1.5)';
      }
    };

    const out = () => {
      ring.classList.remove('hovering');
    };

    const down = () => { ring.classList.add('clicking'); };
    const up   = () => { ring.classList.remove('clicking'); };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
