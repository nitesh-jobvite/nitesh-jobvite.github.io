import { projects } from "../data";
import { CodeIcon } from "../icons";

// Problem / Solution / Impact rows rendered per project.
const facets = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            Migrations, search platforms, and infrastructure work I've led or
            driven — framed by the problem, what I built, and the impact.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              className="project-card glass reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              key={p.title}
            >
              <header className="project-head">
                <span className="project-icon">
                  <CodeIcon size={22} />
                </span>
                <h3>{p.title}</h3>
              </header>

              <dl className="project-facets">
                {facets.map((f) => (
                  <div className="project-facet" key={f.key}>
                    <dt>{f.label}</dt>
                    <dd>{p[f.key]}</dd>
                  </div>
                ))}
              </dl>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
