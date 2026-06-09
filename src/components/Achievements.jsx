import { achievements } from "../data";
import { SparkIcon, SearchIcon, CloudIcon, SupportIcon } from "../icons";

// Map the data `icon` keys to components (keeps data.js icon-free).
const iconMap = {
  spark: SparkIcon,
  search: SearchIcon,
  cloud: CloudIcon,
  support: SupportIcon,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Highlights</span>
          <h2 className="section-title">What I bring to the table</h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <div
                className="achievement-card glass reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
                key={a.title}
              >
                <span className="achievement-icon">
                  <Icon size={22} />
                </span>
                <div className="achievement-value">{a.value}</div>
                <div className="achievement-title">{a.title}</div>
                <p className="achievement-desc">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
