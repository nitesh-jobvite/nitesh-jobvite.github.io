import { skillGroups } from "../data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          number="02"
          eyebrow="Skills"
          title="Tools & technologies"
          sub="The stack I reach for to build, ship, and operate backend systems."
        />

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
