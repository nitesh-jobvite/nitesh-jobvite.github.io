import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">Tools &amp; technologies</h2>
          <p className="section-sub">
            The stack I reach for to build, ship, and operate backend systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div
              className="skill-card glass reveal"
              style={{ transitionDelay: `${gi * 0.08}s` }}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((s, si) => (
                  <span
                    className="tag"
                    style={{ "--ti": si }}
                    key={s}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
