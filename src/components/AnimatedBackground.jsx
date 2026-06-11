import { useEffect } from "react";

// Fixed, decorative cinematic background (original code — inspired by the
// premium dark/lighting feel of high-end corporate sites, no copied assets):
//
//  - deep radial base for depth
//  - several large, blurred radial "light" sources that drift slowly
//  - a top spotlight cone
//  - a vignette for edge falloff
//  - faint animated film grain for texture
//  - scroll-driven PARALLAX: each light layer translates at a different
//    speed, giving a sense of depth as you scroll.
//
// aria-hidden (decorative). All motion is CSS/scroll and disabled under
// prefers-reduced-motion.
export default function AnimatedBackground() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        // Expose scroll position to CSS; layers consume it via --speed.
        document.documentElement.style.setProperty("--sy", String(window.scrollY));
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-base" />
      {/* Each parallax wrapper translates with scroll at its own --speed;
          the inner glow keeps its slow ambient drift. */}
      <div className="bg-par" style={{ "--speed": 0.04 }}>
        <div className="bg-spot" />
      </div>
      <div className="bg-par" style={{ "--speed": 0.08 }}>
        <div className="bg-glow bg-glow-1" />
      </div>
      <div className="bg-par" style={{ "--speed": 0.13 }}>
        <div className="bg-glow bg-glow-2" />
      </div>
      <div className="bg-par" style={{ "--speed": 0.19 }}>
        <div className="bg-glow bg-glow-3" />
      </div>
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
