import { projects } from "../data";
import { CodeIcon } from "../icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            Migrations, search platforms, and infrastructure work I've led or
            contributed to.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              className="project-card glass reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              key={p.title}
            >
              <div className="project-icon">
                <CodeIcon size={22} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
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
