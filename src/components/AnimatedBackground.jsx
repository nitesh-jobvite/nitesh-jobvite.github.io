// Fixed, decorative cinematic background (Mont-Fort-inspired, original code):
// a deep base, two large soft light glows that drift slowly, a vignette for
// depth, and a faint film grain for a premium texture. aria-hidden so it is
// ignored by assistive tech; all motion is CSS and disabled under
// prefers-reduced-motion (see index.css).
export default function AnimatedBackground() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
