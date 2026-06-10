import { useEffect, useRef, useState } from "react";

// Masked word-rise text reveal (the signature cinematic heading effect).
// Each word sits in an overflow-hidden box; its inner span rises into view
// with a staggered delay. Pass either a plain string via `children`, or
// `segments` ([{ text, accent }]) to gradient-highlight phrases.
// `onLoad` triggers on mount (hero); otherwise it triggers when scrolled into view.
function buildWords(children, segments) {
  if (segments) {
    return segments.flatMap((seg) =>
      seg.text
        .split(" ")
        .filter(Boolean)
        .map((w) => ({ w, accent: !!seg.accent }))
    );
  }
  return String(children)
    .split(" ")
    .filter(Boolean)
    .map((w) => ({ w, accent: false }));
}

export default function RevealText({ children, segments, onLoad = false }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (onLoad) {
      const t = setTimeout(() => setShown(true), 60);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onLoad]);

  const words = buildWords(children, segments);

  return (
    <span ref={ref} className={`rt ${shown ? "rt-in" : ""}`}>
      {words.map((it, i) => (
        <span className="rt-word" key={i} style={{ "--i": i }}>
          <span className={`rt-inner${it.accent ? " accent" : ""}`}>
            {it.w}
          </span>{" "}
        </span>
      ))}
    </span>
  );
}
