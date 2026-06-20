import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub">
            10+ years across product engineering, platform work, and production
            support.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article
              className={`exp-item reveal ${job.current ? "current" : ""}`}
              key={`${job.company}-${job.period}`}
            >
              <div className="exp-head">
                <h3 className="exp-role">{job.role}</h3>
                <span className="exp-period">{job.period}</span>
              </div>
              <p className="exp-company">
                {job.company} <span className="exp-loc">· {job.location}</span>
              </p>
              <ul className="exp-points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
