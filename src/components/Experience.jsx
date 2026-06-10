import { experience } from "../data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          number="03"
          eyebrow="Experience"
          title="Where I've worked"
          sub="9+ years across product engineering, platform work, and production support."
        />

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
