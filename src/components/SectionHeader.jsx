// Large numbered section header (editorial / luxury style):
// a top hairline, a big index number + label, then the title and optional sub.
export default function SectionHeader({ number, eyebrow, title, sub }) {
  return (
    <div className="section-head reveal">
      <div className="sec-top">
        {number && <span className="sec-num">{number}</span>}
        <span className="sec-eyebrow">{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
