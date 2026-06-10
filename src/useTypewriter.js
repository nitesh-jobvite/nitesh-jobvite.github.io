import { useEffect, useRef, useState } from "react";

// Cycles through `phrases` with a type-in / delete-out effect.
// Honors prefers-reduced-motion by showing the first phrase statically.
export function useTypewriter(phrases, { typeMs = 70, deleteMs = 35, holdMs = 1400 } = {}) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(reduced ? phrases[0] : "");
  const state = useRef({ phrase: 0, char: 0, deleting: false });

  useEffect(() => {
    if (reduced) return; // static text, no animation
    let timer;

    const tick = () => {
      const s = state.current;
      const full = phrases[s.phrase];

      if (!s.deleting) {
        s.char++;
        setText(full.slice(0, s.char));
        if (s.char === full.length) {
          s.deleting = true;
          timer = setTimeout(tick, holdMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      } else {
        s.char--;
        setText(full.slice(0, s.char));
        if (s.char === 0) {
          s.deleting = false;
          s.phrase = (s.phrase + 1) % phrases.length;
          timer = setTimeout(tick, typeMs * 2);
          return;
        }
        timer = setTimeout(tick, deleteMs);
      }
    };

    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
  }, [phrases, typeMs, deleteMs, holdMs, reduced]);

  return text;
}
