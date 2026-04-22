import { useState, useEffect } from "react";

export default function useTyping(phrases) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState({ pi: 0, ci: 0, del: false });

  useEffect(() => {
    const { pi, ci, del } = phase;
    const phrase = phrases[pi];
    const delay = del ? 55 : 90;
    const timer = setTimeout(() => {
      if (!del) {
        const next = ci + 1;
        setText(phrase.slice(0, next));
        if (next === phrase.length) setTimeout(() => setPhase(p => ({ ...p, del: true })), 1800);
        else setPhase(p => ({ ...p, ci: next }));
      } else {
        const next = ci - 1;
        setText(phrase.slice(0, next));
        if (next === 0) {
          const nextPi = (pi + 1) % phrases.length;
          setTimeout(() => setPhase({ pi: nextPi, ci: 0, del: false }), 400);
        } else setPhase(p => ({ ...p, ci: next }));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [phase, phrases]);

  return text;
}
